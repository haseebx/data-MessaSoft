from . import views
from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Warehouse Stat API",
        default_version='v1',
        description="Warehouse Stat description",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("get_data", views.test),
    path('', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    #    path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('last_30_days',  views.last_30_days),
    path('Filter_data/<str:column_name>',  views.get_data_by_price),
    path('Register_User',  views.registerUser)
]
