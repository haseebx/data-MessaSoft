# Generated by Django 4.0.5 on 2022-06-09 08:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('warehoise_stat_api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Locations',
            new_name='Address',
        ),
        migrations.RenameModel(
            old_name='Products',
            new_name='Data',
        ),
        migrations.AlterModelTable(
            name='address',
            table='Address',
        ),
        migrations.AlterModelTable(
            name='data',
            table='Data',
        ),
    ]