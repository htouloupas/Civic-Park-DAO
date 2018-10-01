from django.db import models


class Campaign(models.Model):
    # Campaign name
    Name_Of_Community = models.CharField(max_length=200, default="None")

    # Campaign fields(categories)
    FAMobility = models.IntegerField()
    FASafety = models.IntegerField()
    SAEconomic = models.IntegerField()
    SARoadsTrans = models.IntegerField()
    TArtificialIntelligence = models.IntegerField()
    TAutonomousVehicles = models.IntegerField()
    TGeospatial = models.IntegerField()
    TIoT = models.IntegerField()
    TSensors = models.IntegerField()

    city_id = models.PositiveIntegerField(primary_key=True, default=0, help_text='This is this is the city id which '
                                                                                 'will be used '
                                                                                 'in the campaign information page to '
                                                                                 'retrieve '
                                                                                 'data for each campaign')

    def __str__(self):
        return self.Name_Of_Community


class AprioriResult(models.Model):
    # Set of categories
    Set_Of_Categories = models.CharField(max_length=500, default="None")

    Support = models.FloatField()

    def __str__(self):
        return self.Set_Of_Categories