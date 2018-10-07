from mlxtend.frequent_patterns import apriori
import pandas as pd
import requests
import adal


def get_apriori_result(response, supp):

    campaigns_with_categories_array = response
    for row in campaigns_with_categories_array:
        row.pop('Name_Of_Community', None)

    df = pd.DataFrame(campaigns_with_categories_array)
    apriori_df = apriori(df, min_support=supp, use_colnames=True)
    apriori_df['itemsets'] = apriori_df['itemsets'].astype(str).apply(lambda x: x.replace('frozenset({\'', '')).apply(
        lambda x: x.replace('\'})', '')).apply(lambda x: x.replace('\'', ''))
    apriori_df['support'] = apriori_df['support'].apply(lambda x: "{:.2f}".format(x))
    apriori_df.columns = ['Support', 'Set_Of_Categories']

    cleaned_data = [{'Support': apriori_df['Support'][row_index],
                             'Set_Of_Categories': apriori_df['Set_Of_Categories'][row_index]}
                    for row_index in apriori_df['Support'].keys()]

    return cleaned_data


def get_json_from_api():
    authority_url = 'https://login.microsoftonline.com/mystudiomoutlook.onmicrosoft.com'
    auth_context = adal.AuthenticationContext(authority_url, validate_authority=False)

    token_response = auth_context.acquire_token_with_client_credentials(
        '319d2ec7-6807-4ce1-874b-fecaabad5e65',
        '5822d520-9b8c-4efc-97a4-036c843529d2',
        'cGx1IAEk/uFj/hG7eOGKEdtm7hDxzYnFGOFaIEeSNR4='
    )

    r = requests.get(
        "https://cpdaoprototypea1-fyh7yr-api.azurewebsites.net/api/v1/contracts?top=50&workflowId=5",
        headers={"Authorization": "Bearer " + token_response['accessToken']}
    )

    return r.json()


def get_campaign_data_from_response():

    campaign_categories_mapping_to_json = {
        "FAMobility": 12,
        "FASafety": 13,
        "SAEconomic": 14,
        "SARoadsTrans": 15,
        "TArtificialIntelligence": 16,
        "TAutonomousVehicles": 17,
        "TGeospatial": 18,
        "TIoT": 19,
        "TSensors": 20
    }

    response_json = get_json_from_api()

    data = []
    for contract in response_json['contracts']:
        row = {"Name_Of_Community": contract['contractProperties'][3]['value']}
        for category in campaign_categories_mapping_to_json.keys():
            row.update({category: int(contract['contractProperties']
            [campaign_categories_mapping_to_json[category]]['value'])})
        data.append(row)

    return data
