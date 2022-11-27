from django.contrib import admin
from .models import *
# Register your models here.

class SearchAdminGeneral(admin.ModelAdmin):
  
    search_fields = ['id','nombre'] #atributo por el cual se filtrará

class SearchSolicitud(admin.ModelAdmin):
  
    search_fields = ['numero_radicado','fecha_registro'] #atributo por el cual se filtrará

class SearchPersona(admin.ModelAdmin):
  
    search_fields = ['nombres','apellidos','identificacion'] #atributo por el cual se filtrará

class SearchHechos(admin.ModelAdmin):
  
    search_fields = ['solicitud_id__numero_radicado']




# Register your models here.
admin.site.register(Pais,SearchAdminGeneral)
admin.site.register(Departamento,SearchAdminGeneral)
admin.site.register(Estado_solicitud,SearchAdminGeneral)
admin.site.register(Ciudad,SearchAdminGeneral)
admin.site.register(Tipo_persona,SearchAdminGeneral)
admin.site.register(Sexo,SearchAdminGeneral)
admin.site.register(Centro_conciliacion,SearchAdminGeneral)
admin.site.register(Estrato_socioeconomico,SearchAdminGeneral)
admin.site.register(Genero,SearchAdminGeneral)
admin.site.register(Tipo_documento,SearchAdminGeneral)
admin.site.register(Apoderado_solicitud,SearchPersona)
admin.site.register(Persona_solicitud,SearchPersona)
admin.site.register(Tipo_cliente,SearchAdminGeneral)
admin.site.register(Relacion_persona_solicitud)
admin.site.register(Hechos_solicitud,SearchHechos)
admin.site.register(Documento_solicitud,SearchHechos)
admin.site.register(Solicitud,SearchSolicitud)

