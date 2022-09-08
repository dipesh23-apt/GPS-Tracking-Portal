import json
from django.http import HttpResponseBadRequest
from django.shortcuts import render
from datetime import datetime
import pytz
from .models import Asset_data
from rest_framework.permissions import IsAuthenticated
from .serializers import AssetSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from django.db import IntegrityError

IST = pytz.timezone('Asia/Kolkata')

@api_view(['GET','POST'])
def AssetView(request):
     if request.method=='POST':
        print("POST REQUEST")
        try:
            request_body=request.data
            #If a new record is created --> True
            #If the record exists,is to be updated --> False
            asset_obj=Asset_data(
                    asset_id=request_body["asset_id"],
                    asset_type=request_body["asset_type"],
                    description=request_body["description"],
                    latitude=request_body["latitude"],
                    longitude=request_body["longitude"],
                    created_at=int(datetime.now(IST).timestamp()))
            asset_obj.save()
            d=AssetSerializer(asset_obj).data
            resp={"code":201,"message":"Successfully Uploaded the location details","data":d}
            return Response(resp,status.HTTP_200_OK)
        except:
            return HttpResponseBadRequest('Bad Request !! Check the Request Body',status=400)   
     # Handling GET Request 
     if request.method=='GET':
          #data_obj=AssetSerializer(Asset_data.objects.all(),many=True).data
          data_dict=dict()
          limit=(request.GET.get('limit'))
          req_id=request.GET.get('asset_id')
          offset=(request.GET.get('offset'))
          req_type=request.GET.get('asset_type')
          descrip=request.GET.get('location')
          startDate=request.GET.get('startDate')
          endDate=request.GET.get('endDate')
          temp_obj=Asset_data.objects.all()
          if req_id:
              temp_obj=temp_obj.filter(asset_id=req_id)
              print(len(temp_obj))
          if req_type:
              print("asset_type")
              temp_obj=temp_obj.filter(asset_type__contains=req_type).values()
          if descrip:
              print("description")
              temp_obj=temp_obj.filter(description__contains=descrip).values()
          if startDate and endDate:
              temp_obj=temp_obj.filter(created_at__range=(startDate,endDate)).values()
          
          #DISTINCT ASSETS in Modified Loacation Date Order
          temp_obj=temp_obj.order_by('asset_id','-created_at').distinct('asset_id')
          data_dict["rowCount"]=len(temp_obj)
          if limit:
              if offset:
                temp_obj=temp_obj.all()[int(offset):int(offset)+int(limit)]
              else:
                temp_obj=temp_obj.all()[0:limit]
          else:
              temp_obj=temp_obj.all()[:]
         
          x=AssetSerializer(temp_obj,many=True).data
          data_dict["data"]=x
          resp_obj={"code":"200","message":"Successfully Fetched the locations","values":data_dict}
          return Response(resp_obj,status.HTTP_200_OK)

@api_view(['GET'])

def Detail_AssetView(request,req_id):
     try:
        print(req_id)
        data_dict=dict()
        data=AssetSerializer(Asset_data.objects.filter(asset_id=req_id).order_by('-created_at'),many=True).data
        print(data)
        data_dict["rowCount"]=len(data)
        data_dict["data"]=data
        return Response({"code":200,"message":"All Assets fetched","values":data_dict},status.HTTP_200_OK)
     except:
        return Response({"code":400,"message":"Not Found","values":[]},status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def All_AssetView(request):
    try:
          data_dict=dict()
          limit=(request.GET.get('limit'))
          req_id=request.GET.get('asset_id')
          offset=(request.GET.get('offset'))
          req_type=request.GET.get('asset_type')
          timeline=request.GET.get('date')
          descrip=request.GET.get('location')
          temp_obj=Asset_data.objects.all()
          if req_id:
              temp_obj=temp_obj.filter(asset_id__contains=req_id)
              print(len(temp_obj))
          if req_type:
              print("asset_type")
              temp_obj=temp_obj.filter(asset_type__contains=req_type).values()
          if timeline:
              req_date=json.loads(timeline)
              start,end=(req_date[0]),(req_date[1])
              temp_obj=temp_obj.filter(created_at__range=(start,end)).values()
          if descrip:
              print("description")
              temp_obj=temp_obj.filter(description__contains=descrip).values()
          
          #DISTINCT ASSETS in Modified Loacation Date Order
          temp_obj=temp_obj.order_by('-created_at')
          data_dict["rowCount"]=len(temp_obj)
          if limit:
              if offset:
                temp_obj=temp_obj.all()[int(offset):int(offset)+int(limit)]
              else:
                temp_obj=temp_obj.all()[0:int(limit)]
          else:
              temp_obj=temp_obj.all()[:]
         
          x=AssetSerializer(temp_obj,many=True).data
          data_dict["data"]=x
          resp_obj={"code":"200","message":"Successfully Fetched the locations","values":data_dict}
          return Response(resp_obj,status.HTTP_200_OK)
    except:
        return Response({"code":400,"message":"Not Found","values":[]},status.HTTP_400_BAD_REQUEST)
