# Generated by Django 4.0.5 on 2022-06-09 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Locations',
            fields=[
                ('id', models.FloatField(db_column='Id', primary_key=True, serialize=False)),
                ('date', models.TextField(blank=True, db_column='Date', null=True)),
                ('asin', models.TextField(blank=True, db_column='Asin', null=True)),
                ('fc', models.IntegerField(blank=True, db_column='Fc', null=True)),
            ],
            options={
                'db_table': 'Locations',
            },
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.FloatField(db_column='Id', primary_key=True, serialize=False)),
                ('asin', models.TextField(db_column='Asin')),
                ('price', models.FloatField(blank=True, db_column='Price', null=True)),
                ('url', models.TextField(blank=True, db_column='Url', null=True)),
                ('name', models.TextField(blank=True, db_column='Name', null=True)),
                ('shortest', models.FloatField(blank=True, db_column='Shortest', null=True)),
                ('median', models.FloatField(blank=True, db_column='Median', null=True)),
                ('longest', models.FloatField(blank=True, db_column='Longest', null=True)),
                ('weight', models.FloatField(blank=True, db_column='Weight', null=True)),
                ('brand', models.TextField(blank=True, db_column='Brand', null=True)),
                ('numberofsellers', models.IntegerField(blank=True, db_column='NumberOfSellers', null=True)),
                ('numberoffbasellers', models.IntegerField(blank=True, db_column='NumberOfFbaSellers', null=True)),
                ('ipcomplaint', models.IntegerField(blank=True, db_column='IpComplaint', null=True)),
                ('binding', models.IntegerField(blank=True, db_column='Binding', null=True)),
                ('c1', models.TextField(blank=True, db_column='C1', null=True)),
                ('c2', models.TextField(blank=True, db_column='C2', null=True)),
                ('c3', models.TextField(blank=True, db_column='C3', null=True)),
                ('c4', models.TextField(blank=True, db_column='C4', null=True)),
                ('c5', models.TextField(blank=True, db_column='C5', null=True)),
                ('c6', models.TextField(blank=True, db_column='C6', null=True)),
                ('c7', models.TextField(blank=True, db_column='C7', null=True)),
                ('tier', models.IntegerField(blank=True, db_column='Tier', null=True)),
                ('process_ts', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'Products',
            },
        ),
    ]