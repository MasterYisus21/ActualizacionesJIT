# Generated by Django 4.0.4 on 2022-06-07 15:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Area',
                'verbose_name_plural': 'Areas',
            },
        ),
        migrations.CreateModel(
            name='Barrio',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Barrio',
                'verbose_name_plural': 'Barrios',
            },
        ),
        migrations.CreateModel(
            name='Citacion',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Descripcion', models.TextField()),
                ('Enlace', models.CharField(blank=True, max_length=150, null=True)),
            ],
            options={
                'verbose_name': 'Citacion',
                'verbose_name_plural': 'Citaciones',
            },
        ),
        migrations.CreateModel(
            name='Ciudad',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Ciudad',
                'verbose_name_plural': 'Ciudades',
            },
        ),
        migrations.CreateModel(
            name='Estrato_socioeconomico',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Numero', models.PositiveSmallIntegerField()),
            ],
            options={
                'verbose_name': 'Estrato',
                'verbose_name_plural': 'Estratos',
            },
        ),
        migrations.CreateModel(
            name='Inicio_conflicto',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Inicio_conflicto',
                'verbose_name_plural': 'Inicio_conflictos',
            },
        ),
        migrations.CreateModel(
            name='Medio_conocimiento',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Medio_conocimiento ',
                'verbose_name_plural': 'Medios_conocimiento',
            },
        ),
        migrations.CreateModel(
            name='Objetivo_servicio',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Objetivo_servicio',
                'verbose_name_plural': 'Objetivo_servicios',
            },
        ),
        migrations.CreateModel(
            name='Pais',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Pais',
                'verbose_name_plural': 'Paises',
            },
        ),
        migrations.CreateModel(
            name='Perfil',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Nombre', models.CharField(max_length=150, unique=True)),
            ],
            options={
                'verbose_name': 'Perfil',
                'verbose_name_plural': 'Perfiles',
            },
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Identificacion', models.BigIntegerField(unique=True)),
                ('Primer_nombre', models.CharField(max_length=15)),
                ('Segundo_nombre', models.CharField(blank=True, max_length=15, null=True)),
                ('Primer_apellido', models.CharField(max_length=15)),
                ('Segundo_apellido', models.CharField(blank=True, max_length=15, null=True)),
                ('Correo', models.EmailField(max_length=120)),
                ('Telefono', models.BigIntegerField(blank=True, null=True)),
                ('Fecha_de_nacimiento', models.DateField(blank=True, null=True)),
                ('Barrio_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.barrio')),
                ('Estrato_socioeconomico_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.estrato_socioeconomico')),
                ('Perfil_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.perfil')),
            ],
            options={
                'verbose_name': 'Persona',
                'verbose_name_plural': 'Personas',
            },
        ),
        migrations.CreateModel(
            name='Pregunta',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Pregunta', models.CharField(max_length=100, unique=True)),
            ],
            options={
                'verbose_name': 'Pregunta',
                'verbose_name_plural': 'Preguntas',
            },
        ),
        migrations.CreateModel(
            name='Rol',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Rol',
                'verbose_name_plural': 'Roles',
            },
        ),
        migrations.CreateModel(
            name='Rol_permiso',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Descipcion', models.CharField(max_length=100, unique=True)),
                ('Permiso_colsulta', models.BooleanField(default=False)),
                ('Permiso_crear', models.BooleanField(default=False)),
                ('Permiso_actualizar', models.BooleanField(default=False)),
                ('Permiso_eliminar', models.BooleanField(default=False)),
                ('Permiso_reportes', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Rol_permiso',
                'verbose_name_plural': 'Rol_permisos',
            },
        ),
        migrations.CreateModel(
            name='Solicitante_servicio',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Solicitante_servicio',
                'verbose_name_plural': 'Solicitante_servicios',
            },
        ),
        migrations.CreateModel(
            name='Tema',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tema',
                'verbose_name_plural': 'Temas',
            },
        ),
        migrations.CreateModel(
            name='Tipo_cargo',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_cargo',
                'verbose_name_plural': 'Tipo_cargos',
            },
        ),
        migrations.CreateModel(
            name='Tipo_cliente',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_cliente',
                'verbose_name_plural': 'Tipo_clientes',
            },
        ),
        migrations.CreateModel(
            name='Tipo_documento',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_documento',
                'verbose_name_plural': 'Tipo_documentos',
            },
        ),
        migrations.CreateModel(
            name='Tipo_estado',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_estado',
                'verbose_name_plural': 'Tipo_estados',
            },
        ),
        migrations.CreateModel(
            name='Tipo_medio',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_Medio',
                'verbose_name_plural': 'Tipo_Medios',
            },
        ),
        migrations.CreateModel(
            name='Tipo_persona',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_persona',
                'verbose_name_plural': 'Tipo_personas',
            },
        ),
        migrations.CreateModel(
            name='Tipo_resultado',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_resultado',
                'verbose_name_plural': 'Tipo_resultados',
            },
        ),
        migrations.CreateModel(
            name='Tipo_vivienda',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'Tipo_vivienda',
                'verbose_name_plural': 'Tipo_viviendas',
            },
        ),
        migrations.CreateModel(
            name='Turno',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Franja_horaria', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'verbose_name': 'Turno',
                'verbose_name_plural': 'Turnos',
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Usuario', models.BigIntegerField(primary_key=True, serialize=False)),
                ('Contraseña', models.CharField(max_length=100)),
                ('Persona_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.persona')),
                ('Rol_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.rol')),
            ],
            options={
                'verbose_name': 'Usuario',
                'verbose_name_plural': 'Usuarios',
            },
        ),
        migrations.CreateModel(
            name='Tipo_servicio',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
                ('Objetivo_servicio_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.objetivo_servicio')),
            ],
            options={
                'verbose_name': 'Tipo_servicio',
                'verbose_name_plural': 'Tipo_servicios',
            },
        ),
        migrations.CreateModel(
            name='Subtema',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
                ('Tema_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tema')),
            ],
            options={
                'verbose_name': 'Subtema',
                'verbose_name_plural': 'Subtemas',
            },
        ),
        migrations.CreateModel(
            name='Solicitud',
            fields=[
                ('Numero_caso', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Descripcion', models.TextField(blank=True, null=True)),
                ('Fecha_registro', models.DateField(auto_now=True)),
                ('Fecha_finalizacion', models.DateField(blank=True, null=True)),
                ('Caso_gratuito', models.BooleanField(blank=True, default=True, null=True)),
                ('Asunto_juridico_definible', models.BooleanField(default=False)),
                ('Area_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.area')),
                ('Inicio_conflicto_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.inicio_conflicto')),
                ('Solicitante_servicio_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitante_servicio')),
                ('Subtema_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.subtema')),
                ('Tipo_resultado_Id', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_resultado')),
                ('Tipo_servicio_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_servicio')),
            ],
            options={
                'verbose_name': 'Solicitud',
                'verbose_name_plural': 'Solicitudes',
            },
        ),
        migrations.AddField(
            model_name='rol',
            name='Rol_permiso_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.rol_permiso'),
        ),
        migrations.CreateModel(
            name='Respuesta',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Calificacion', models.SmallIntegerField()),
                ('Pregunta_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.pregunta')),
            ],
            options={
                'verbose_name': 'Respuesta',
                'verbose_name_plural': 'Respuesta',
            },
        ),
        migrations.CreateModel(
            name='Relacion_solicitud_persona',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Persona_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.persona')),
                ('Solicitud_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitud')),
            ],
            options={
                'verbose_name': 'Relacion_solicitud_persona',
                'verbose_name_plural': 'Relacion_solicitud_persona',
            },
        ),
        migrations.CreateModel(
            name='Relacion_citacion_persona',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Citacion_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.citacion')),
                ('Persona_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.persona')),
            ],
            options={
                'verbose_name': 'Relacion_citacion_persona',
                'verbose_name_plural': 'Relacion_citacion_personas',
            },
        ),
        migrations.CreateModel(
            name='Relacion_area_perfil',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Area_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.area')),
                ('Perfil_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.perfil')),
            ],
            options={
                'verbose_name': 'Relacion_area_perfil',
                'verbose_name_plural': 'Relacion_area_perfils',
            },
        ),
        migrations.AddField(
            model_name='persona',
            name='Tipo_cargo_Id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_cargo'),
        ),
        migrations.AddField(
            model_name='persona',
            name='Tipo_documento_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_documento'),
        ),
        migrations.AddField(
            model_name='persona',
            name='Tipo_estado_Id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_estado'),
        ),
        migrations.AddField(
            model_name='persona',
            name='Tipo_persona_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_persona'),
        ),
        migrations.AddField(
            model_name='persona',
            name='Tipo_vivienda_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_vivienda'),
        ),
        migrations.CreateModel(
            name='Localidad',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
                ('Ciudad_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.ciudad')),
            ],
            options={
                'verbose_name': 'Localidad',
                'verbose_name_plural': 'Localidades',
            },
        ),
        migrations.CreateModel(
            name='Historico_solicitud',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Fecha', models.DateTimeField(auto_now=True)),
                ('Descripcion', models.TextField()),
                ('Flag_requiere_documento', models.BooleanField(default=False)),
                ('Solicitud_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitud')),
                ('Tipo_estado_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_estado')),
            ],
            options={
                'verbose_name': 'Historico_solicitud',
                'verbose_name_plural': 'Historico_solicitudes',
            },
        ),
        migrations.CreateModel(
            name='Hechos',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Fecha', models.DateField()),
                ('Descripcion_hecho', models.TextField()),
                ('Descripcion_pretension', models.TextField(blank=True)),
                ('Flag_interviene_tercero', models.BooleanField(blank=True, default=False)),
                ('Flag_violencia', models.BooleanField(blank=True, default=False)),
                ('Cuantia', models.PositiveIntegerField(blank=True, null=True)),
                ('Cuantia_indeterminada', models.BooleanField(default=False)),
                ('Ciudad_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.ciudad')),
                ('Solicitud_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitud')),
            ],
            options={
                'verbose_name': 'Hechos',
                'verbose_name_plural': 'Hechos',
            },
        ),
        migrations.CreateModel(
            name='Encuesta',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Fecha', models.DateField()),
                ('Medio_conocimiento_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.medio_conocimiento')),
                ('Solicitud_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitud')),
                ('Usuario_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.usuario')),
            ],
            options={
                'verbose_name': 'Encuesta',
                'verbose_name_plural': 'Encuestas',
            },
        ),
        migrations.CreateModel(
            name='Documento',
            fields=[
                ('Id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('State', models.BooleanField(blank=True, default=True)),
                ('Ruta_directorio', models.FileField(upload_to=None)),
                ('Tamanio', models.CharField(blank=True, max_length=50, null=True)),
                ('Fecha_documento', models.DateField(auto_now=True)),
                ('Solicitud_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitud')),
                ('Tipo_estado_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_estado')),
            ],
            options={
                'verbose_name': 'Documento',
                'verbose_name_plural': 'Documentos',
            },
        ),
        migrations.CreateModel(
            name='Departamento',
            fields=[
                ('State', models.BooleanField(blank=True, default=True)),
                ('Id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('Nombre', models.CharField(max_length=50)),
                ('Pais_Id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.pais')),
            ],
            options={
                'verbose_name': 'Departamento',
                'verbose_name_plural': 'Departamentos',
            },
        ),
        migrations.AddField(
            model_name='ciudad',
            name='Departamento_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.departamento'),
        ),
        migrations.AddField(
            model_name='citacion',
            name='Solicitud_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.solicitud'),
        ),
        migrations.AddField(
            model_name='citacion',
            name='Tipo_medio_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.tipo_medio'),
        ),
        migrations.AddField(
            model_name='citacion',
            name='Turno_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.turno'),
        ),
        migrations.AddField(
            model_name='barrio',
            name='Localidad_Id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiConciliacionApp.localidad'),
        ),
    ]
