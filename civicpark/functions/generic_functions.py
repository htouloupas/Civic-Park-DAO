from mlxtend.frequent_patterns import apriori
import pandas as pd
from sqlite3 import connect, Error


def get_apriori_result(sql_query, conn, supp):
    df = pd.read_sql_query(sql_query, conn)
    apriori_df = apriori(df, min_support=supp, use_colnames=True)
    apriori_df['itemsets'] = apriori_df['itemsets'].astype(str).apply(lambda x: x.replace('frozenset({\'', '')).apply(
        lambda x: x.replace('\'})', '')).apply(lambda x: x.replace('\'', ''))
    apriori_df['support'] = apriori_df['support'].apply(lambda x: "{:.2f}".format(x))
    apriori_df.columns = ['Support', 'Set_Of_Categories']

    return apriori_df


def get_conn_to_db():
    try:
        conn = connect('db.sqlite3')
        return conn
    except Error as e:
        print(e)
        return None
