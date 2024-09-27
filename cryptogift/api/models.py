from django.db import models
from django.contrib.auth.models import User

class Gift(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipient_wallet = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=20, decimal_places=8)
    cryptocurrency = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.amount} {self.cryptocurrency} to {self.recipient_wallet}"
