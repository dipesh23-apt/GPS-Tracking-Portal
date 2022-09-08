from rest_framework import serializers
from .models import Asset_data

class AssetSerializer(serializers.ModelSerializer):
    id=serializers.CharField()
    asset_id=serializers.CharField(allow_blank=False)
    asset_type=serializers.CharField()
    description=serializers.CharField()
    lat=serializers.FloatField(source='latitude')
    long=serializers.FloatField(source='longitude')
    created_at=serializers.IntegerField()
    class Meta:
        model = Asset_data
        fields = ["id","asset_id","asset_type","description","lat","long","created_at"]
