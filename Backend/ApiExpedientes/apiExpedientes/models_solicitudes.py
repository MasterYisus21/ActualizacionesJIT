# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class ApoderadoSolicitud(models.Model):
    nombres = models.CharField(max_length=25)
    apellidos = models.CharField(max_length=25)
    identificacion = models.CharField(primary_key=True, max_length=25)
    lugar_expedicion = models.CharField(max_length=20)
    telefono = models.CharField(max_length=10, blank=True, null=True)
    celular = models.CharField(max_length=15)
    correo = models.CharField(max_length=120)
    tarjeta_profesional = models.CharField(max_length=25)
    estado = models.BooleanField()
    tipo_documento_id = models.ForeignKey('TipoDocumento', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Apoderado_solicitud'


class CentroConciliacion(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Centro_conciliacion'


class Ciudad(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)
    departamento_id = models.ForeignKey('Departamento', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Ciudad'


class Departamento(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)
    pais_id = models.ForeignKey('Pais', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Departamento'


class DocumentoSolicitud(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(max_length=50)
    fecha_registro = models.DateField()
    documento = models.CharField(max_length=100, blank=True, null=True)
    solicitud_id = models.ForeignKey('Solicitud', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Documento_solicitud'


class EstadoSolicitud(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Estado_solicitud'


class EstratoSocioeconomico(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Estrato_socioeconomico'


class Genero(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Genero'


class HechosSolicitud(models.Model):
    estado = models.BooleanField()
    descripcion = models.TextField()
    ciudad_id = models.ForeignKey(Ciudad, models.DO_NOTHING, blank=True, null=True)
    solicitud_id = models.OneToOneField('Solicitud', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Hechos_solicitud'


class Pais(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Pais'


class PersonaSolicitud(models.Model):
    estado = models.BooleanField()
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
    apoderado_id = models.ForeignKey(ApoderadoSolicitud, models.DO_NOTHING, blank=True, null=True)
    ciudad_nacimiento_id = models.ForeignKey(Ciudad, models.DO_NOTHING, blank=True, null=True)
    estrato_socioeconomico_id = models.ForeignKey(EstratoSocioeconomico, models.DO_NOTHING, blank=True, null=True)
    genero_id = models.ForeignKey(Genero, models.DO_NOTHING, blank=True, null=True)
    sexo_id = models.ForeignKey('Sexo', models.DO_NOTHING, blank=True, null=True)
    tipo_documento_id = models.ForeignKey('TipoDocumento', models.DO_NOTHING, blank=True, null=True)
    tipo_persona_id = models.ForeignKey('TipoPersona', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Persona_solicitud'


class RelacionPersonaSolicitud(models.Model):
    estado = models.BooleanField()
    persona_id = models.ForeignKey(PersonaSolicitud, models.DO_NOTHING, blank=True, null=True)
    solicitud_id = models.ForeignKey('Solicitud', models.DO_NOTHING, blank=True, null=True)
    tipo_cliente_id = models.ForeignKey('TipoCliente', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Relacion_persona_solicitud'


class Sexo(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Sexo'


class Solicitud(models.Model):
    numero_radicado = models.CharField(unique=True, max_length=25)
    fecha_registro = models.DateField()
    estado = models.BooleanField()
    estado_solicitud_id = models.ForeignKey(EstadoSolicitud, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Solicitud'


class TipoCliente(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Tipo_cliente'


class TipoDocumento(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Tipo_documento'


class TipoPersona(models.Model):
    estado = models.BooleanField()
    nombre = models.CharField(unique=True, max_length=50)

    class Meta:
        managed = False
        db_table = 'Tipo_persona'


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
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
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
    action_flag = models.SmallIntegerField()
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
