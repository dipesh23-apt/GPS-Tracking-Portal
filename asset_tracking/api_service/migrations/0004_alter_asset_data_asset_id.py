# Generated by Django 4.0.4 on 2022-05-07 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_service', '0003_alter_asset_data_asset_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asset_data',
            name='asset_id',
            field=models.CharField(max_length=64, unique=True, verbose_name='asset_id'),
        ),
    ]
