# Generated by Django 4.0.4 on 2022-05-16 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_service', '0005_asset_data_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asset_data',
            name='asset_id',
            field=models.CharField(max_length=64, verbose_name='asset_id'),
        ),
    ]
