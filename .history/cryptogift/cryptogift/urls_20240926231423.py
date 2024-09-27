from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),path('auth/', include('dj_rest_auth.urls')),  # Login and Logout
    path('auth/registration/', 
         include('dj_rest_auth.registration.urls')),  # Registration
]
