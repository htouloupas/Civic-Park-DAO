from django.shortcuts import render
from .models import Campaign, AprioriResult
from .tables import CampaignTable, AprioriResultTable
from django_tables2 import RequestConfig
from .functions.generic_functions import get_apriori_result, get_conn_to_db


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

    categories_list = categories.split(",")
    sql = "SELECT * FROM main.civicpark_campaign WHERE "
    for category in categories_list:
        sql += f"{category}=1 AND"
    sql = sql[:-4] + ";"

    table = CampaignTable(Campaign.objects.raw(sql))
    RequestConfig(request, paginate=False).configure(table)
    return render(request, 'browse_campaigns.html', {'table': table})


def index(request):
    return render(request, 'index.html')


def campaign_info(request, campaign_name):

    city_id = Campaign.objects.filter(Name_Of_Community=campaign_name).values('city_id').get()['city_id']

    single_campaign_table = CampaignTable(Campaign.objects.filter(Name_Of_Community=campaign_name))
    RequestConfig(request, paginate=False).configure(single_campaign_table)
    return render(request, 'campaign_info.html', {'single_campaign_table': single_campaign_table,
                                                  'city_id': city_id})

