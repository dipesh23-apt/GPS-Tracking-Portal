from django.db import models
from unixtimestampfield.fields import UnixTimeStampField
# Create your models here.
class Asset_data(models.Model):
    #id=models.AutoField("id",primary_key=True)
    asset_id=models.CharField("asset_id",max_length=64,null=False)
    asset_type=models.CharField("asset_type",blank=False,max_length=128,null=False,)
    description=models.CharField("description",max_length=256,null=True)
    latitude=models.FloatField("latitude")
    longitude=models.FloatField("longitude")
    created_at=models.IntegerField('created_at')

    def __str__(self):
        return self.asset_id

class Meta:
    db_table='Asset_data'
