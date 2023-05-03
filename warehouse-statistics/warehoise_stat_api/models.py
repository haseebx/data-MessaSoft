from django.db import models


class Address(models.Model):
    id = models.FloatField(db_column='Id', primary_key=True)
    date = models.TextField(db_column='Date', blank=True, null=True)
    asin = models.TextField(db_column='Asin', blank=True, null=True)
    fc = models.IntegerField(db_column='Fc', blank=True, null=True)

    class Meta:
        db_table = 'Address'


class Data(models.Model):
    id = models.FloatField(db_column='Id', primary_key=True)
    asin = models.TextField(db_column='Asin')
    price = models.FloatField(db_column='Price', blank=True, null=True)
    url = models.TextField(db_column='Url', blank=True, null=True)
    name = models.TextField(db_column='Name', blank=True, null=True)
    shortest = models.FloatField(db_column='Shortest', blank=True, null=True)
    median = models.FloatField(db_column='Median', blank=True, null=True)
    longest = models.FloatField(db_column='Longest', blank=True, null=True)
    weight = models.FloatField(db_column='Weight', blank=True, null=True)
    brand = models.TextField(db_column='Brand', blank=True, null=True)
    numberofsellers = models.IntegerField(
        db_column='NumberOfSellers', blank=True, null=True)
    numberoffbasellers = models.IntegerField(
        db_column='NumberOfFbaSellers', blank=True, null=True)
    ipcomplaint = models.IntegerField(
        db_column='IpComplaint', blank=True, null=True)
    binding = models.IntegerField(db_column='Binding', blank=True, null=True)
    c1 = models.TextField(db_column='C1', blank=True, null=True)
    c2 = models.TextField(db_column='C2', blank=True, null=True)
    c3 = models.TextField(db_column='C3', blank=True, null=True)
    c4 = models.TextField(db_column='C4', blank=True, null=True)
    c5 = models.TextField(db_column='C5', blank=True, null=True)
    c6 = models.TextField(db_column='C6', blank=True, null=True)
    c7 = models.TextField(db_column='C7', blank=True, null=True)
    tier = models.IntegerField(db_column='Tier', blank=True, null=True)

    process_ts = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'Data'
