# Generated by Django 4.0.4 on 2022-11-17 20:28

import apiSolicitudesApp.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Apoderado',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombres', models.CharField(max_length=25)),
                ('apellidos', models.CharField(max_length=25)),
                ('identificacion', models.CharField(max_length=25, unique=True)),
                ('lugar_expedicion', models.CharField(max_length=20)),
                ('telefono', models.CharField(blank=True, max_length=10, null=True)),
                ('celular', models.CharField(max_length=15)),
                ('correo', models.EmailField(max_length=120)),
                ('tarjeta_profesional', models.CharField(max_length=25)),
            ],
            options={
                'verbose_name': 'Apoderado',
                'verbose_name_plural': 'Apoderados',
            },
        ),
        migrations.CreateModel(
            name='Ciudad',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Ciudad',
                'verbose_name_plural': 'Ciudades',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Genero',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Genero',
                'verbose_name_plural': 'Generos',
            },
        ),
        migrations.CreateModel(
            name='Pais',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Pais',
                'verbose_name_plural': 'Paises',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombres', models.CharField(max_length=25)),
                ('apellidos', models.CharField(max_length=25)),
                ('identificacion', models.CharField(max_length=25, unique=True)),
                ('fecha_expedicion', models.DateField(blank=True, null=True)),
                ('lugar_expedicion', models.CharField(blank=True, max_length=20, null=True)),
                ('fecha_nacimiento', models.DateField(blank=True, null=True)),
                ('telefono', models.CharField(blank=True, max_length=10, null=True)),
                ('direccion', models.CharField(blank=True, max_length=40, null=True)),
                ('celular', models.CharField(max_length=15)),
                ('correo', models.EmailField(max_length=120)),
                ('apoderado_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.apoderado')),
                ('ciudad_nacimiento_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.ciudad')),
                ('genero_id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.genero')),
            ],
            options={
                'verbose_name': 'Persona',
                'verbose_name_plural': 'Personas',
            },
        ),
        migrations.CreateModel(
            name='Sexo',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Sexo',
                'verbose_name_plural': 'Sexos',
            },
        ),
        migrations.CreateModel(
            name='Solicitud',
            fields=[
                ('nuero_radicado', models.CharField(default=apiSolicitudesApp.models.increment_entrada_number, max_length=10, primary_key=True, serialize=False, unique=True)),
                ('fecha_registro', models.DateField()),
                ('estado_solicitud', models.BooleanField(blank=True, null=True)),
            ],
            options={
                'verbose_name': 'Solicitud',
                'verbose_name_plural': 'Solicitudes',
            },
        ),
        migrations.CreateModel(
            name='Tipo_cliente',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Tipo_cliente',
                'verbose_name_plural': 'Tipos_cliente',
            },
        ),
        migrations.CreateModel(
            name='Tipo_documento',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Tipo_documento',
                'verbose_name_plural': 'Tipos_documento',
            },
        ),
        migrations.CreateModel(
            name='Tipo_persona',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
            ],
            options={
                'verbose_name': 'Tipo_persona',
                'verbose_name_plural': 'Tipos_persona',
            },
        ),
        migrations.CreateModel(
            name='Relacion_persona_solicitud',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
                ('persona_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.persona')),
                ('solicitud_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.solicitud')),
                ('tipo_cliente_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.tipo_cliente')),
            ],
            options={
                'verbose_name': 'Relacion_persona_solicitud',
                'verbose_name_plural': 'Relaciones_persona_solicitud',
            },
        ),
        migrations.AddField(
            model_name='persona',
            name='sexo_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.sexo'),
        ),
        migrations.AddField(
            model_name='persona',
            name='tipo_documento_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.tipo_documento'),
        ),
        migrations.AddField(
            model_name='persona',
            name='tipo_persona_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.tipo_persona'),
        ),
        migrations.CreateModel(
            name='Hechos',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('descripcion', models.TextField()),
                ('ciudad_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.ciudad')),
                ('solicitud_id', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.solicitud')),
            ],
            options={
                'verbose_name': 'Hechos',
                'verbose_name_plural': 'Hechos',
            },
        ),
        migrations.CreateModel(
            name='Documento',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
                ('fecha_registro', models.DateField()),
                ('documento', models.FileField(blank=True, null=True, upload_to='resultados/')),
                ('solicitud_id', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.solicitud')),
            ],
            options={
                'verbose_name': 'Documento',
                'verbose_name_plural': 'Documentos',
            },
        ),
        migrations.CreateModel(
            name='Departamento',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('estado', models.BooleanField(blank=True, default=True)),
                ('nombre', models.CharField(max_length=50, unique=True)),
                ('pais_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.pais')),
            ],
            options={
                'verbose_name': 'Departamento',
                'verbose_name_plural': 'Departamentos',
                'ordering': ['-id'],
            },
        ),
        migrations.AddField(
            model_name='ciudad',
            name='departamento_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.departamento'),
        ),
        migrations.AddField(
            model_name='apoderado',
            name='tipo_documento_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.tipo_documento'),
        ),
    ]
