from django.urls import path
from . import views

urlpatterns = [
    path('browse', views.browse_campaigns, name='campaign_table'),
    path('filtered_by/<str:categories>', views.filtered_campaigns, name='campaign_table_after_apriori'),
    path('campaign/<str:campaign_name>', views.campaign_info, name='campaign_information'),
    path('', views.index, name='index')
]
