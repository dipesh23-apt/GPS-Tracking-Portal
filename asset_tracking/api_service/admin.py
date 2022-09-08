from django.contrib import admin
from .models import Asset_data
# Register your models here.
@admin.register(Asset_data)
class PitchingIdea(admin.ModelAdmin):
    list_display=(
       "id","asset_id","asset_type","latitude","longitude","created_at"
    )