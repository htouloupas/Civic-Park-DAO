from django.shortcuts import render
from .models import Campaign, AprioriResult
from .tables import CampaignTable, AprioriResultTable
from django_tables2 import RequestConfig
from .functions.generic_functions import get_apriori_result, get_conn_to_db
from urllib.parse import unquote
import adal
import requests
import logging

logging.basicConfig(filename='logdjango.txt',
                            filemode='a',
                            format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
                            datefmt='%H:%M:%S',
                            level=logging.DEBUG)


def browse_campaigns(request):
    if request.method == 'POST':
        try:
            supp = float(request.POST.get('aprioriSupport'))
            conn = get_conn_to_db()
            cur = conn.cursor()
            cur.execute("DROP TABLE IF EXISTS civicpark_aprioriresult;")
            conn.commit()
            sql_query = """
                                SELECT FAMobility, FASafety, SAEconomic, SARoadsTrans, 
                                TArtificialIntelligence,  TAutonomousVehicles, TGeospatial, TIoT, TSensors
                                FROM civicpark_campaign
                            """

            get_apriori_result(sql_query, conn, supp).to_sql('civicpark_aprioriresult', con=conn, index_label='id')
            conn.close()

            table = AprioriResultTable(AprioriResult.objects.all())
            RequestConfig(request, paginate=False).configure(table)
            return render(request, 'browse_campaigns.html', {'table': table})
        except ValueError:
            table = CampaignTable(Campaign.objects.all())
            RequestConfig(request, paginate=False).configure(table)
            return render(request, 'browse_campaigns.html', {'table': table})

    elif request.method == 'GET':
        table = CampaignTable(Campaign.objects.all())
        RequestConfig(request, paginate=False).configure(table)
        return render(request, 'browse_campaigns.html', {'table': table})


def filtered_campaigns(request, categories):

    categories = unquote(categories)
    categories_list = categories.replace(" ", "").split(",")
    sql = "SELECT * FROM main.civicpark_campaign WHERE "
    for category in categories_list:
        sql += f"{category}=1 AND "
    sql = sql[:-4] + ";"

    table = CampaignTable(Campaign.objects.raw(sql))
    RequestConfig(request, paginate=False).configure(table)
    return render(request, 'browse_campaigns.html', {'table': table})


def index(request):
    return render(request, 'index.html')


def campaign_info(request, campaign_name):

    authority_url = 'https://login.microsoftonline.com/mystudiomoutlook.onmicrosoft.com'
    auth_context = adal.AuthenticationContext(authority_url, validate_authority=False)

    #SESSION = requests.Session()

    token_response = auth_context.acquire_token_with_client_credentials(
        '319d2ec7-6807-4ce1-874b-fecaabad5e65',
        '5822d520-9b8c-4efc-97a4-036c843529d2',
        'cGx1IAEk/uFj/hG7eOGKEdtm7hDxzYnFGOFaIEeSNR4='
    )
    logging.DEBUG(token_response)
    print(token_response)
    #SESSION.headers.update({'Authorization': "Bearer" + token_response['accessToken']})
    #print(SESSION.get("https://cpdaoprototypea1-fyh7yr-api.azurewebsites.net/api/v1/contracts"))

    r = requests.get(
        "https://cpdaoprototypea1-fyh7yr-api.azurewebsites.net/api/v1/contracts?top=50&workflowId=5",
        headers={"Authorization": "Bearer " + token_response['accessToken']}
    )
    logging.DEBUG(r.raw)
    logging.DEBUG(r.json())
    logging.DEBUG(r.status_code)

    city_id = Campaign.objects.filter(Name_Of_Community=campaign_name).values('city_id').get()['city_id']

    single_campaign_table = CampaignTable(Campaign.objects.filter(Name_Of_Community=campaign_name))
    RequestConfig(request, paginate=False).configure(single_campaign_table)
    return render(request, 'campaign_info.html', {'single_campaign_table': single_campaign_table,
                                                  'city_id': city_id})
