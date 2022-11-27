# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Paises(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Paises'


class ApisolicitudesappApoderado(models.Model):
    nombres = models.CharField(max_length=25)
    apellidos = models.CharField(max_length=25)
    identificacion = models.CharField(primary_key=True, max_length=25)
    lugar_expedicion = models.CharField(max_length=20)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    celular = models.CharField(max_length=15)
    correo = models.CharField(max_length=120)
    tarjeta_profesional = models.CharField(max_length=25)
    estado = models.IntegerField()
    tipo_documento_id = models.ForeignKey('ApisolicitudesappTipoDocumento', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_apoderado'


class ApisolicitudesappCentroConciliacion(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_centro_conciliacion'


class ApisolicitudesappCiudad(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)
    departamento_id = models.ForeignKey('ApisolicitudesappDepartamento', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_ciudad'


class ApisolicitudesappDepartamento(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)
    pais_id = models.ForeignKey(Paises, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_departamento'


class ApisolicitudesappDocumento(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(max_length=50)
    fecha_registro = models.DateField()
    documento = models.CharField(max_length=100, blank=True, null=True)
    solicitud_id = models.ForeignKey('ApisolicitudesappSolicitud', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_documento'


class ApisolicitudesappEstadoSolicitud(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_estado_solicitud'


class ApisolicitudesappEstratoSocioeconomico(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_estrato_socioeconomico'


class ApisolicitudesappGenero(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_genero'


class ApisolicitudesappHechos(models.Model):
    estado = models.IntegerField()
    descripcion = models.TextField()
    ciudad_id = models.ForeignKey(ApisolicitudesappCiudad, models.DO_NOTHING, blank=True, null=True)
    solicitud_id = models.OneToOneField('ApisolicitudesappSolicitud', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_hechos'


class ApisolicitudesappPersonaSolicitud(models.Model):
    estado = models.IntegerField()
    nombres = models.CharField(max_length=25)
    apellidos = models.CharField(max_length=25)
    identificacion = models.CharField(max_length=25)
    fecha_expedicion = models.DateField(blank=True, null=True)
    lugar_expedicion = models.CharField(max_length=20, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    direccion = models.CharField(max_length=40, blank=True, null=True)
    celular = models.CharField(max_length=15)
    correo = models.CharField(max_length=120)
    apoderado_id = models.ForeignKey(ApisolicitudesappApoderado, models.DO_NOTHING, blank=True, null=True)
    ciudad_nacimiento_id = models.ForeignKey(ApisolicitudesappCiudad, models.DO_NOTHING, blank=True, null=True)
    estrato_socioeconomico_id = models.ForeignKey(ApisolicitudesappEstratoSocioeconomico, models.DO_NOTHING, blank=True, null=True)
    genero_id = models.ForeignKey(ApisolicitudesappGenero, models.DO_NOTHING, blank=True, null=True)
    sexo_id = models.ForeignKey('ApisolicitudesappSexo', models.DO_NOTHING, blank=True, null=True)
    tipo_documento_id = models.ForeignKey('ApisolicitudesappTipoDocumento', models.DO_NOTHING, blank=True, null=True)
    tipo_persona_id = models.ForeignKey('ApisolicitudesappTipoPersona', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_persona_solicitud'


class ApisolicitudesappRelacionPersonaSolicitud(models.Model):
    estado = models.IntegerField()
    persona_id = models.ForeignKey(ApisolicitudesappPersonaSolicitud, models.DO_NOTHING, blank=True, null=True)
    solicitud_id = models.ForeignKey('ApisolicitudesappSolicitud', models.DO_NOTHING, blank=True, null=True)
    tipo_cliente_id = models.ForeignKey('ApisolicitudesappTipoCliente', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_relacion_persona_solicitud'


class ApisolicitudesappSexo(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_sexo'


class ApisolicitudesappSolicitud(models.Model):
    numero_radicado = models.CharField(unique=True, max_length=25)
    fecha_registro = models.DateField()
    estado = models.IntegerField()
    estado_solicitud_id = models.ForeignKey(ApisolicitudesappEstadoSolicitud, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_solicitud'


class ApisolicitudesappTipoCliente(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_tipo_cliente'


class ApisolicitudesappTipoDocumento(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_tipo_documento'


class ApisolicitudesappTipoPersona(models.Model):
    estado = models.IntegerField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'apiSolicitudesApp_tipo_persona'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
