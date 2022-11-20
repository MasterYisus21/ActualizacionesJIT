# Generated by Django 4.0.4 on 2022-11-20 05:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiSolicitudesApp', '0007_alter_apoderado_identificacion_alter_persona_celular_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='persona',
            name='celular',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='persona',
            name='ciudad_nacimiento_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.ciudad'),
        ),
        migrations.AlterField(
            model_name='persona',
            name='direccion',
            field=models.CharField(max_length=40, null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='estrato_socioeconomico_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.estrato_socioeconomico'),
        ),
        migrations.AlterField(
            model_name='persona',
            name='fecha_expedicion',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='fecha_nacimiento',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='genero_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.genero'),
        ),
        migrations.AlterField(
            model_name='persona',
            name='lugar_expedicion',
            field=models.CharField(max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='persona',
            name='sexo_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.sexo'),
        ),
        migrations.AlterField(
            model_name='persona',
            name='tipo_documento_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.tipo_documento'),
        ),
        migrations.AlterField(
            model_name='persona',
            name='tipo_persona_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiSolicitudesApp.tipo_persona'),
        ),
    ]
