from django.shortcuts import render
from .tables import CampaignTable, AprioriResultTable
from django_tables2 import RequestConfig
from .functions.generic_functions import get_apriori_result, get_campaign_data_from_response, get_json_from_api
from urllib.parse import unquote


def browse_campaigns(request):
    response = get_campaign_data_from_response()
    if request.method == 'POST':
        try:
            supp = float(request.POST.get('aprioriSupport'))

            result = get_apriori_result(response, supp)

            table = AprioriResultTable(result)
            RequestConfig(request, paginate=False).configure(table)
            return render(request, 'browse_campaigns.html', {'table': table})
        except ValueError:
            table = CampaignTable(response)
            RequestConfig(request, paginate=False).configure(table)
            return render(request, 'browse_campaigns.html', {'table': table})

    elif request.method == 'GET':
        table = CampaignTable(response)
        RequestConfig(request, paginate=False).configure(table)
        return render(request, 'browse_campaigns.html', {'table': table})


def filtered_campaigns(request, categories):
    campaign_data = get_campaign_data_from_response()
    if request.method == 'POST':
        try:
            supp = float(request.POST.get('aprioriSupport'))

            result = get_apriori_result(campaign_data, supp)

            table = AprioriResultTable(result)
            RequestConfig(request, paginate=False).configure(table)
            return render(request, 'browse_campaigns.html', {'table': table})
        except ValueError:
            table = CampaignTable(response)
            RequestConfig(request, paginate=False).configure(table)
            return render(request, 'browse_campaigns.html', {'table': table})

    else:
        categories = unquote(categories)
        categories_list = categories.replace(" ", "").split(",")

        data = []
        for campaign in campaign_data:
            count = 0
            for category in categories_list:
                if campaign[category] == 1:
                    count += 1
                if count == len(categories_list):
                    data.append(campaign)

        table = CampaignTable(data)
        RequestConfig(request, paginate=False).configure(table)
        return render(request, 'browse_campaigns.html', {'table': table})


def index(request):
    return render(request, 'index.html')


def campaign_info(request, campaign_name):

    ind = 0
    resulting_campaign = 0
    campaign_data = get_campaign_data_from_response()
    for inde, campaign in enumerate(campaign_data):
        if campaign['Name_Of_Community'] in campaign_name:
            resulting_campaign = [campaign]
            ind = inde
            break

    data_json = get_json_from_api()

    campaign_information = data_json['contracts'][ind]

    single_campaign_table = CampaignTable(resulting_campaign)
    RequestConfig(request, paginate=False).configure(single_campaign_table)
    return render(request, 'campaign_info.html', {'single_campaign_table': single_campaign_table,
                                                  'campaign_information': campaign_information})
