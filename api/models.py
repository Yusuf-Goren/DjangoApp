from django.db import models

# Create your models here.


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    # Will only work while adding
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50] + str(self.updated) + str(self.created)
