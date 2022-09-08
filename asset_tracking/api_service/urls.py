from django.urls import path
from . import views

urlpatterns=[
        path('',views.AssetView,name="assets"),
        path('/all',views.All_AssetView,name="allassets"),
        path('/<str:req_id>', views.Detail_AssetView,name="detail_asset"),
]