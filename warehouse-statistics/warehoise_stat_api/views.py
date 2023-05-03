from datetime import datetime, timedelta
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
import sqlite3
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from drf_yasg.utils import swagger_auto_schema
from .serializer import RegisterSerializer
# Create your views here.


@api_view(["GET"])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def test(request):
    sqliteConnection = sqlite3.connect('storage.db')
    cursor = sqliteConnection.cursor()
    query = 'select * from Products;'
    cursor.execute(query)
    products_query = cursor.fetchall()
    min_max_mean_data = {
        "Price": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
        "Shortest": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
        "Median": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
        "Longest": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
    }
    counts = {
        "Brand": {'min': [], 'max': [], 'mean': 0, 'count': 0},
        "C1": {'min': [], 'max': [], 'mean': 0, 'count': 0},
        "C2": {'min': [], 'max': [], 'mean': 0, 'count': 0},
    }
    for product in products_query:
        # For each field, add the value to the min and max list if appropriate
        # Add the value to the mean, which will be divided by the number of products later
        for field_name, field_value in [('Price', product[1]), ('Shortest', product[4]), ('Median', product[5]), ('Longest', product[6])]:
            if field_value is None:
                continue
            field_data = min_max_mean_data[field_name]
            min_data = field_data['min']
            max_data = field_data['max']
            mean = field_data['mean']
            # First fill up the min and max lists until it length is 5, then only replace existing items if the field value is smaller or larger than the current min or max
            if len(min_data) < 10:
                min_data.append(field_value)
            elif max(min_data) > field_value:
                min_data.remove(max(min_data))
                min_data.append(field_value)
            if len(max_data) < 10:
                max_data.append(field_value)
            elif min(max_data) < field_value:
                max_data.remove(min(max_data))
                max_data.append(field_value)
            min_max_mean_data[field_name]['mean'] += field_value
            min_max_mean_data[field_name]['count'] += 1
        # Keep track of category, subcategory, and brand counts
        for field_name, field_value in [('Brand', product[8]), ('C1', product[13]), ('C2', product[14])]:
            if field_value is None:
                continue
            if field_value not in counts[field_name]:
                counts[field_name][field_value] = 1
            else:
                counts[field_name][field_value] += 1
            # Calculate the mean and sort the min and max lists
        for field_name, field_data in min_max_mean_data.items():
            # if field_data['count'] > 0:
            # field_data['mean'] /= field_data['count']
            # else:
            #     field_data['mean'] = None
            field_data['min'].sort()
            field_data['max'].sort(reverse=True)
    # data = {'min_max_mean_data': min_max_mean_data, 'Brands': counts}
    return Response(min_max_mean_data)


@api_view(["GET"])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def last_30_days(request):
    today = datetime.now()

    last = str(today - timedelta(days=30))
    today = str(today)
    sqliteConnection = sqlite3.connect('storage.db')
    cursor = sqliteConnection.cursor()
    query = "SELECT * FROM Products WHERE process_ts BETWEEN '" + \
        last + "' AND '" + today+"';"
    cursor.execute(query)
    products_query = cursor.fetchall()
    min_max_mean_data = {
        "Price": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
        "Shortest": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
        "Median": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
        "Longest": {'min': [], 'max': [], 'mean': 0.0, 'count': 0},
    }
    counts = {
        "Brand": {'min': [], 'max': [], 'mean': 0, 'count': 0},
        "C1": {'min': [], 'max': [], 'mean': 0, 'count': 0},
        "C2": {'min': [], 'max': [], 'mean': 0, 'count': 0},
    }
    for product in products_query:
        # For each field, add the value to the min and max list if appropriate
        # Add the value to the mean, which will be divided by the number of products later
        for field_name, field_value in [('Price', product[1]), ('Shortest', product[4]), ('Median', product[5]), ('Longest', product[6])]:
            if field_value is None:
                continue
            field_data = min_max_mean_data[field_name]
            min_data = field_data['min']
            max_data = field_data['max']
            mean = field_data['mean']
            # First fill up the min and max lists until it length is 5, then only replace existing items if the field value is smaller or larger than the current min or max
            if len(min_data) < 10:
                min_data.append(field_value)
            elif max(min_data) > field_value:
                min_data.remove(max(min_data))
                min_data.append(field_value)
            if len(max_data) < 10:
                max_data.append(field_value)
            elif min(max_data) < field_value:
                max_data.remove(min(max_data))
                max_data.append(field_value)
            min_max_mean_data[field_name]['mean'] += field_value
            min_max_mean_data[field_name]['count'] += 1
        # Keep track of category, subcategory, and brand counts
        for field_name, field_value in [('Brand', product[5]), ('C1', product[6]), ('C2', product[7])]:
            if field_value is None:
                continue
            if field_value not in counts[field_name]:
                counts[field_name][field_value] = 1
            else:
                counts[field_name][field_value] += 1
            # Calculate the mean and sort the min and max lists
        for field_name, field_data in min_max_mean_data.items():
            # if field_data['count'] > 0:
            # field_data['mean'] /= field_data['count']
            # else:
            #     field_data['mean'] = None
            field_data['min'].sort()
            field_data['max'].sort(reverse=True)

    return Response(min_max_mean_data)


@swagger_auto_schema("POST", request_body=RegisterSerializer)
@api_view(["POST"])
def registerUser(request, *args, **kwargs):
    serializer = RegisterSerializer(data=request.data)
    data = {}
    if serializer.is_valid():
        account = serializer.save()
        data['email'] = account.email
        data['username'] = account.username
    else:
        data = serializer.errors
        print('Error', data.keys())
    return Response(data)

@api_view(["GET"])
def get_data_by_price(request , column_name):

    sqliteConnection = sqlite3.connect('storage.db')
    cursor = sqliteConnection.cursor()
    query = "SELECT * FROM Products where "+ column_name+" != 'None' ORDER BY "+ column_name+" asc LIMIT 10;"
    query1 = "SELECT * FROM Products where "+ column_name+" != 'None' ORDER BY "+ column_name+" desc LIMIT 10;"
    cursor.execute(query)
    minimun = cursor.fetchall()
    cursor.execute(query1)
    maximun = cursor.fetchall()
    query2 = "SELECT "+ column_name+" FROM Products where "+ column_name+" != 'None' ORDER BY "+ column_name+" asc LIMIT 10;"
    query3 = "SELECT "+ column_name+" FROM Products where "+ column_name+" != 'None' ORDER BY "+ column_name+" desc LIMIT 10;"
    cursor.execute(query2)
    minimun_mean = cursor.fetchall()
    cursor.execute(query3)
    maximun_mean = cursor.fetchall()
    a = minimun_mean+ maximun_mean
    l = []
    for i in a:
        l.append(i[0])
    mean = sum(l)/len(l)

    data  = {"Min":minimun , "Max":maximun , "mean":mean}
    return Response(data)