from . import models
from django_tables2 import tables


class CampaignTable(tables.Table):

    Name_Of_Community = tables.columns.TemplateColumn(
        '<a href="{% url \'campaign_information\' record.Name_Of_Community %}">{{record.Name_Of_Community}}</a>')

    FAMobility = tables.columns.Column(verbose_name='FAMobility')
    FASafety = tables.columns.Column(verbose_name='FASafety')
    SAEconomic = tables.columns.Column(verbose_name='SAEconomic')
    SARoadsTrans = tables.columns.Column(verbose_name='SARoadsTrans')
    TArtificialIntelligence = tables.columns.Column(verbose_name='TArtificialIntelligence')
    TAutonomousVehicles = tables.columns.Column(verbose_name='TAutonomousVehicles')
    TGeospatial = tables.columns.Column(verbose_name='TGeospatial')
    TIoT = tables.columns.Column(verbose_name='TIoT')
    TSensors = tables.columns.Column(verbose_name='TSensors')

    class Meta:
        exclude = ('id', )
        show_footer = False
        attrs = {
            'class': 'rounded table-hover'
        }
        template_name = 'django_tables2/bootstrap4.html'


class AprioriResultTable(tables.Table):

    Set_Of_Categories = tables.columns.TemplateColumn(
        '<a href="{% url \'campaign_table_after_apriori\' record.Set_Of_Categories %}">{{record.Set_Of_Categories}}</a>')

    Support = tables.columns.Column(verbose_name='Support')

    class Meta:
        exclude = ('id', )
        show_footer = False
        attrs = {
            'class': 'rounded table-hover'
        }  # Change that for <table class="mytable"/> Change.
        template_name = 'django_tables2/bootstrap4.html'


class TableAfterAprioriFiltering(tables.Table):
    class Meta:
        exclude = ('id', )
        show_footer = False
        attrs = {
            'class': 'rounded table-hover'
        }  # Change that for <table class="mytable"/> Change.
        template_name = 'django_tables2/bootstrap4.html'
