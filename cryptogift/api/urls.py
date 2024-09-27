from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GiftViewSet

router = DefaultRouter()
router.register(r'gifts', GiftViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
