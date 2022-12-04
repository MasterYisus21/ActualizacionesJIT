from django.contrib import admin
from .models import *
# Register your models here.

class SearchDocumento(admin.ModelAdmin):
  
    search_fields = ['expediente']
admin.site.register(Documento,SearchDocumento)