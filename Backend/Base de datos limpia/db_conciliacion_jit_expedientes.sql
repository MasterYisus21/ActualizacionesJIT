DROP TABLE IF EXISTS "public"."Apoderado_expediente";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Apoderado_expediente" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombres" varchar(25) NOT NULL,
    "apellidos" varchar(25) NOT NULL,
    "identificacion" varchar(25) NOT NULL,
    "fecha_expedicion" date,
    "lugar_expedicion" varchar(20) NOT NULL,
    "telefono" varchar(10),
    "celular" varchar(15) NOT NULL,
    "correo" varchar(120) NOT NULL,
    "tarjeta_profesional" varchar(25) NOT NULL,
    "tipo_documento_id_id" int4,
    CONSTRAINT "Apoderado_expediente_tipo_documento_id_id_30c58fba_fk_Tipo_docu" FOREIGN KEY ("tipo_documento_id_id") REFERENCES "public"."Tipo_documento"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Apoderado_solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Apoderado_solicitud" (
    "nombres" varchar(25) NOT NULL,
    "apellidos" varchar(25) NOT NULL,
    "identificacion" varchar(25) NOT NULL,
    "fecha_expedicion" date,
    "lugar_expedicion" varchar(20),
    "telefono" varchar(10),
    "celular" varchar(15) NOT NULL,
    "correo" varchar(120) NOT NULL,
    "tarjeta_profesional" varchar(25) NOT NULL,
    "estado" bool NOT NULL,
    "tipo_documento_id_id" int4,
    CONSTRAINT "Apoderado_solicitud_tipo_documento_id_id_b3cb0380_fk_Tipo_docu" FOREIGN KEY ("tipo_documento_id_id") REFERENCES "public"."Tipo_documento"("id"),
    PRIMARY KEY ("identificacion")
);

DROP TABLE IF EXISTS "public"."Area";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Area" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."auth_group";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."auth_group" (
    "id" int4 NOT NULL,
    "name" varchar(150) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."auth_group_permissions";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."auth_group_permissions" (
    "id" int8 NOT NULL,
    "group_id" int4 NOT NULL,
    "permission_id" int4 NOT NULL,
    CONSTRAINT "auth_group_permissions_group_id_b120cbf9_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "public"."auth_group"("id"),
    CONSTRAINT "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "public"."auth_permission"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."auth_permission";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."auth_permission" (
    "id" int4 NOT NULL,
    "name" varchar(255) NOT NULL,
    "content_type_id" int4 NOT NULL,
    "codename" varchar(100) NOT NULL,
    CONSTRAINT "auth_permission_content_type_id_2f476e4b_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "public"."django_content_type"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."auth_user";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."auth_user" (
    "id" int4 NOT NULL,
    "password" varchar(128) NOT NULL,
    "last_login" timestamptz,
    "is_superuser" bool NOT NULL,
    "username" varchar(150) NOT NULL,
    "first_name" varchar(150) NOT NULL,
    "last_name" varchar(150) NOT NULL,
    "email" varchar(254) NOT NULL,
    "is_staff" bool NOT NULL,
    "is_active" bool NOT NULL,
    "date_joined" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."auth_user_groups";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."auth_user_groups" (
    "id" int8 NOT NULL,
    "user_id" int4 NOT NULL,
    "group_id" int4 NOT NULL,
    CONSTRAINT "auth_user_groups_user_id_6a12ed8b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."auth_user"("id"),
    CONSTRAINT "auth_user_groups_group_id_97559544_fk_auth_group_id" FOREIGN KEY ("group_id") REFERENCES "public"."auth_group"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."auth_user_user_permissions";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."auth_user_user_permissions" (
    "id" int8 NOT NULL,
    "user_id" int4 NOT NULL,
    "permission_id" int4 NOT NULL,
    CONSTRAINT "auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."auth_user"("id"),
    CONSTRAINT "auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm" FOREIGN KEY ("permission_id") REFERENCES "public"."auth_permission"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Barrio";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Barrio" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(80) NOT NULL,
    "localidad_id_id" int4,
    CONSTRAINT "Barrio_localidad_id_id_88284468_fk_Localidad_id" FOREIGN KEY ("localidad_id_id") REFERENCES "public"."Localidad"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Categoria_resultado";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Categoria_resultado" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    "consecutivo_actual" int4 NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Centro_conciliacion";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Centro_conciliacion" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Citacion";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Citacion" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "enlace" varchar(150),
    "descripcion" text,
    "fecha_sesion" date NOT NULL,
    "expediente_id_id" int4,
    "tipo_medio_id_id" int4,
    "turno_id_id" int4,
    CONSTRAINT "Citacion_expediente_id_id_2c6417c7_fk_Expediente_id" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    CONSTRAINT "Citacion_tipo_medio_id_id_130567ac_fk_Tipo_medio_id" FOREIGN KEY ("tipo_medio_id_id") REFERENCES "public"."Tipo_medio"("id"),
    CONSTRAINT "Citacion_turno_id_id_d97fc0ff_fk_Turno_id" FOREIGN KEY ("turno_id_id") REFERENCES "public"."Turno"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Ciudad";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Ciudad" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(80) NOT NULL,
    "departamento_id_id" int4,
    CONSTRAINT "Ciudad_departamento_id_id_5df10251_fk_Departamento_id" FOREIGN KEY ("departamento_id_id") REFERENCES "public"."Departamento"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Codigo";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Codigo" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "codigo" varchar(7),
    "fecha_registro" date NOT NULL,
    "solicitud_id_id" int4,
    CONSTRAINT "Codigo_solicitud_id_id_8af09c59_fk_Solicitud_id" FOREIGN KEY ("solicitud_id_id") REFERENCES "public"."Solicitud"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Departamento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Departamento" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    "pais_id_id" int4,
    CONSTRAINT "Departamento_pais_id_id_5826edd7_fk_Pais_id" FOREIGN KEY ("pais_id_id") REFERENCES "public"."Pais"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."django_admin_log";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."django_admin_log" (
    "id" int4 NOT NULL,
    "action_time" timestamptz NOT NULL,
    "object_id" text,
    "object_repr" varchar(200) NOT NULL,
    "action_flag" int2 NOT NULL,
    "change_message" text NOT NULL,
    "content_type_id" int4,
    "user_id" int4 NOT NULL,
    CONSTRAINT "django_admin_log_content_type_id_c4bce8eb_fk_django_co" FOREIGN KEY ("content_type_id") REFERENCES "public"."django_content_type"("id"),
    CONSTRAINT "django_admin_log_user_id_c564eba6_fk_auth_user_id" FOREIGN KEY ("user_id") REFERENCES "public"."auth_user"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."django_content_type";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."django_content_type" (
    "id" int4 NOT NULL,
    "app_label" varchar(100) NOT NULL,
    "model" varchar(100) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."django_migrations";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."django_migrations" (
    "id" int8 NOT NULL,
    "app" varchar(255) NOT NULL,
    "name" varchar(255) NOT NULL,
    "applied" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."django_session";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."django_session" (
    "session_key" varchar(40) NOT NULL,
    "session_data" text NOT NULL,
    "expire_date" timestamptz NOT NULL,
    PRIMARY KEY ("session_key")
);

DROP TABLE IF EXISTS "public"."Documento_solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Documento_solicitud" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(170) NOT NULL,
    "fecha_registro" date NOT NULL,
    "documento" varchar(100),
    "solicitud_id_id" int4,
    CONSTRAINT "Documento_solicitud_solicitud_id_id_4309ec19_fk_Solicitud_id" FOREIGN KEY ("solicitud_id_id") REFERENCES "public"."Solicitud"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Encuesta";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Encuesta" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "fecha" date NOT NULL,
    "observacion" text,
    "expediente_id_id" int4,
    "medio_conocimiento_id_id" int4,
    CONSTRAINT "Encuesta_expediente_id_id_4ccbb1b1_fk_Expediente_id" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    CONSTRAINT "Encuesta_medio_conocimiento_i_9344f548_fk_Medio_con" FOREIGN KEY ("medio_conocimiento_id_id") REFERENCES "public"."Medio_conocimiento"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Escolaridad";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Escolaridad" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Estado_civil";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Estado_civil" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Estado_expediente";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Estado_expediente" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Estado_solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Estado_solicitud" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Estrato_socioeconomico";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Estrato_socioeconomico" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Expediente";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Expediente" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "identificador_sicaac" varchar(15),
    "numero_radicado" varchar(20),
    "numero_caso" varchar(25) NOT NULL,
    "fecha_registro" date NOT NULL,
    "caso_gratuito" bool,
    "asunto_juridico_definible" bool NOT NULL,
    "fecha_finalizacion" date,
    "expediente_pre_cerrado" bool,
    "expediente_cerrado" bool,
    "Finalidad_servicio_id_id" int4,
    "area_id_id" int4,
    "estado_expediente_id_id" int4,
    "inicio_conflicto_id_id" int4,
    "solicitante_servicio_id_id" int4,
    "subtema_id_id" int4,
    "tipo_servicio_id_id" int4,
    CONSTRAINT "Expediente_Finalidad_servicio_i_1ae0ce4b_fk_finalidad" FOREIGN KEY ("Finalidad_servicio_id_id") REFERENCES "public"."finalidad_servicio"("id"),
    CONSTRAINT "Expediente_area_id_id_1621a03d_fk_Area_id" FOREIGN KEY ("area_id_id") REFERENCES "public"."Area"("id"),
    CONSTRAINT "Expediente_estado_expediente_id_a38f12da_fk_Estado_ex" FOREIGN KEY ("estado_expediente_id_id") REFERENCES "public"."Estado_expediente"("id"),
    CONSTRAINT "Expediente_inicio_conflicto_id__132ced5c_fk_Inicio_co" FOREIGN KEY ("inicio_conflicto_id_id") REFERENCES "public"."Inicio_conflicto"("id"),
    CONSTRAINT "Expediente_solicitante_servicio_80e16f1b_fk_Solicitud" FOREIGN KEY ("solicitante_servicio_id_id") REFERENCES "public"."Solicitud_servicio"("id"),
    CONSTRAINT "Expediente_subtema_id_id_68a430e2_fk_Subtema_id" FOREIGN KEY ("subtema_id_id") REFERENCES "public"."Subtema"("id"),
    CONSTRAINT "Expediente_tipo_servicio_id_id_f27850dd_fk_Tipo_servicio_id" FOREIGN KEY ("tipo_servicio_id_id") REFERENCES "public"."Tipo_servicio"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."finalidad_servicio";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."finalidad_servicio" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Genero";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Genero" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Grupo_etnico";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Grupo_etnico" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Hechos_expediente";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Hechos_expediente" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "cuantia_indeterminada" bool,
    "flag_interviene_tercero" bool,
    "flag_violencia" bool,
    "cuantia" int4,
    "descripcion" text NOT NULL,
    "Flag_conflicto_por_incapacidad" bool,
    "pretension" text,
    "ciudad_id_id" int4,
    "expediente_id_id" int4,
    CONSTRAINT "Hechos_expediente_ciudad_id_id_5695e229_fk_Ciudad_id" FOREIGN KEY ("ciudad_id_id") REFERENCES "public"."Ciudad"("id"),
    CONSTRAINT "Hechos_expediente_expediente_id_id_3091db21_fk_Expediente_id" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Hechos_solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Hechos_solicitud" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "descripcion" text NOT NULL,
    "ciudad_id_id" int4,
    "solicitud_id_id" int4,
    CONSTRAINT "Hechos_solicitud_ciudad_id_id_c4689b60_fk_Ciudad_id" FOREIGN KEY ("ciudad_id_id") REFERENCES "public"."Ciudad"("id"),
    CONSTRAINT "Hechos_solicitud_solicitud_id_id_ceb3ca38_fk_Solicitud_id" FOREIGN KEY ("solicitud_id_id") REFERENCES "public"."Solicitud"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Historico";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Historico" (
    "id" int4 NOT NULL,
    "fecha" timestamptz NOT NULL,
    "estado_id_id" int4,
    "expediente_id_id" int4,
    CONSTRAINT "Historico_estado_id_id_b180254b_fk_Estado_expediente_id" FOREIGN KEY ("estado_id_id") REFERENCES "public"."Estado_expediente"("id"),
    CONSTRAINT "Historico_expediente_id_id_a1180164_fk_Expediente_id" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Inicio_conflicto";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Inicio_conflicto" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Localidad";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Localidad" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    "ciudad_id_id" int4,
    CONSTRAINT "Localidad_ciudad_id_id_f4400f15_fk_Ciudad_id" FOREIGN KEY ("ciudad_id_id") REFERENCES "public"."Ciudad"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Medio_conocimiento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Medio_conocimiento" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Medio_seguimiento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Medio_seguimiento" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Objetivo_servicio";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Objetivo_servicio" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Pais";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Pais" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Perfil";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Perfil" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    "area_id_id" int4 NOT NULL,
    CONSTRAINT "Perfil_area_id_id_bcc94512_fk_Area_id" FOREIGN KEY ("area_id_id") REFERENCES "public"."Area"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Persona";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Persona" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombres" varchar(25) NOT NULL,
    "apellidos" varchar(25) NOT NULL,
    "identificacion" varchar(25) NOT NULL,
    "fecha_expedicion" date,
    "lugar_expedicion" varchar(20),
    "fecha_nacimiento" date,
    "telefono" varchar(10),
    "direccion" varchar(40),
    "ocupacion" varchar(25) NOT NULL,
    "celular" varchar(15) NOT NULL,
    "correo" varchar(120) NOT NULL,
    "persona_ugc" bool,
    "tarjeta_profesional" varchar(25),
    "lugar_nacimiento" varchar(50),
    "apoderado_id_id" int4,
    "barrio_id_id" int4,
    "escolaridad_id_id" int4,
    "estado_civil_id_id" int4,
    "estrato_socioeconomico_id_id" int4,
    "genero_id_id" int4,
    "grupo_etnico_id_id" int4,
    "perfil_id_id" int4,
    "sexo_id_id" int4,
    "tipo_cargo_id_id" int4,
    "tipo_discapacidad_id_id" int4,
    "tipo_documento_id_id" int4,
    "tipo_persona_id_id" int4,
    "tipo_vivienda_id_id" int4,
    "usuario_id_id" int4,
    CONSTRAINT "Persona_tipo_cargo_id_id_6d2d60e9_fk_Tipo_cargo_id" FOREIGN KEY ("tipo_cargo_id_id") REFERENCES "public"."Tipo_cargo"("id"),
    CONSTRAINT "Persona_tipo_discapacidad_id_cabfaa65_fk_Tipo_disc" FOREIGN KEY ("tipo_discapacidad_id_id") REFERENCES "public"."Tipo_discapacidad"("id"),
    CONSTRAINT "Persona_tipo_documento_id_id_fb30a68c_fk_Tipo_documento_id" FOREIGN KEY ("tipo_documento_id_id") REFERENCES "public"."Tipo_documento"("id"),
    CONSTRAINT "Persona_tipo_persona_id_id_461c2cf0_fk_Tipo_persona_id" FOREIGN KEY ("tipo_persona_id_id") REFERENCES "public"."Tipo_persona"("id"),
    CONSTRAINT "Persona_tipo_vivienda_id_id_770b3bb6_fk_Tipo_vivienda_id" FOREIGN KEY ("tipo_vivienda_id_id") REFERENCES "public"."Tipo_vivienda"("id"),
    CONSTRAINT "Persona_usuario_id_id_a5eb0244_fk_auth_user_id" FOREIGN KEY ("usuario_id_id") REFERENCES "public"."auth_user"("id"),
    CONSTRAINT "Persona_apoderado_id_id_c0cd6083_fk_Apoderado_expediente_id" FOREIGN KEY ("apoderado_id_id") REFERENCES "public"."Apoderado_expediente"("id"),
    CONSTRAINT "Persona_barrio_id_id_9fc37aff_fk_Barrio_id" FOREIGN KEY ("barrio_id_id") REFERENCES "public"."Barrio"("id"),
    CONSTRAINT "Persona_escolaridad_id_id_42f36bdd_fk_Escolaridad_id" FOREIGN KEY ("escolaridad_id_id") REFERENCES "public"."Escolaridad"("id"),
    CONSTRAINT "Persona_estado_civil_id_id_27587456_fk_Estado_civil_id" FOREIGN KEY ("estado_civil_id_id") REFERENCES "public"."Estado_civil"("id"),
    CONSTRAINT "Persona_estrato_socioeconomi_e35f9b39_fk_Estrato_s" FOREIGN KEY ("estrato_socioeconomico_id_id") REFERENCES "public"."Estrato_socioeconomico"("id"),
    CONSTRAINT "Persona_genero_id_id_51ef6e3d_fk_Genero_id" FOREIGN KEY ("genero_id_id") REFERENCES "public"."Genero"("id"),
    CONSTRAINT "Persona_grupo_etnico_id_id_178748f3_fk_Grupo_etnico_id" FOREIGN KEY ("grupo_etnico_id_id") REFERENCES "public"."Grupo_etnico"("id"),
    CONSTRAINT "Persona_perfil_id_id_91e0ddd3_fk_Perfil_id" FOREIGN KEY ("perfil_id_id") REFERENCES "public"."Perfil"("id"),
    CONSTRAINT "Persona_sexo_id_id_b3d72a9b_fk_Sexo_id" FOREIGN KEY ("sexo_id_id") REFERENCES "public"."Sexo"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Persona_solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Persona_solicitud" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombres" varchar(25) NOT NULL,
    "apellidos" varchar(25) NOT NULL,
    "identificacion" varchar(25) NOT NULL,
    "fecha_expedicion" date,
    "lugar_expedicion" varchar(20),
    "fecha_nacimiento" date,
    "telefono" varchar(10),
    "direccion" varchar(40),
    "celular" varchar(15) NOT NULL,
    "correo" varchar(120) NOT NULL,
    "lugar_nacimiento" varchar(50),
    "apoderado_id_id" varchar(25),
    "estrato_socioeconomico_id_id" int4,
    "genero_id_id" int4,
    "sexo_id_id" int4,
    "tipo_documento_id_id" int4,
    "tipo_persona_id_id" int4,
    CONSTRAINT "Persona_solicitud_sexo_id_id_bb4fdb84_fk_Sexo_id" FOREIGN KEY ("sexo_id_id") REFERENCES "public"."Sexo"("id"),
    CONSTRAINT "Persona_solicitud_tipo_documento_id_id_2766fb8b_fk_Tipo_docu" FOREIGN KEY ("tipo_documento_id_id") REFERENCES "public"."Tipo_documento"("id"),
    CONSTRAINT "Persona_solicitud_tipo_persona_id_id_89fafc19_fk_Tipo_pers" FOREIGN KEY ("tipo_persona_id_id") REFERENCES "public"."Tipo_persona"("id"),
    CONSTRAINT "Persona_solicitud_apoderado_id_id_0552bccf_fk_Apoderado" FOREIGN KEY ("apoderado_id_id") REFERENCES "public"."Apoderado_solicitud"("identificacion"),
    CONSTRAINT "Persona_solicitud_estrato_socioeconomi_84abc6b1_fk_Estrato_s" FOREIGN KEY ("estrato_socioeconomico_id_id") REFERENCES "public"."Estrato_socioeconomico"("id"),
    CONSTRAINT "Persona_solicitud_genero_id_id_3ed5a77f_fk_Genero_id" FOREIGN KEY ("genero_id_id") REFERENCES "public"."Genero"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Pregunta_encuesta";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Pregunta_encuesta" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" text NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Pregunta_seguimiento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Pregunta_seguimiento" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" text NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Relacion_persona_citacion";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Relacion_persona_citacion" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "citacion_id_id" int4,
    "persona_id_id" int4,
    CONSTRAINT "Relacion_persona_cit_citacion_id_id_94e18f2c_fk_Citacion_" FOREIGN KEY ("citacion_id_id") REFERENCES "public"."Citacion"("id"),
    CONSTRAINT "Relacion_persona_citacion_persona_id_id_d090990b_fk_Persona_id" FOREIGN KEY ("persona_id_id") REFERENCES "public"."Persona"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Relacion_persona_expediente";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Relacion_persona_expediente" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "expediente_id_id" int4,
    "persona_id_id" int4,
    "tipo_cliente_id_id" int4,
    CONSTRAINT "Relacion_persona_exp_expediente_id_id_70d2cc87_fk_Expedient" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    CONSTRAINT "Relacion_persona_exp_persona_id_id_355b637d_fk_Persona_i" FOREIGN KEY ("persona_id_id") REFERENCES "public"."Persona"("id"),
    CONSTRAINT "Relacion_persona_exp_tipo_cliente_id_id_f3485df5_fk_Tipo_clie" FOREIGN KEY ("tipo_cliente_id_id") REFERENCES "public"."Tipo_cliente"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Relacion_persona_solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Relacion_persona_solicitud" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "persona_id_id" int4,
    "solicitud_id_id" int4,
    "tipo_cliente_id_id" int4,
    CONSTRAINT "Relacion_persona_sol_persona_id_id_3a4b7c3d_fk_Persona_s" FOREIGN KEY ("persona_id_id") REFERENCES "public"."Persona_solicitud"("id"),
    CONSTRAINT "Relacion_persona_sol_solicitud_id_id_85f71ad0_fk_Solicitud" FOREIGN KEY ("solicitud_id_id") REFERENCES "public"."Solicitud"("id"),
    CONSTRAINT "Relacion_persona_sol_tipo_cliente_id_id_b3fb5cca_fk_Tipo_clie" FOREIGN KEY ("tipo_cliente_id_id") REFERENCES "public"."Tipo_cliente"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Respuesta_encuesta";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Respuesta_encuesta" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "calificacion" int2 NOT NULL,
    "nombre" text NOT NULL,
    "encuesta_id_id" int4,
    "pregunta_encuesta_id_id" int4,
    CONSTRAINT "Respuesta_encuesta_encuesta_id_id_67131cb7_fk_Encuesta_id" FOREIGN KEY ("encuesta_id_id") REFERENCES "public"."Encuesta"("id"),
    CONSTRAINT "Respuesta_encuesta_pregunta_encuesta_id_9801e503_fk_Pregunta_" FOREIGN KEY ("pregunta_encuesta_id_id") REFERENCES "public"."Pregunta_encuesta"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Respuesta_seguimiento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Respuesta_seguimiento" (
    "estado" bool NOT NULL,
    "id" int4 NOT NULL,
    "si_o_no" bool NOT NULL,
    "porque" text,
    "nombre" text NOT NULL,
    "pregunta_seguimiento_id_id" int4,
    "seguimiento_id_id" int4,
    CONSTRAINT "Respuesta_seguimient_pregunta_seguimiento_ffe6fecf_fk_Pregunta_" FOREIGN KEY ("pregunta_seguimiento_id_id") REFERENCES "public"."Pregunta_seguimiento"("id"),
    CONSTRAINT "Respuesta_seguimient_seguimiento_id_id_da3cb5f1_fk_Seguimien" FOREIGN KEY ("seguimiento_id_id") REFERENCES "public"."Seguimiento"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."rest_framework_api_key_apikey";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."rest_framework_api_key_apikey" (
    "id" varchar(150) NOT NULL,
    "created" timestamptz NOT NULL,
    "name" varchar(50) NOT NULL,
    "revoked" bool NOT NULL,
    "expiry_date" timestamptz,
    "hashed_key" varchar(150) NOT NULL,
    "prefix" varchar(8) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Resultado";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Resultado" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "consecutivo" int4 NOT NULL,
    "acuerdo" text,
    "documento" varchar(100),
    "fecha" date NOT NULL,
    "expediente_id_id" int4,
    "tipo_resultado_id_id" int4,
    CONSTRAINT "Resultado_expediente_id_id_1b3cd390_fk_Expediente_id" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    CONSTRAINT "Resultado_tipo_resultado_id_id_73e6133a_fk_Tipo_resultado_id" FOREIGN KEY ("tipo_resultado_id_id") REFERENCES "public"."Tipo_resultado"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Seguimiento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Seguimiento" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "fecha" date NOT NULL,
    "se_cumplio_acuerdo" bool,
    "recomendacion_al_usuario" text,
    "seguimiento_efectivo" bool,
    "expediente_id_id" int4,
    "medio_seguimiento_id_id" int4,
    CONSTRAINT "Seguimiento_expediente_id_id_b42a6630_fk_Expediente_id" FOREIGN KEY ("expediente_id_id") REFERENCES "public"."Expediente"("id"),
    CONSTRAINT "Seguimiento_medio_seguimiento_id_0a2046f1_fk_Medio_seg" FOREIGN KEY ("medio_seguimiento_id_id") REFERENCES "public"."Medio_seguimiento"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Sexo";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Sexo" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Solicitud";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Solicitud" (
    "id" int4 NOT NULL,
    "numero_radicado" varchar(25) NOT NULL,
    "fecha_registro" date NOT NULL,
    "comentario" text,
    "estado" bool NOT NULL,
    "estado_solicitud_id_id" int4,
    CONSTRAINT "Solicitud_estado_solicitud_id__cad792dd_fk_Estado_so" FOREIGN KEY ("estado_solicitud_id_id") REFERENCES "public"."Estado_solicitud"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Solicitud_servicio";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Solicitud_servicio" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Subtema";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Subtema" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(210) NOT NULL,
    "tema_id_id" int4,
    CONSTRAINT "Subtema_tema_id_id_c61c16f0_fk_Tema_id" FOREIGN KEY ("tema_id_id") REFERENCES "public"."Tema"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tema";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tema" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(100) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_cargo";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_cargo" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_cliente";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_cliente" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_discapacidad";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_discapacidad" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_documento";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_documento" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_medio";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_medio" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_persona";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_persona" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_reporte";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_reporte" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_resultado";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_resultado" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    "categoria_id_id" int4,
    CONSTRAINT "Tipo_resultado_categoria_id_id_196a78be_fk_Categoria" FOREIGN KEY ("categoria_id_id") REFERENCES "public"."Categoria_resultado"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_servicio";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_servicio" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    "Objetivo_servicio_id_id" int4,
    CONSTRAINT "Tipo_servicio_Objetivo_servicio_id_80914faf_fk_Objetivo_" FOREIGN KEY ("Objetivo_servicio_id_id") REFERENCES "public"."Objetivo_servicio"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Tipo_vivienda";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Tipo_vivienda" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."Turno";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Table Definition
CREATE TABLE "public"."Turno" (
    "id" int4 NOT NULL,
    "estado" bool NOT NULL,
    "nombre" varchar(50) NOT NULL,
    PRIMARY KEY ("id")
);





INSERT INTO "public"."Area" ("id", "estado", "nombre") VALUES
(1, 't', 'Civil');
INSERT INTO "public"."Area" ("id", "estado", "nombre") VALUES
(2, 't', 'Comercial');
INSERT INTO "public"."Area" ("id", "estado", "nombre") VALUES
(3, 't', 'Familia');
INSERT INTO "public"."Area" ("id", "estado", "nombre") VALUES
(4, 't', 'Penal');

INSERT INTO "public"."auth_group" ("id", "name") VALUES
(1, 'Administrador');
INSERT INTO "public"."auth_group" ("id", "name") VALUES
(2, 'Docente');
INSERT INTO "public"."auth_group" ("id", "name") VALUES
(3, 'Estudiante');

INSERT INTO "public"."auth_group_permissions" ("id", "group_id", "permission_id") VALUES
(766, 1, 1);
INSERT INTO "public"."auth_group_permissions" ("id", "group_id", "permission_id") VALUES
(767, 1, 2);
INSERT INTO "public"."auth_group_permissions" ("id", "group_id", "permission_id") VALUES
(768, 1, 3);
INSERT INTO "public"."auth_group_permissions" ("id", "group_id", "permission_id") VALUES
(769, 1, 4),
(770, 1, 5),
(771, 1, 6),
(772, 1, 7),
(773, 1, 8),
(774, 1, 9),
(775, 1, 10),
(776, 1, 11),
(777, 1, 12),
(13, 1, 13),
(14, 1, 14),
(15, 1, 15),
(16, 1, 16),
(778, 1, 17),
(779, 1, 18),
(780, 1, 19),
(781, 1, 20),
(782, 1, 21),
(783, 1, 22),
(784, 1, 23),
(785, 1, 24),
(695, 1, 25),
(696, 1, 26),
(697, 1, 27),
(698, 1, 28),
(699, 1, 29),
(700, 1, 30),
(701, 1, 31),
(702, 1, 32),
(703, 1, 33),
(704, 1, 34),
(705, 1, 35),
(706, 1, 36),
(707, 1, 37),
(708, 1, 38),
(709, 1, 39),
(710, 1, 40),
(711, 1, 41),
(712, 1, 42),
(713, 1, 43),
(714, 1, 44),
(715, 1, 45),
(716, 1, 46),
(717, 1, 47),
(718, 1, 48),
(719, 1, 49),
(720, 1, 50),
(721, 1, 51),
(722, 1, 52),
(723, 1, 53),
(724, 1, 54),
(725, 1, 55),
(726, 1, 56),
(727, 1, 57),
(728, 1, 58),
(729, 1, 59),
(730, 1, 60),
(731, 1, 61),
(732, 1, 62),
(733, 1, 63),
(734, 1, 64),
(735, 1, 65),
(736, 1, 66),
(737, 1, 67),
(738, 1, 68),
(739, 1, 69),
(740, 1, 70),
(741, 1, 71),
(742, 1, 72),
(692, 1, 73),
(743, 1, 74),
(693, 1, 75),
(744, 1, 76),
(745, 1, 77),
(746, 1, 78),
(747, 1, 79),
(748, 1, 80),
(749, 1, 81),
(750, 1, 82),
(751, 1, 83),
(752, 1, 84),
(753, 1, 85),
(754, 1, 86),
(755, 1, 87),
(756, 1, 88),
(757, 1, 89),
(758, 1, 90),
(759, 1, 91),
(760, 1, 92),
(786, 1, 93),
(787, 1, 94),
(788, 1, 95),
(789, 1, 96),
(790, 1, 97),
(791, 1, 98),
(792, 1, 99),
(793, 1, 100),
(794, 1, 101),
(795, 1, 102),
(796, 1, 103),
(797, 1, 104),
(798, 1, 105),
(799, 1, 106),
(800, 1, 107),
(801, 1, 108),
(802, 1, 109),
(803, 1, 110),
(804, 1, 111),
(805, 1, 112),
(806, 1, 113),
(807, 1, 114),
(808, 1, 115),
(809, 1, 116),
(810, 1, 117),
(811, 1, 118),
(812, 1, 119),
(813, 1, 120),
(814, 1, 121),
(815, 1, 122),
(816, 1, 123),
(817, 1, 124),
(818, 1, 125),
(819, 1, 126),
(820, 1, 127),
(821, 1, 128),
(822, 1, 129),
(823, 1, 130),
(824, 1, 131),
(825, 1, 132),
(826, 1, 133),
(827, 1, 134),
(828, 1, 135),
(829, 1, 136),
(830, 1, 137),
(831, 1, 138),
(832, 1, 139),
(833, 1, 140),
(834, 1, 141),
(835, 1, 142),
(836, 1, 143),
(837, 1, 144),
(838, 1, 145),
(839, 1, 146),
(840, 1, 147),
(841, 1, 148),
(842, 1, 149),
(843, 1, 150),
(844, 1, 151),
(845, 1, 152),
(846, 1, 153),
(847, 1, 154),
(848, 1, 155),
(849, 1, 156),
(850, 1, 157),
(851, 1, 158),
(852, 1, 159),
(853, 1, 160),
(854, 1, 161),
(855, 1, 162),
(856, 1, 163),
(857, 1, 164),
(858, 1, 165);
INSERT INTO "public"."auth_group_permissions" ("id", "group_id", "permission_id") VALUES
(859, 1, 166),
(860, 1, 167),
(861, 1, 168),
(862, 1, 169),
(863, 1, 170),
(864, 1, 171),
(865, 1, 172),
(866, 1, 173),
(867, 1, 174),
(868, 1, 175),
(869, 1, 176),
(870, 1, 177),
(871, 1, 178),
(872, 1, 179),
(873, 1, 180),
(874, 1, 181),
(875, 1, 182),
(876, 1, 183),
(877, 1, 184),
(878, 1, 185),
(879, 1, 186),
(880, 1, 187),
(881, 1, 188),
(882, 1, 189),
(883, 1, 190),
(884, 1, 191),
(885, 1, 192),
(886, 1, 193),
(887, 1, 194),
(888, 1, 195),
(889, 1, 196),
(890, 1, 197),
(891, 1, 198),
(892, 1, 199),
(893, 1, 200),
(894, 1, 201),
(895, 1, 202),
(896, 1, 203),
(897, 1, 204),
(898, 1, 205),
(899, 1, 206),
(900, 1, 207),
(901, 1, 208),
(689, 1, 209),
(902, 1, 210),
(903, 1, 211),
(904, 1, 212),
(905, 1, 213),
(906, 1, 214),
(907, 1, 215),
(908, 1, 216),
(909, 1, 217),
(910, 1, 218),
(911, 1, 219),
(912, 1, 220),
(913, 1, 221),
(914, 1, 222),
(915, 1, 223),
(916, 1, 224),
(917, 1, 225),
(918, 1, 226),
(919, 1, 227),
(920, 1, 228),
(921, 1, 229),
(922, 1, 230),
(923, 1, 231),
(924, 1, 232),
(925, 1, 233),
(926, 1, 234),
(927, 1, 235),
(928, 1, 236),
(929, 1, 237),
(930, 1, 238),
(931, 1, 239),
(932, 1, 240),
(933, 1, 241),
(934, 1, 242),
(935, 1, 243),
(936, 1, 244),
(937, 1, 245),
(938, 1, 246),
(939, 1, 247),
(940, 1, 248),
(941, 1, 249),
(942, 1, 250),
(943, 1, 251),
(944, 1, 252),
(945, 1, 253),
(946, 1, 254),
(947, 1, 255),
(948, 1, 256),
(949, 1, 257),
(950, 1, 258),
(951, 1, 259),
(952, 1, 260),
(953, 1, 261),
(954, 1, 262),
(955, 1, 263),
(956, 1, 264),
(957, 1, 265),
(958, 1, 266),
(959, 1, 267),
(960, 1, 268),
(269, 1, 269),
(961, 1, 270),
(962, 1, 271),
(963, 1, 272),
(1046, 1, 273),
(965, 1, 274),
(966, 1, 275),
(967, 1, 276),
(968, 1, 277),
(969, 1, 278),
(970, 1, 279),
(971, 1, 280),
(972, 1, 281),
(973, 1, 282),
(974, 1, 283),
(975, 1, 284),
(976, 1, 285),
(977, 1, 286),
(978, 1, 287),
(979, 1, 288),
(980, 1, 289),
(981, 1, 290),
(982, 1, 291),
(983, 1, 292),
(984, 1, 293),
(985, 1, 294),
(986, 1, 295),
(987, 1, 296),
(988, 1, 297),
(989, 1, 298),
(990, 1, 299),
(991, 1, 300),
(992, 1, 301),
(993, 1, 302),
(994, 1, 303),
(995, 1, 304),
(996, 1, 305),
(997, 1, 306),
(998, 1, 307),
(999, 1, 308),
(1000, 1, 309),
(1001, 1, 310),
(1002, 1, 311),
(1003, 1, 312),
(1004, 1, 313),
(1005, 1, 314),
(1006, 1, 315),
(1007, 1, 316),
(1008, 1, 317),
(1009, 1, 318),
(1010, 1, 319),
(1011, 1, 320),
(1012, 1, 321),
(1013, 1, 322),
(1014, 1, 323),
(1015, 1, 324),
(1016, 1, 325),
(1017, 1, 326),
(1018, 1, 327),
(1019, 1, 328),
(1020, 1, 329),
(1021, 1, 330),
(1022, 1, 331),
(1023, 1, 332),
(1024, 1, 333),
(1025, 1, 334),
(1026, 1, 335),
(1027, 1, 336),
(1028, 1, 337),
(1029, 1, 338),
(1030, 1, 339),
(1031, 1, 340),
(1032, 1, 341),
(1033, 1, 342),
(1034, 1, 343),
(1035, 1, 344),
(1036, 1, 345),
(1037, 1, 346),
(1038, 1, 347),
(1039, 1, 348),
(353, 2, 13),
(354, 2, 14),
(1042, 2, 16),
(416, 2, 76),
(1041, 2, 108),
(549, 2, 209),
(550, 2, 210),
(551, 2, 211),
(552, 2, 212),
(1040, 2, 240),
(1, 3, 333),
(2, 3, 8),
(3, 3, 12),
(4, 3, 16),
(5, 3, 20),
(6, 3, 25),
(7, 3, 26),
(8, 3, 28),
(9, 3, 32),
(10, 3, 36),
(11, 3, 40),
(12, 3, 44),
(17, 3, 56),
(18, 3, 60),
(19, 3, 61),
(20, 3, 64),
(21, 3, 68),
(22, 3, 72),
(26, 3, 77),
(27, 3, 78),
(28, 3, 80),
(29, 3, 81),
(30, 3, 84),
(34, 3, 92),
(35, 3, 93),
(36, 3, 96),
(37, 3, 104),
(38, 3, 108),
(39, 3, 112),
(40, 3, 116),
(41, 3, 120),
(42, 3, 124),
(43, 3, 126),
(44, 3, 128),
(45, 3, 129),
(46, 3, 132),
(47, 3, 136),
(48, 3, 144),
(49, 3, 156),
(50, 3, 160),
(51, 3, 168),
(52, 3, 172),
(53, 3, 176),
(54, 3, 180),
(55, 3, 184),
(56, 3, 188),
(57, 3, 189),
(58, 3, 190),
(59, 3, 192),
(60, 3, 196),
(61, 3, 200),
(62, 3, 204),
(63, 3, 208),
(64, 3, 212),
(65, 3, 216),
(66, 3, 220),
(67, 3, 224),
(68, 3, 228),
(69, 3, 229),
(70, 3, 232),
(71, 3, 233),
(72, 3, 236),
(73, 3, 240),
(74, 3, 244),
(75, 3, 248),
(76, 3, 252),
(77, 3, 253),
(78, 3, 254),
(79, 3, 255),
(80, 3, 256),
(81, 3, 260),
(82, 3, 261),
(83, 3, 262),
(84, 3, 264),
(85, 3, 268),
(86, 3, 272),
(87, 3, 273),
(88, 3, 274),
(89, 3, 276),
(90, 3, 277),
(91, 3, 278),
(92, 3, 280),
(93, 3, 284),
(94, 3, 288),
(95, 3, 292),
(96, 3, 293),
(97, 3, 294),
(98, 3, 296),
(99, 3, 300),
(100, 3, 304),
(101, 3, 308),
(102, 3, 312),
(103, 3, 313),
(104, 3, 314),
(105, 3, 316),
(106, 3, 317),
(107, 3, 320),
(108, 3, 324),
(109, 3, 328),
(110, 3, 329),
(111, 3, 330),
(112, 3, 332),
(113, 3, 334),
(114, 3, 336),
(115, 3, 340),
(116, 3, 344),
(117, 3, 348);

INSERT INTO "public"."auth_permission" ("id", "name", "content_type_id", "codename") VALUES
(1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO "public"."auth_permission" ("id", "name", "content_type_id", "codename") VALUES
(2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO "public"."auth_permission" ("id", "name", "content_type_id", "codename") VALUES
(3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO "public"."auth_permission" ("id", "name", "content_type_id", "codename") VALUES
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add Apoderado', 7, 'add_apoderado_solicitud'),
(26, 'Can change Apoderado', 7, 'change_apoderado_solicitud'),
(27, 'Can delete Apoderado', 7, 'delete_apoderado_solicitud'),
(28, 'Can view Apoderado', 7, 'view_apoderado_solicitud'),
(29, 'Can add Centro_conciliacion', 8, 'add_centro_conciliacion'),
(30, 'Can change Centro_conciliacion', 8, 'change_centro_conciliacion'),
(31, 'Can delete Centro_conciliacion', 8, 'delete_centro_conciliacion'),
(32, 'Can view Centro_conciliacion', 8, 'view_centro_conciliacion'),
(33, 'Can add Ciudad', 9, 'add_ciudad'),
(34, 'Can change Ciudad', 9, 'change_ciudad'),
(35, 'Can delete Ciudad', 9, 'delete_ciudad'),
(36, 'Can view Ciudad', 9, 'view_ciudad'),
(37, 'Can add Estado_solicitud', 10, 'add_estado_solicitud'),
(38, 'Can change Estado_solicitud', 10, 'change_estado_solicitud'),
(39, 'Can delete Estado_solicitud', 10, 'delete_estado_solicitud'),
(40, 'Can view Estado_solicitud', 10, 'view_estado_solicitud'),
(41, 'Can add estratos_socioeconomicos', 11, 'add_estrato_socioeconomico'),
(42, 'Can change estratos_socioeconomicos', 11, 'change_estrato_socioeconomico'),
(43, 'Can delete estratos_socioeconomicos', 11, 'delete_estrato_socioeconomico'),
(44, 'Can view estratos_socioeconomicos', 11, 'view_estrato_socioeconomico'),
(45, 'Can add Genero', 12, 'add_genero'),
(46, 'Can change Genero', 12, 'change_genero'),
(47, 'Can delete Genero', 12, 'delete_genero'),
(48, 'Can view Genero', 12, 'view_genero'),
(49, 'Can add Pais', 13, 'add_pais'),
(50, 'Can change Pais', 13, 'change_pais'),
(51, 'Can delete Pais', 13, 'delete_pais'),
(52, 'Can view Pais', 13, 'view_pais'),
(53, 'Can add Persona', 14, 'add_persona_solicitud'),
(54, 'Can change Persona', 14, 'change_persona_solicitud'),
(55, 'Can delete Persona', 14, 'delete_persona_solicitud'),
(56, 'Can view Persona', 14, 'view_persona_solicitud'),
(57, 'Can add Sexo', 15, 'add_sexo'),
(58, 'Can change Sexo', 15, 'change_sexo'),
(59, 'Can delete Sexo', 15, 'delete_sexo'),
(60, 'Can view Sexo', 15, 'view_sexo'),
(61, 'Can add Tipo_cliente', 16, 'add_tipo_cliente'),
(62, 'Can change Tipo_cliente', 16, 'change_tipo_cliente'),
(63, 'Can delete Tipo_cliente', 16, 'delete_tipo_cliente'),
(64, 'Can view Tipo_cliente', 16, 'view_tipo_cliente'),
(65, 'Can add Tipo_documento', 17, 'add_tipo_documento'),
(66, 'Can change Tipo_documento', 17, 'change_tipo_documento'),
(67, 'Can delete Tipo_documento', 17, 'delete_tipo_documento'),
(68, 'Can view Tipo_documento', 17, 'view_tipo_documento'),
(69, 'Can add Tipo_persona', 18, 'add_tipo_persona'),
(70, 'Can change Tipo_persona', 18, 'change_tipo_persona'),
(71, 'Can delete Tipo_persona', 18, 'delete_tipo_persona'),
(72, 'Can view Tipo_persona', 18, 'view_tipo_persona'),
(73, 'Can add Solicitud', 19, 'add_solicitud'),
(74, 'Can change Solicitud', 19, 'change_solicitud'),
(75, 'Can delete Solicitud', 19, 'delete_solicitud'),
(76, 'Can view Solicitud', 19, 'view_solicitud'),
(77, 'Can add Relacion_persona_solicitud', 20, 'add_relacion_persona_solicitud'),
(78, 'Can change Relacion_persona_solicitud', 20, 'change_relacion_persona_solicitud'),
(79, 'Can delete Relacion_persona_solicitud', 20, 'delete_relacion_persona_solicitud'),
(80, 'Can view Relacion_persona_solicitud', 20, 'view_relacion_persona_solicitud'),
(81, 'Can add Hechos', 21, 'add_hechos_solicitud'),
(82, 'Can change Hechos', 21, 'change_hechos_solicitud'),
(83, 'Can delete Hechos', 21, 'delete_hechos_solicitud'),
(84, 'Can view Hechos', 21, 'view_hechos_solicitud'),
(85, 'Can add Documento', 22, 'add_documento_solicitud'),
(86, 'Can change Documento', 22, 'change_documento_solicitud'),
(87, 'Can delete Documento', 22, 'delete_documento_solicitud'),
(88, 'Can view Documento', 22, 'view_documento_solicitud'),
(89, 'Can add Departamento', 23, 'add_departamento'),
(90, 'Can change Departamento', 23, 'change_departamento'),
(91, 'Can delete Departamento', 23, 'delete_departamento'),
(92, 'Can view Departamento', 23, 'view_departamento'),
(93, 'Can add Codigo', 24, 'add_codigo'),
(94, 'Can change Codigo', 24, 'change_codigo'),
(95, 'Can delete Codigo', 24, 'delete_codigo'),
(96, 'Can view Codigo', 24, 'view_codigo'),
(97, 'Can add API key', 25, 'add_apikey'),
(98, 'Can change API key', 25, 'change_apikey'),
(99, 'Can delete API key', 25, 'delete_apikey'),
(100, 'Can view API key', 25, 'view_apikey'),
(101, 'Can add auth group', 26, 'add_authgroup'),
(102, 'Can change auth group', 26, 'change_authgroup'),
(103, 'Can delete auth group', 26, 'delete_authgroup'),
(104, 'Can view auth group', 26, 'view_authgroup'),
(105, 'Can add auth group permissions', 27, 'add_authgrouppermissions'),
(106, 'Can change auth group permissions', 27, 'change_authgrouppermissions'),
(107, 'Can delete auth group permissions', 27, 'delete_authgrouppermissions'),
(108, 'Can view auth group permissions', 27, 'view_authgrouppermissions'),
(109, 'Can add auth permission', 28, 'add_authpermission'),
(110, 'Can change auth permission', 28, 'change_authpermission'),
(111, 'Can delete auth permission', 28, 'delete_authpermission'),
(112, 'Can view auth permission', 28, 'view_authpermission'),
(113, 'Can add auth user', 29, 'add_authuser');
INSERT INTO "public"."auth_permission" ("id", "name", "content_type_id", "codename") VALUES
(114, 'Can change auth user', 29, 'change_authuser'),
(115, 'Can delete auth user', 29, 'delete_authuser'),
(116, 'Can view auth user', 29, 'view_authuser'),
(117, 'Can add auth user groups', 30, 'add_authusergroups'),
(118, 'Can change auth user groups', 30, 'change_authusergroups'),
(119, 'Can delete auth user groups', 30, 'delete_authusergroups'),
(120, 'Can view auth user groups', 30, 'view_authusergroups'),
(121, 'Can add auth user user permissions', 31, 'add_authuseruserpermissions'),
(122, 'Can change auth user user permissions', 31, 'change_authuseruserpermissions'),
(123, 'Can delete auth user user permissions', 31, 'delete_authuseruserpermissions'),
(124, 'Can view auth user user permissions', 31, 'view_authuseruserpermissions'),
(125, 'Can add Centro_conciliacion', 32, 'add_centro_conciliacion'),
(126, 'Can change Centro_conciliacion', 32, 'change_centro_conciliacion'),
(127, 'Can delete Centro_conciliacion', 32, 'delete_centro_conciliacion'),
(128, 'Can view Centro_conciliacion', 32, 'view_centro_conciliacion'),
(129, 'Can add Codigo', 33, 'add_codigo'),
(130, 'Can change Codigo', 33, 'change_codigo'),
(131, 'Can delete Codigo', 33, 'delete_codigo'),
(132, 'Can view Codigo', 33, 'view_codigo'),
(133, 'Can add Departamento', 34, 'add_departamento'),
(134, 'Can change Departamento', 34, 'change_departamento'),
(135, 'Can delete Departamento', 34, 'delete_departamento'),
(136, 'Can view Departamento', 34, 'view_departamento'),
(137, 'Can add django admin log', 35, 'add_djangoadminlog'),
(138, 'Can change django admin log', 35, 'change_djangoadminlog'),
(139, 'Can delete django admin log', 35, 'delete_djangoadminlog'),
(140, 'Can view django admin log', 35, 'view_djangoadminlog'),
(141, 'Can add django content type', 36, 'add_djangocontenttype'),
(142, 'Can change django content type', 36, 'change_djangocontenttype'),
(143, 'Can delete django content type', 36, 'delete_djangocontenttype'),
(144, 'Can view django content type', 36, 'view_djangocontenttype'),
(145, 'Can add django migrations', 37, 'add_djangomigrations'),
(146, 'Can change django migrations', 37, 'change_djangomigrations'),
(147, 'Can delete django migrations', 37, 'delete_djangomigrations'),
(148, 'Can view django migrations', 37, 'view_djangomigrations'),
(149, 'Can add django session', 38, 'add_djangosession'),
(150, 'Can change django session', 38, 'change_djangosession'),
(151, 'Can delete django session', 38, 'delete_djangosession'),
(152, 'Can view django session', 38, 'view_djangosession'),
(153, 'Can add Estado_solicitud', 39, 'add_estado_solicitud'),
(154, 'Can change Estado_solicitud', 39, 'change_estado_solicitud'),
(155, 'Can delete Estado_solicitud', 39, 'delete_estado_solicitud'),
(156, 'Can view Estado_solicitud', 39, 'view_estado_solicitud'),
(157, 'Can add Pais', 40, 'add_pais'),
(158, 'Can change Pais', 40, 'change_pais'),
(159, 'Can delete Pais', 40, 'delete_pais'),
(160, 'Can view Pais', 40, 'view_pais'),
(161, 'Can add Tipo_reporte', 41, 'add_tipo_reporte'),
(162, 'Can change Tipo_reporte', 41, 'change_tipo_reporte'),
(163, 'Can delete Tipo_reporte', 41, 'delete_tipo_reporte'),
(164, 'Can view Tipo_reporte', 41, 'view_tipo_reporte'),
(165, 'Can add Grupo_etnico', 42, 'add_grupo_etnico'),
(166, 'Can change Grupo_etnico', 42, 'change_grupo_etnico'),
(167, 'Can delete Grupo_etnico', 42, 'delete_grupo_etnico'),
(168, 'Can view Grupo_etnico', 42, 'view_grupo_etnico'),
(169, 'Can add Tipo_Discapacidad', 43, 'add_tipo_discapacidad'),
(170, 'Can change Tipo_Discapacidad', 43, 'change_tipo_discapacidad'),
(171, 'Can delete Tipo_Discapacidad', 43, 'delete_tipo_discapacidad'),
(172, 'Can view Tipo_Discapacidad', 43, 'view_tipo_discapacidad'),
(173, 'Can add Escolaridad', 44, 'add_escolaridad'),
(174, 'Can change Escolaridad', 44, 'change_escolaridad'),
(175, 'Can delete Escolaridad', 44, 'delete_escolaridad'),
(176, 'Can view Escolaridad', 44, 'view_escolaridad'),
(177, 'Can add Tipo_medio', 45, 'add_tipo_medio'),
(178, 'Can change Tipo_medio', 45, 'change_tipo_medio'),
(179, 'Can delete Tipo_medio', 45, 'delete_tipo_medio'),
(180, 'Can view Tipo_medio', 45, 'view_tipo_medio'),
(181, 'Can add estratos_socioeconomicos', 46, 'add_estrato_socioeconomico'),
(182, 'Can change estratos_socioeconomicos', 46, 'change_estrato_socioeconomico'),
(183, 'Can delete estratos_socioeconomicos', 46, 'delete_estrato_socioeconomico'),
(184, 'Can view estratos_socioeconomicos', 46, 'view_estrato_socioeconomico'),
(185, 'Can add Localidad', 47, 'add_localidad'),
(186, 'Can change Localidad', 47, 'change_localidad'),
(187, 'Can delete Localidad', 47, 'delete_localidad'),
(188, 'Can view Localidad', 47, 'view_localidad'),
(189, 'Can add Hechos', 48, 'add_hechos'),
(190, 'Can change Hechos', 48, 'change_hechos'),
(191, 'Can delete Hechos', 48, 'delete_hechos'),
(192, 'Can view Hechos', 48, 'view_hechos'),
(193, 'Can add Respuesta_seguimiento', 49, 'add_respuesta_seguimiento'),
(194, 'Can change Respuesta_seguimiento', 49, 'change_respuesta_seguimiento'),
(195, 'Can delete Respuesta_seguimiento', 49, 'delete_respuesta_seguimiento'),
(196, 'Can view Respuesta_seguimiento', 49, 'view_respuesta_seguimiento'),
(197, 'Can add Objetivo_servicio', 50, 'add_objetivo_servicio'),
(198, 'Can change Objetivo_servicio', 50, 'change_objetivo_servicio'),
(199, 'Can delete Objetivo_servicio', 50, 'delete_objetivo_servicio'),
(200, 'Can view Objetivo_servicio', 50, 'view_objetivo_servicio'),
(201, 'Can add Tipo_cargo', 51, 'add_tipo_cargo'),
(202, 'Can change Tipo_cargo', 51, 'change_tipo_cargo'),
(203, 'Can delete Tipo_cargo', 51, 'delete_tipo_cargo'),
(204, 'Can view Tipo_cargo', 51, 'view_tipo_cargo'),
(205, 'Can add Barrio', 52, 'add_barrio'),
(206, 'Can change Barrio', 52, 'change_barrio'),
(207, 'Can delete Barrio', 52, 'delete_barrio'),
(208, 'Can view Barrio', 52, 'view_barrio'),
(209, 'Can add Inicio_conflicto', 53, 'add_inicio_conflicto'),
(210, 'Can change Inicio_conflicto', 53, 'change_inicio_conflicto'),
(211, 'Can delete Inicio_conflicto', 53, 'delete_inicio_conflicto'),
(212, 'Can view Inicio_conflicto', 53, 'view_inicio_conflicto'),
(213, 'Can add Subtema', 54, 'add_subtema'),
(214, 'Can change Subtema', 54, 'change_subtema'),
(215, 'Can delete Subtema', 54, 'delete_subtema'),
(216, 'Can view Subtema', 54, 'view_subtema'),
(217, 'Can add Area', 55, 'add_area'),
(218, 'Can change Area', 55, 'change_area'),
(219, 'Can delete Area', 55, 'delete_area'),
(220, 'Can view Area', 55, 'view_area'),
(221, 'Can add Medio_seguimiento', 56, 'add_medio_seguimiento'),
(222, 'Can change Medio_seguimiento', 56, 'change_medio_seguimiento'),
(223, 'Can delete Medio_seguimiento', 56, 'delete_medio_seguimiento'),
(224, 'Can view Medio_seguimiento', 56, 'view_medio_seguimiento'),
(225, 'Can add Genero', 57, 'add_genero'),
(226, 'Can change Genero', 57, 'change_genero'),
(227, 'Can delete Genero', 57, 'delete_genero'),
(228, 'Can view Genero', 57, 'view_genero'),
(229, 'Can add Historico', 58, 'add_historico'),
(230, 'Can change Historico', 58, 'change_historico'),
(231, 'Can delete Historico', 58, 'delete_historico'),
(232, 'Can view Historico', 58, 'view_historico'),
(233, 'Can add Respuesta_encuesta', 59, 'add_respuesta_encuesta'),
(234, 'Can change Respuesta_encuesta', 59, 'change_respuesta_encuesta'),
(235, 'Can delete Respuesta_encuesta', 59, 'delete_respuesta_encuesta'),
(236, 'Can view Respuesta_encuesta', 59, 'view_respuesta_encuesta'),
(237, 'Can add Seguimiento', 60, 'add_seguimiento'),
(238, 'Can change Seguimiento', 60, 'change_seguimiento'),
(239, 'Can delete Seguimiento', 60, 'delete_seguimiento'),
(240, 'Can view Seguimiento', 60, 'view_seguimiento'),
(241, 'Can add Tipo_documento', 61, 'add_tipo_documento'),
(242, 'Can change Tipo_documento', 61, 'change_tipo_documento'),
(243, 'Can delete Tipo_documento', 61, 'delete_tipo_documento'),
(244, 'Can view Tipo_documento', 61, 'view_tipo_documento'),
(245, 'Can add Tipo_servicio', 62, 'add_tipo_servicio'),
(246, 'Can change Tipo_servicio', 62, 'change_tipo_servicio'),
(247, 'Can delete Tipo_servicio', 62, 'delete_tipo_servicio'),
(248, 'Can view Tipo_servicio', 62, 'view_tipo_servicio'),
(249, 'Can add Perfil', 63, 'add_perfil'),
(250, 'Can change Perfil', 63, 'change_perfil'),
(251, 'Can delete Perfil', 63, 'delete_perfil'),
(252, 'Can view Perfil', 63, 'view_perfil'),
(253, 'Can add Relacion_persona_citacion', 64, 'add_relacion_persona_citacion'),
(254, 'Can change Relacion_persona_citacion', 64, 'change_relacion_persona_citacion'),
(255, 'Can delete Relacion_persona_citacion', 64, 'delete_relacion_persona_citacion'),
(256, 'Can view Relacion_persona_citacion', 64, 'view_relacion_persona_citacion'),
(257, 'Can add Categoria_resultado', 65, 'add_categoria_resultado'),
(258, 'Can change Categoria_resultado', 65, 'change_categoria_resultado'),
(259, 'Can delete Categoria_resultado', 65, 'delete_categoria_resultado'),
(260, 'Can view Categoria_resultado', 65, 'view_categoria_resultado'),
(261, 'Can add Persona', 66, 'add_persona'),
(262, 'Can change Persona', 66, 'change_persona'),
(263, 'Can delete Persona', 66, 'delete_persona'),
(264, 'Can view Persona', 66, 'view_persona'),
(265, 'Can add Tipo_resultado', 67, 'add_tipo_resultado'),
(266, 'Can change Tipo_resultado', 67, 'change_tipo_resultado'),
(267, 'Can delete Tipo_resultado', 67, 'delete_tipo_resultado'),
(268, 'Can view Tipo_resultado', 67, 'view_tipo_resultado'),
(269, 'Can add Tema', 68, 'add_tema'),
(270, 'Can change Tema', 68, 'change_tema'),
(271, 'Can delete Tema', 68, 'delete_tema'),
(272, 'Can view Tema', 68, 'view_tema'),
(273, 'Can add Encuesta', 69, 'add_encuesta'),
(274, 'Can change Encuesta', 69, 'change_encuesta'),
(275, 'Can delete Encuesta', 69, 'delete_encuesta'),
(276, 'Can view Encuesta', 69, 'view_encuesta'),
(277, 'Can add Citacion', 70, 'add_citacion'),
(278, 'Can change Citacion', 70, 'change_citacion'),
(279, 'Can delete Citacion', 70, 'delete_citacion'),
(280, 'Can view Citacion', 70, 'view_citacion'),
(281, 'Can add Solicitante_servicio', 71, 'add_solicitante_servicio'),
(282, 'Can change Solicitante_servicio', 71, 'change_solicitante_servicio'),
(283, 'Can delete Solicitante_servicio', 71, 'delete_solicitante_servicio'),
(284, 'Can view Solicitante_servicio', 71, 'view_solicitante_servicio'),
(285, 'Can add Turno', 72, 'add_turno'),
(286, 'Can change Turno', 72, 'change_turno'),
(287, 'Can delete Turno', 72, 'delete_turno'),
(288, 'Can view Turno', 72, 'view_turno'),
(289, 'Can add Estado_civil', 73, 'add_estado_civil'),
(290, 'Can change Estado_civil', 73, 'change_estado_civil'),
(291, 'Can delete Estado_civil', 73, 'delete_estado_civil'),
(292, 'Can view Estado_civil', 73, 'view_estado_civil'),
(293, 'Can add Resultado', 74, 'add_resultado'),
(294, 'Can change Resultado', 74, 'change_resultado'),
(295, 'Can delete Resultado', 74, 'delete_resultado'),
(296, 'Can view Resultado', 74, 'view_resultado'),
(297, 'Can add Ciudad', 75, 'add_ciudad'),
(298, 'Can change Ciudad', 75, 'change_ciudad'),
(299, 'Can delete Ciudad', 75, 'delete_ciudad'),
(300, 'Can view Ciudad', 75, 'view_ciudad'),
(301, 'Can add Tipo_vivienda', 76, 'add_tipo_vivienda'),
(302, 'Can change Tipo_vivienda', 76, 'change_tipo_vivienda'),
(303, 'Can delete Tipo_vivienda', 76, 'delete_tipo_vivienda'),
(304, 'Can view Tipo_vivienda', 76, 'view_tipo_vivienda'),
(305, 'Can add Pregunta_seguimiento', 77, 'add_pregunta_seguimiento'),
(306, 'Can change Pregunta_seguimiento', 77, 'change_pregunta_seguimiento'),
(307, 'Can delete Pregunta_seguimiento', 77, 'delete_pregunta_seguimiento'),
(308, 'Can view Pregunta_seguimiento', 77, 'view_pregunta_seguimiento'),
(309, 'Can add Tipo_persona', 78, 'add_tipo_persona'),
(310, 'Can change Tipo_persona', 78, 'change_tipo_persona'),
(311, 'Can delete Tipo_persona', 78, 'delete_tipo_persona'),
(312, 'Can view Tipo_persona', 78, 'view_tipo_persona'),
(313, 'Can add Expediente', 79, 'add_expediente'),
(314, 'Can change Expediente', 79, 'change_expediente'),
(315, 'Can delete Expediente', 79, 'delete_expediente'),
(316, 'Can view Expediente', 79, 'view_expediente'),
(317, 'Can add Tipo_cliente', 80, 'add_tipo_cliente'),
(318, 'Can change Tipo_cliente', 80, 'change_tipo_cliente'),
(319, 'Can delete Tipo_cliente', 80, 'delete_tipo_cliente'),
(320, 'Can view Tipo_cliente', 80, 'view_tipo_cliente'),
(321, 'Can add Pregunta_encuesta', 81, 'add_pregunta_encuesta'),
(322, 'Can change Pregunta_encuesta', 81, 'change_pregunta_encuesta'),
(323, 'Can delete Pregunta_encuesta', 81, 'delete_pregunta_encuesta'),
(324, 'Can view Pregunta_encuesta', 81, 'view_pregunta_encuesta'),
(325, 'Can add Sexo', 82, 'add_sexo'),
(326, 'Can change Sexo', 82, 'change_sexo'),
(327, 'Can delete Sexo', 82, 'delete_sexo'),
(328, 'Can view Sexo', 82, 'view_sexo'),
(329, 'Can add Relacion_persona_expediente', 83, 'add_relacion_persona_expediente'),
(330, 'Can change Relacion_persona_expediente', 83, 'change_relacion_persona_expediente'),
(331, 'Can delete Relacion_persona_expediente', 83, 'delete_relacion_persona_expediente'),
(332, 'Can view Relacion_persona_expediente', 83, 'view_relacion_persona_expediente'),
(333, 'Can add Apoderado', 84, 'add_apoderado'),
(334, 'Can change Apoderado', 84, 'change_apoderado'),
(335, 'Can delete Apoderado', 84, 'delete_apoderado'),
(336, 'Can view Apoderado', 84, 'view_apoderado'),
(337, 'Can add Medio_conocimiento', 85, 'add_medio_conocimiento'),
(338, 'Can change Medio_conocimiento', 85, 'change_medio_conocimiento'),
(339, 'Can delete Medio_conocimiento', 85, 'delete_medio_conocimiento'),
(340, 'Can view Medio_conocimiento', 85, 'view_medio_conocimiento'),
(341, 'Can add Estado', 86, 'add_estado_expediente'),
(342, 'Can change Estado', 86, 'change_estado_expediente'),
(343, 'Can delete Estado', 86, 'delete_estado_expediente'),
(344, 'Can view Estado', 86, 'view_estado_expediente'),
(345, 'Can add finalidad_servicio', 87, 'add_finalidad_servicio'),
(346, 'Can change finalidad_servicio', 87, 'change_finalidad_servicio'),
(347, 'Can delete finalidad_servicio', 87, 'delete_finalidad_servicio'),
(348, 'Can view finalidad_servicio', 87, 'view_finalidad_servicio');

INSERT INTO "public"."auth_user" ("id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined") VALUES
(2, 'pbkdf2_sha256$390000$Nym3aBADqiZyUheif8PPgK$kFeysEXoDQEcLf0d0BrhHCMV42odp0dNM5cJeSX/W5Y=', NULL, 't', '1013689035', '', '', '', 'f', 't', '2023-01-30 15:03:02+00');
INSERT INTO "public"."auth_user" ("id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined") VALUES
(1, 'pbkdf2_sha256$390000$c2sDn8BknFP4PIk5iYgpRO$wVxwgYxHBkQLWfwaI8IA4FzGDA5PiWtSjLbl1GQUX88=', '2023-02-01 15:39:26.196636+00', 't', 'admin', '', '', '', 't', 't', '2023-01-30 14:29:34.287632+00');
INSERT INTO "public"."auth_user" ("id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined") VALUES
(7, 'pbkdf2_sha256$390000$KcmE0ccaZXUHPhaksyoUO3$PcB5NpK/YmrQIVscdq0EUcebiqKKZh1m134Dw9Pap9k=', NULL, 'f', '1010074595', '', '', '', 'f', 't', '2023-02-01 15:51:58.528526+00');
INSERT INTO "public"."auth_user" ("id", "password", "last_login", "is_superuser", "username", "first_name", "last_name", "email", "is_staff", "is_active", "date_joined") VALUES
(9, 'pbkdf2_sha256$390000$j3233jv7G84jlEse0MRIIY$vNeyU3u0SOqkbwzRr9n8SNUN+xjOf9QV149k7us6xq8=', NULL, 'f', '1033816974', '', '', '', 'f', 't', '2023-02-01 18:46:33.539799+00'),
(8, 'pbkdf2_sha256$390000$xtAXjaHAeKUQBkf8Nl5Xod$HdIUfT81PFBn9oVKPZagzzQBHyFYTi+jl/v5YMB293c=', NULL, 'f', '222222', '', '', '', 'f', 't', '2023-02-01 16:17:07.611153+00'),
(10, 'pbkdf2_sha256$390000$KX9ZtxEZgyU2K5VK2FFVcW$SP3AHUu522uHME+d435np8TyN7B4YKD7Z+je0v2JRBI=', NULL, 't', 'prueba', '', '', '', 't', 't', '2023-02-06 16:25:27.131643+00'),
(11, 'pbkdf2_sha256$390000$oo7Gge8DGL4hXdBW7buYke$hgvWBQnOd9LerTmp2id8qQoEpbqjlUCZBS3kPlMxpc4=', NULL, 'f', '1033704857', '', '', '', 'f', 't', '2023-02-06 18:31:18.985132+00'),
(6, 'pbkdf2_sha256$390000$HQtoUr0foPFbOCDDsvsokt$9mlxb1EzOgcWka8ky1oXXv21AVJPec89Cz00+MomFio=', NULL, 'f', '1000465392', '', '', '', 'f', 't', '2023-02-01 15:50:53.244339+00');

INSERT INTO "public"."auth_user_groups" ("id", "user_id", "group_id") VALUES
(2, 2, 1);
INSERT INTO "public"."auth_user_groups" ("id", "user_id", "group_id") VALUES
(7, 6, 1);
INSERT INTO "public"."auth_user_groups" ("id", "user_id", "group_id") VALUES
(8, 7, 1);
INSERT INTO "public"."auth_user_groups" ("id", "user_id", "group_id") VALUES
(10, 9, 1),
(12, 8, 3),
(13, 11, 2);



INSERT INTO "public"."Barrio" ("id", "estado", "nombre", "localidad_id_id") VALUES
(1, 't', 'Paseo de los Libertadores', 1);
INSERT INTO "public"."Barrio" ("id", "estado", "nombre", "localidad_id_id") VALUES
(2, 't', 'Verbenal', 1);
INSERT INTO "public"."Barrio" ("id", "estado", "nombre", "localidad_id_id") VALUES
(3, 't', 'La Uribe', 1);
INSERT INTO "public"."Barrio" ("id", "estado", "nombre", "localidad_id_id") VALUES
(4, 't', 'San Cristóbal Norte', 1),
(5, 't', 'Toberín', 1),
(6, 't', 'Los Cedros', 1),
(7, 't', 'Usaquén', 1),
(8, 't', 'Country Club', 1),
(9, 't', 'Santa Bárbara', 1),
(10, 't', 'El Refugio', 2),
(11, 't', 'San Isidro-Patios', 2),
(12, 't', 'Pardo Rubio', 2),
(13, 't', 'Chicó Lago', 2),
(14, 't', 'Chapinero', 2),
(15, 't', 'Sagrado Corazón', 3),
(16, 't', 'La Macarena', 3),
(17, 't', 'Las Nieves', 3),
(18, 't', 'Las Cruces', 3),
(19, 't', 'Lourdes', 3),
(20, 't', 'San Blas', 4),
(21, 't', 'Sociego', 4),
(22, 't', '20 de Julio', 4),
(23, 't', 'La Gloria', 4),
(24, 't', 'Los Libertadores', 4),
(25, 't', 'La Flora', 5),
(26, 't', 'Danubio', 5),
(27, 't', 'Gran Yomasa', 5),
(28, 't', 'Comuneros', 5),
(29, 't', 'Alfonso López', 5),
(30, 't', 'Parque Entrenubes', 5),
(31, 't', 'Ciudad Usme', 5),
(32, 't', 'Venecia', 6),
(33, 't', 'Tunjuelito', 6),
(34, 't', 'Apogeo', 7),
(35, 't', 'Bosa Occidental', 7),
(36, 't', 'Bosa Central', 7),
(37, 't', 'El Porvenir', 7),
(38, 't', 'Tintal Sur', 7),
(39, 't', 'Castilla', 8),
(40, 't', 'Américas', 8),
(41, 't', 'Carvajal', 8),
(42, 't', 'Kennedy Central', 8),
(43, 't', 'Timiza', 8),
(44, 't', 'Tintal Norte', 8),
(45, 't', 'Calandaima', 8),
(46, 't', 'Corabastos', 8),
(47, 't', 'Gran Britalia', 8),
(48, 't', 'Patio Bonito', 8),
(49, 't', 'Las Margaritas', 8),
(50, 't', 'Bavaria', 8),
(51, 't', 'Fontibón', 9),
(52, 't', 'Fontibón-San Pablo', 9),
(53, 't', 'Zona Franca', 9),
(54, 't', 'Ciudad Salitre Occidente', 9),
(55, 't', 'Granjas de Techo', 9),
(56, 't', 'Modelia', 9),
(57, 't', 'Capellanía', 9),
(58, 't', 'Aeropuerto Eldorado', 9),
(59, 't', 'Las Ferias', 10),
(60, 't', 'Minuto de Dios', 10),
(61, 't', 'Boyacá Real', 10),
(62, 't', 'Santa Cecilia', 10),
(63, 't', 'Bolivia', 10),
(64, 't', 'Garcés Navas', 10),
(65, 't', 'Engativá', 10),
(66, 't', 'Jardín Botánico', 10),
(67, 't', 'Álamos', 10),
(68, 't', 'La Academia', 11),
(69, 't', 'Guaymaral', 11),
(70, 't', 'San José de Bavaria', 11),
(71, 't', 'Britalia', 11),
(72, 't', 'El Prado', 11),
(73, 't', 'La Alhambra', 11),
(74, 't', 'Casablanca Suba', 11),
(75, 't', 'Niza', 11),
(76, 't', 'La Floresta', 11),
(77, 't', 'Suba', 11),
(78, 't', 'El Rincón', 11),
(79, 't', 'Tibabuyes', 11),
(80, 't', 'Los Andes', 12),
(81, 't', '12 de Octubre', 12),
(82, 't', 'Los Alcázares', 12),
(83, 't', 'Parque Salitre', 12),
(84, 't', 'Galerías', 13),
(85, 't', 'Teusaquillo', 13),
(86, 't', 'Parque Simón Bolívar', 13),
(87, 't', 'La Esmeralda', 13),
(88, 't', 'Quinta Paredes', 13),
(89, 't', 'Ciudad Salitre Oriental', 13),
(90, 't', 'Santa Isabel', 14),
(91, 't', 'La Sabana', 14),
(92, 't', 'Ciudad Jardín', 15),
(93, 't', 'Restrepo', 15),
(94, 't', 'Ciudad Montes', 16),
(95, 't', 'Muzú', 16),
(96, 't', 'San Rafael', 16),
(97, 't', 'Zona Industrial', 16),
(98, 't', 'Puente Aranda', 16),
(99, 't', 'La Candelaria', 17),
(100, 't', 'San José', 18),
(101, 't', 'Quiroga', 18),
(102, 't', 'Marco Fidel Suárez', 18),
(103, 't', 'Marruecos', 18),
(104, 't', 'Diana Turbay', 18),
(105, 't', 'El Mochuelo', 19),
(106, 't', 'Monteblanco', 19),
(107, 't', 'Arborizadora', 19),
(108, 't', 'San Francisco', 19),
(109, 't', 'Lucero', 19),
(110, 't', 'El Tesoro', 19),
(111, 't', 'Ismael Perdomo', 19),
(112, 't', 'Jerusalén', 19),
(113, 't', 'Nazareth', 20),
(114, 't', 'Los Ríos', 20),
(115, 't', 'Las Auras', 20),
(116, 't', 'Las Palmas', 20),
(117, 't', 'Las Sopas', 20),
(118, 't', 'Taquecitos', 20),
(119, 't', 'Las Animas', 20),
(120, 't', 'Santa Rosa', 20),
(121, 't', 'Betania', 20),
(122, 't', 'Istmo', 20),
(123, 't', 'Tabaco', 20),
(124, 't', 'Raizal', 20),
(125, 't', 'Peñaliza', 20),
(126, 't', 'Laguna Verde', 20),
(127, 't', 'San Juan de Sumapaz', 20),
(128, 't', 'La Unión', 20),
(129, 't', 'Chorreras', 20),
(130, 't', 'Tunal Alto', 20),
(131, 't', 'Tunal Bajo', 20),
(132, 't', 'San Antonio', 20),
(133, 't', 'Las Vegas', 20),
(134, 't', 'Capitolio', 20),
(135, 't', 'San José', 20),
(136, 't', 'Concepción', 20),
(137, 't', 'El toldo', 20),
(138, 't', 'Santo Domingo', 20);

INSERT INTO "public"."Categoria_resultado" ("id", "estado", "nombre", "consecutivo_actual") VALUES
(3, 't', 'Otros', 303);
INSERT INTO "public"."Categoria_resultado" ("id", "estado", "nombre", "consecutivo_actual") VALUES
(2, 't', 'Constancias', 2406);
INSERT INTO "public"."Categoria_resultado" ("id", "estado", "nombre", "consecutivo_actual") VALUES
(1, 't', 'Actas', 2082);



INSERT INTO "public"."Citacion" ("id", "estado", "enlace", "descripcion", "fecha_sesion", "expediente_id_id", "tipo_medio_id_id", "turno_id_id") VALUES
(16, 't', '', 'en nuestras instalaciones ubicadas en la Calle 12 Nº 8 -37/51 de esta ciudad, tel: 3212179704 o en el correo ccjoseignaciotalerolosada@ugc.edu.co.', '2023-02-08', 23, 1, 7);


INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(427, 't', 'Medellin', 1);
INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(428, 't', 'Abejorral', 1);
INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(429, 't', 'Abriaqui', 1);
INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(430, 't', 'Alejandria', 1),
(431, 't', 'Amaga', 1),
(432, 't', 'Amalfi', 1),
(433, 't', 'Andes', 1),
(434, 't', 'Angelopolis', 1),
(435, 't', 'Angostura', 1),
(436, 't', 'Anori', 1),
(437, 't', 'Antioquia', 1),
(438, 't', 'Anza', 1),
(439, 't', 'Apartado', 1),
(440, 't', 'Arboletes', 1),
(441, 't', 'Argelia', 1),
(442, 't', 'Armenia', 1),
(443, 't', 'Barbosa', 1),
(444, 't', 'Belmira', 1),
(445, 't', 'Bello', 1),
(446, 't', 'Betania', 1),
(447, 't', 'Betulia', 1),
(448, 't', 'Bolivar', 1),
(449, 't', 'Briceño', 1),
(450, 't', 'Buritica', 1),
(451, 't', 'Caceres', 1),
(452, 't', 'Caicedo', 1),
(453, 't', 'Caldas', 1),
(454, 't', 'Campamento', 1),
(455, 't', 'Cañasgordas', 1),
(456, 't', 'Caracoli', 1),
(457, 't', 'Caramanta', 1),
(458, 't', 'Carepa', 1),
(459, 't', 'Carmen De Viboral', 1),
(460, 't', 'Carolina', 1),
(461, 't', 'Caucasia', 1),
(462, 't', 'Chigorodo', 1),
(463, 't', 'Cisneros', 1),
(464, 't', 'Cocorna', 1),
(465, 't', 'Concepcion', 1),
(466, 't', 'Concordia', 1),
(467, 't', 'Copacabana', 1),
(468, 't', 'Dabeiba', 1),
(469, 't', 'Don Matias', 1),
(470, 't', 'Ebejico', 1),
(471, 't', 'El Bagre', 1),
(472, 't', 'Entrerrios', 1),
(473, 't', 'Envigado', 1),
(474, 't', 'Fredonia', 1),
(475, 't', 'Frontino', 1),
(476, 't', 'Giraldo', 1),
(477, 't', 'Girardota', 1),
(478, 't', 'Gomez Plata', 1),
(479, 't', 'Granada', 1),
(480, 't', 'Guadalupe', 1),
(481, 't', 'Guarne', 1),
(482, 't', 'Guatape', 1),
(483, 't', 'Heliconia', 1),
(484, 't', 'Hispania', 1),
(485, 't', 'Itagui', 1),
(486, 't', 'Ituango', 1),
(487, 't', 'Jardin', 1),
(488, 't', 'Jerico', 1),
(489, 't', 'La Ceja', 1),
(490, 't', 'La Estrella', 1),
(491, 't', 'La Pintada', 1),
(492, 't', 'La Union', 1),
(493, 't', 'Liborina', 1),
(494, 't', 'Maceo', 1),
(495, 't', 'Marinilla', 1),
(496, 't', 'Montebello', 1),
(497, 't', 'Murindo', 1),
(498, 't', 'Mutata', 1),
(499, 't', 'Nariño', 1),
(500, 't', 'Necocli', 1),
(501, 't', 'Nechi', 1),
(502, 't', 'Olaya', 1),
(503, 't', 'Peñol', 1),
(504, 't', 'Peque', 1),
(505, 't', 'Pueblorrico', 1),
(506, 't', 'Puerto Berrio', 1),
(507, 't', 'Puerto Nare ', 1),
(508, 't', 'Puerto Triunfo', 1),
(509, 't', 'Remedios', 1),
(510, 't', 'Retiro', 1),
(511, 't', 'Rionegro', 1),
(512, 't', 'Sabanalarga', 1),
(513, 't', 'Sabaneta', 1),
(514, 't', 'Salgar', 1),
(515, 't', 'San Andres', 1),
(516, 't', 'San Carlos', 1),
(517, 't', 'San Francisco', 1),
(518, 't', 'San Jeronimo', 1),
(519, 't', 'San Jose De La Montaña', 1),
(520, 't', 'San Juan De Uraba', 1),
(521, 't', 'San Luis', 1),
(522, 't', 'San Pedro', 1),
(523, 't', 'San Pedro De Uraba', 1),
(524, 't', 'San Rafael', 1),
(525, 't', 'San Roque', 1),
(526, 't', 'San Vicente', 1),
(527, 't', 'Santa Barbara', 1),
(528, 't', 'Santa Rosa De Osos', 1),
(529, 't', 'Santo Domingo', 1),
(530, 't', 'Santuario', 1),
(531, 't', 'Segovia', 1),
(532, 't', 'Sonson', 1),
(533, 't', 'Sopetran', 1),
(534, 't', 'Tamesis', 1),
(535, 't', 'Taraza', 1),
(536, 't', 'Tarso', 1),
(537, 't', 'Titiribi', 1),
(538, 't', 'Toledo', 1),
(539, 't', 'Turbo', 1),
(540, 't', 'Uramita', 1),
(541, 't', 'Urrao', 1),
(542, 't', 'Valdivia', 1),
(543, 't', 'Valparaiso', 1),
(544, 't', 'Vegachi', 1),
(545, 't', 'Venecia', 1),
(546, 't', 'Vigia Del Fuerte', 1),
(547, 't', 'Yali', 1),
(548, 't', 'Yarumal', 1),
(549, 't', 'Yolombo', 1),
(550, 't', 'Yondo', 1),
(551, 't', 'Zaragoza', 1),
(552, 't', 'Barranquilla ', 2),
(553, 't', 'Baranoa', 2),
(554, 't', 'Campo De La Cruz', 2),
(555, 't', 'Candelaria', 2),
(556, 't', 'Galapa', 2),
(557, 't', 'Juan De Acosta', 2),
(558, 't', 'Luruaco', 2),
(559, 't', 'Malambo', 2),
(560, 't', 'Manati', 2);
INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(561, 't', 'Palmar De Varela', 2),
(562, 't', 'Piojo', 2),
(563, 't', 'Polo Nuevo', 2),
(564, 't', 'Ponedera', 2),
(565, 't', 'Puerto Colombia', 2),
(566, 't', 'Repelon', 2),
(567, 't', 'Sabanagrande', 2),
(568, 't', 'Sabanalarga', 2),
(569, 't', 'Santa Lucia', 2),
(570, 't', 'Santo Tomas', 2),
(571, 't', 'Soledad', 2),
(572, 't', 'Suan', 2),
(573, 't', 'Tubara', 2),
(574, 't', 'Usiacuri', 2),
(575, 't', 'Bogota D.C', 3),
(576, 't', 'Cartagena ', 4),
(577, 't', 'Achi', 4),
(578, 't', 'Altos Del Rosario', 4),
(579, 't', 'Arenal', 4),
(580, 't', 'Arjona', 4),
(581, 't', 'Arroyohondo', 4),
(582, 't', 'Barranco De Loba', 4),
(583, 't', 'Calamar', 4),
(584, 't', 'Cantagallo', 4),
(585, 't', 'Cicuco', 4),
(586, 't', 'Cordoba', 4),
(587, 't', 'Clemencia', 4),
(588, 't', 'El Carmen De Bolivar', 4),
(589, 't', 'El Guamo', 4),
(590, 't', 'El Peñon', 4),
(591, 't', 'Hatillo De Loba', 4),
(592, 't', 'Magangue', 4),
(593, 't', 'Mahates', 4),
(594, 't', 'Margarita', 4),
(595, 't', 'Maria La Baja', 4),
(596, 't', 'Montecristo', 4),
(597, 't', 'Mompos', 4),
(598, 't', 'Morales', 4),
(599, 't', 'Pinillos', 4),
(600, 't', 'Regidor', 4),
(601, 't', 'Rio Viejo', 4),
(602, 't', 'San Cristobal', 4),
(603, 't', 'San Estanislao', 4),
(604, 't', 'San Fernando', 4),
(605, 't', 'San Jacinto', 4),
(606, 't', 'San Jacinto Del Cauca', 4),
(607, 't', 'San Juan Nepomuceno', 4),
(608, 't', 'San Martin De Loba', 4),
(609, 't', 'San Pablo', 4),
(610, 't', 'Santa Catalina', 4),
(611, 't', 'Santa Rosa', 4),
(612, 't', 'Santa Rosa Del Sur', 4),
(613, 't', 'Simiti', 4),
(614, 't', 'Soplaviento', 4),
(615, 't', 'Talaigua Nuevo', 4),
(616, 't', 'Tiquisio ', 4),
(617, 't', 'Turbaco', 4),
(618, 't', 'Turbana', 4),
(619, 't', 'Villanueva', 4),
(620, 't', 'Zambrano', 4),
(621, 't', 'Tunja', 5),
(622, 't', 'Almeida', 5),
(623, 't', 'Aquitania', 5),
(624, 't', 'Arcabuco', 5),
(625, 't', 'Belen', 5),
(626, 't', 'Berbeo', 5),
(627, 't', 'Beteitiva', 5),
(628, 't', 'Boavita', 5),
(629, 't', 'Boyaca', 5),
(630, 't', 'Briceño', 5),
(631, 't', 'Buenavista', 5),
(632, 't', 'Busbanza', 5),
(633, 't', 'Caldas', 5),
(634, 't', 'Campohermoso', 5),
(635, 't', 'Cerinza', 5),
(636, 't', 'Chinavita', 5),
(637, 't', 'Chiquinquira', 5),
(638, 't', 'Chiscas', 5),
(639, 't', 'Chita', 5),
(640, 't', 'Chitaraque', 5),
(641, 't', 'Chivata', 5),
(642, 't', 'Cienega', 5),
(643, 't', 'Combita', 5),
(644, 't', 'Coper', 5),
(645, 't', 'Corrales', 5),
(646, 't', 'Covarachia', 5),
(647, 't', 'Cubara', 5),
(648, 't', 'Cucaita', 5),
(649, 't', 'Cuitiva', 5),
(650, 't', 'Chiquiza', 5),
(651, 't', 'Chivor', 5),
(652, 't', 'Duitama', 5),
(653, 't', 'El Cocuy', 5),
(654, 't', 'El Espino', 5),
(655, 't', 'Firavitoba', 5),
(656, 't', 'Floresta', 5),
(657, 't', 'Gachantiva', 5),
(658, 't', 'Gameza', 5),
(659, 't', 'Garagoa', 5),
(660, 't', 'Guacamayas', 5),
(661, 't', 'Guateque', 5),
(662, 't', 'Guayata', 5),
(663, 't', 'Guican', 5),
(664, 't', 'Iza', 5),
(665, 't', 'Jenesano', 5),
(666, 't', 'Jerico', 5),
(667, 't', 'Labranzagrande', 5),
(668, 't', 'La Capilla', 5),
(669, 't', 'La Victoria', 5),
(670, 't', 'La Uvita', 5),
(671, 't', 'Villa De Leiva', 5),
(672, 't', 'Macanal', 5),
(673, 't', 'Maripi', 5),
(674, 't', 'Miraflores', 5),
(675, 't', 'Mongua', 5),
(676, 't', 'Mongui', 5),
(677, 't', 'Moniquira', 5),
(678, 't', 'Motavita', 5),
(679, 't', 'Muzo', 5),
(680, 't', 'Nobsa', 5),
(681, 't', 'Nuevo Colon', 5),
(682, 't', 'Oicata', 5),
(683, 't', 'Otanche', 5),
(684, 't', 'Pachavita', 5),
(685, 't', 'Paez', 5),
(686, 't', 'Paipa', 5),
(687, 't', 'Pajarito', 5),
(688, 't', 'Panqueba', 5),
(689, 't', 'Pauna', 5),
(690, 't', 'Paya', 5),
(691, 't', 'Paz Del Rio', 5),
(692, 't', 'Pesca', 5),
(693, 't', 'Pisba', 5),
(694, 't', 'Puerto Boyaca', 5),
(695, 't', 'Quipama', 5),
(696, 't', 'Ramiriqui', 5),
(697, 't', 'Raquira', 5),
(698, 't', 'Rondon', 5),
(699, 't', 'Saboya', 5),
(700, 't', 'Sachica', 5),
(701, 't', 'Samaca', 5),
(702, 't', 'San Eduardo', 5),
(703, 't', 'San Jose De Pare', 5),
(704, 't', 'San Luis De Gaceno', 5),
(705, 't', 'San Mateo', 5),
(706, 't', 'San Miguel De Sema', 5),
(707, 't', 'San Pablo De Borbur', 5),
(708, 't', 'Santana', 5),
(709, 't', 'Santa Maria', 5),
(710, 't', 'Santa Rosa De Viterbo', 5),
(711, 't', 'Santa Sofia', 5),
(712, 't', 'Sativanorte', 5),
(713, 't', 'Sativasur', 5),
(714, 't', 'Siachoque', 5),
(715, 't', 'Soata', 5),
(716, 't', 'Socota', 5),
(717, 't', 'Socha', 5),
(718, 't', 'Sogamoso', 5),
(719, 't', 'Somondoco', 5),
(720, 't', 'Sora', 5),
(721, 't', 'Sotaquira', 5),
(722, 't', 'Soraca', 5),
(723, 't', 'Susacon', 5),
(724, 't', 'Sutamarchan', 5),
(725, 't', 'Sutatenza', 5),
(726, 't', 'Tasco', 5),
(727, 't', 'Tenza', 5),
(728, 't', 'Tibana', 5),
(729, 't', 'Tibasosa', 5),
(730, 't', 'Tinjaca', 5),
(731, 't', 'Tipacoque', 5),
(732, 't', 'Toca', 5),
(733, 't', 'Togui', 5),
(734, 't', 'Topaga', 5),
(735, 't', 'Tota', 5),
(736, 't', 'Tunungua', 5),
(737, 't', 'Turmeque', 5),
(738, 't', 'Tuta', 5),
(739, 't', 'Tutasa', 5),
(740, 't', 'Umbita', 5),
(741, 't', 'Ventaquemada', 5),
(742, 't', 'Viracacha', 5),
(743, 't', 'Zetaquira', 5),
(744, 't', 'Manizales', 6),
(745, 't', 'Aguadas', 6),
(746, 't', 'Anserma', 6),
(747, 't', 'Aranzazu', 6),
(748, 't', 'Belalcazar', 6),
(749, 't', 'Chinchina', 6),
(750, 't', 'Filadelfia', 6),
(751, 't', 'La Dorada', 6),
(752, 't', 'La Merced', 6),
(753, 't', 'Manzanares', 6),
(754, 't', 'Marmato', 6),
(755, 't', 'Marquetalia', 6),
(756, 't', 'Marulanda', 6),
(757, 't', 'Neira', 6),
(758, 't', 'Norcasia', 6),
(759, 't', 'Pacora', 6),
(760, 't', 'Palestina', 6),
(761, 't', 'Pensilvania', 6),
(762, 't', 'Riosucio', 6),
(763, 't', 'Risaralda', 6),
(764, 't', 'Salamina', 6),
(765, 't', 'Samana', 6),
(766, 't', 'San Jose', 6),
(767, 't', 'Supia', 6),
(768, 't', 'Victoria', 6),
(769, 't', 'Villamaria', 6),
(770, 't', 'Viterbo', 6),
(771, 't', 'Florencia', 7),
(772, 't', 'Albania', 7),
(773, 't', 'Belen De Los Andaquies', 7),
(774, 't', 'Cartagena Del Chaira', 7),
(775, 't', 'Curillo', 7),
(776, 't', 'El Doncello', 7),
(777, 't', 'El Paujil', 7),
(778, 't', 'La Montañita', 7),
(779, 't', 'Milan', 7),
(780, 't', 'Morelia', 7),
(781, 't', 'Puerto Rico', 7),
(782, 't', 'San Jose De Fragua', 7),
(783, 't', 'San Vicente Del Caguan', 7),
(784, 't', 'Solano', 7),
(785, 't', 'Solita', 7),
(786, 't', 'Valparaiso', 7),
(787, 't', 'Popayan', 8),
(788, 't', 'Almaguer', 8),
(789, 't', 'Argelia', 8),
(790, 't', 'Balboa', 8),
(791, 't', 'Bolivar', 8),
(792, 't', 'Buenos Aires', 8),
(793, 't', 'Cajibio', 8),
(794, 't', 'Caldono', 8),
(795, 't', 'Caloto', 8),
(796, 't', 'Corinto', 8),
(797, 't', 'El Tambo', 8),
(798, 't', 'Florencia', 8),
(799, 't', 'Guapi', 8),
(800, 't', 'Inza', 8),
(801, 't', 'Jambalo', 8),
(802, 't', 'La Sierra', 8),
(803, 't', 'La Vega', 8),
(804, 't', 'Lopez ', 8),
(805, 't', 'Mercaderes', 8),
(806, 't', 'Miranda', 8),
(807, 't', 'Morales', 8),
(808, 't', 'Padilla', 8),
(809, 't', 'Paez ', 8),
(810, 't', 'Patia ', 8),
(811, 't', 'Piamonte', 8),
(812, 't', 'Piendamo', 8),
(813, 't', 'Puerto Tejada', 8),
(814, 't', 'Purace ', 8),
(815, 't', 'Rosas', 8),
(816, 't', 'San Sebastian', 8),
(817, 't', 'Santander De Quilichao', 8),
(818, 't', 'Santa Rosa', 8),
(819, 't', 'Silvia', 8),
(820, 't', 'Sotara ', 8),
(821, 't', 'Suarez', 8),
(822, 't', 'Timbio', 8),
(823, 't', 'Timbiqui', 8),
(824, 't', 'Toribio', 8),
(825, 't', 'Totoro', 8),
(826, 't', 'Villarica', 8),
(827, 't', 'Valledupar', 9),
(828, 't', 'Aguachica', 9),
(829, 't', 'Agustin Codazzi', 9),
(830, 't', 'Astrea', 9),
(831, 't', 'Becerril', 9),
(832, 't', 'Bosconia', 9),
(833, 't', 'Chimichagua', 9),
(834, 't', 'Chiriguana', 9),
(835, 't', 'Curumani', 9),
(836, 't', 'El Copey', 9),
(837, 't', 'El Paso', 9),
(838, 't', 'Gamarra', 9),
(839, 't', 'Gonzalez', 9),
(840, 't', 'La Gloria', 9),
(841, 't', 'La Jagua Ibirico', 9),
(842, 't', 'Manaure ', 9),
(843, 't', 'Pailitas', 9),
(844, 't', 'Pelaya', 9),
(845, 't', 'Pueblo Bello', 9),
(846, 't', 'Rio De Oro', 9),
(847, 't', 'La Paz ', 9),
(848, 't', 'San Alberto', 9),
(849, 't', 'San Diego', 9),
(850, 't', 'San Martin', 9),
(851, 't', 'Tamalameque', 9),
(852, 't', 'Monteria', 10),
(853, 't', 'Ayapel', 10),
(854, 't', 'Buenavista', 10),
(855, 't', 'Canalete', 10),
(856, 't', 'Cerete', 10),
(857, 't', 'Chima', 10),
(858, 't', 'Chinu', 10),
(859, 't', 'Cienaga De Oro', 10),
(860, 't', 'Cotorra', 10),
(861, 't', 'La Apartada', 10),
(862, 't', 'Lorica', 10),
(863, 't', 'Los Cordobas', 10),
(864, 't', 'Momil', 10),
(865, 't', 'Montelibano', 10),
(866, 't', 'Moñitos', 10),
(867, 't', 'Planeta Rica', 10),
(868, 't', 'Pueblo Nuevo', 10),
(869, 't', 'Puerto Escondido', 10),
(870, 't', 'Puerto Libertador', 10),
(871, 't', 'Purisima', 10),
(872, 't', 'Sahagun', 10),
(873, 't', 'San Andres Sotavento', 10),
(874, 't', 'San Antero', 10),
(875, 't', 'San Bernardo Del Viento', 10),
(876, 't', 'San Carlos', 10),
(877, 't', 'San Pelayo', 10),
(878, 't', 'Tierralta', 10),
(879, 't', 'Valencia', 10),
(880, 't', 'Agua De Dios', 11),
(881, 't', 'Alban', 11),
(882, 't', 'Anapoima', 11),
(883, 't', 'Anolaima', 11),
(884, 't', 'Arbelaez', 11),
(885, 't', 'Beltran', 11),
(886, 't', 'Bituima', 11),
(887, 't', 'Bojaca', 11),
(888, 't', 'Cabrera', 11),
(889, 't', 'Cachipay', 11),
(890, 't', 'Cajica', 11),
(891, 't', 'Caparrapi', 11),
(892, 't', 'Caqueza', 11),
(893, 't', 'Carmen De Carupa', 11),
(894, 't', 'Chaguani', 11),
(895, 't', 'Chia', 11),
(896, 't', 'Chipaque', 11),
(897, 't', 'Choachi', 11),
(898, 't', 'Choconta', 11),
(899, 't', 'Cogua', 11),
(900, 't', 'Cota', 11),
(901, 't', 'Cucunuba', 11),
(902, 't', 'El Colegio', 11),
(903, 't', 'El Peñon', 11),
(904, 't', 'El Rosal', 11),
(905, 't', 'Facatativa', 11),
(906, 't', 'Fomeque', 11),
(907, 't', 'Fosca', 11),
(908, 't', 'Funza', 11),
(909, 't', 'Fuquene', 11),
(910, 't', 'Fusagasuga', 11),
(911, 't', 'Gachala', 11),
(912, 't', 'Gachancipa', 11),
(913, 't', 'Gacheta', 11),
(914, 't', 'Gama', 11),
(915, 't', 'Girardot', 11),
(916, 't', 'Granada', 11),
(917, 't', 'Guacheta', 11),
(918, 't', 'Guaduas', 11),
(919, 't', 'Guasca', 11),
(920, 't', 'Guataqui', 11),
(921, 't', 'Guatavita', 11),
(922, 't', 'Guayabal De Siquima', 11),
(923, 't', 'Guayabetal', 11),
(924, 't', 'Gutierrez', 11),
(925, 't', 'Jerusalen', 11),
(926, 't', 'Junin', 11),
(927, 't', 'La Calera', 11),
(928, 't', 'La Mesa', 11),
(929, 't', 'La Palma', 11),
(930, 't', 'La Peña', 11),
(931, 't', 'La Vega', 11),
(932, 't', 'Lenguazaque', 11),
(933, 't', 'Macheta', 11),
(934, 't', 'Madrid', 11),
(935, 't', 'Manta', 11),
(936, 't', 'Medina', 11),
(937, 't', 'Mosquera', 11),
(938, 't', 'Nariño', 11),
(939, 't', 'Nemocon', 11),
(940, 't', 'Nilo', 11),
(941, 't', 'Nimaima', 11),
(942, 't', 'Nocaima', 11),
(943, 't', 'Venecia ', 11),
(944, 't', 'Pacho', 11),
(945, 't', 'Paime', 11),
(946, 't', 'Pandi', 11),
(947, 't', 'Paratebueno', 11),
(948, 't', 'Pasca', 11),
(949, 't', 'Puerto Salgar', 11),
(950, 't', 'Puli', 11),
(951, 't', 'Quebradanegra', 11),
(952, 't', 'Quetame', 11),
(953, 't', 'Quipile', 11),
(954, 't', 'Apulo ', 11),
(955, 't', 'Ricaurte', 11),
(956, 't', 'San Antonio Del Tequendama', 11),
(957, 't', 'San Bernardo', 11),
(958, 't', 'San Cayetano', 11),
(959, 't', 'San Francisco', 11),
(960, 't', 'San Juan De Rioseco', 11),
(961, 't', 'Sasaima', 11),
(962, 't', 'Sesquile', 11),
(963, 't', 'Sibate', 11),
(964, 't', 'Silvania', 11),
(965, 't', 'Simijaca', 11),
(966, 't', 'Soacha', 11),
(967, 't', 'Sopo', 11),
(968, 't', 'Subachoque', 11),
(969, 't', 'Suesca', 11),
(970, 't', 'Supata', 11),
(971, 't', 'Susa', 11),
(972, 't', 'Sutatausa', 11),
(973, 't', 'Tabio', 11),
(974, 't', 'Tausa', 11),
(975, 't', 'Tena', 11),
(976, 't', 'Tenjo', 11),
(977, 't', 'Tibacuy', 11),
(978, 't', 'Tibirita', 11),
(979, 't', 'Tocaima', 11),
(980, 't', 'Tocancipa', 11),
(981, 't', 'Topaipi', 11),
(982, 't', 'Ubala', 11),
(983, 't', 'Ubaque', 11),
(984, 't', 'Ubate', 11),
(985, 't', 'Une', 11),
(986, 't', 'Utica', 11),
(987, 't', 'Vergara', 11),
(988, 't', 'Viani', 11),
(989, 't', 'Villagomez', 11),
(990, 't', 'Villapinzon', 11),
(991, 't', 'Villeta', 11),
(992, 't', 'Viota', 11),
(993, 't', 'Yacopi', 11),
(994, 't', 'Zipacon', 11),
(995, 't', 'Zipaquira', 11),
(996, 't', 'Quibdo ', 12),
(997, 't', 'Acandi', 12),
(998, 't', 'Alto Baudo ', 12),
(999, 't', 'Atrato', 12),
(1000, 't', 'Bagado', 12),
(1001, 't', 'Bahia Solano ', 12),
(1002, 't', 'Bajo Baudo ', 12),
(1003, 't', 'Bojaya ', 12),
(1004, 't', 'Canton De San Pablo ', 12),
(1005, 't', 'Condoto', 12),
(1006, 't', 'El Carmen De Atrato', 12),
(1007, 't', 'Litoral Del Bajo San Juan ', 12),
(1008, 't', 'Istmina', 12),
(1009, 't', 'Jurado', 12),
(1010, 't', 'Lloro', 12),
(1011, 't', 'Medio Atrato', 12),
(1012, 't', 'Medio Baudo', 12),
(1013, 't', 'Novita', 12),
(1014, 't', 'Nuqui', 12),
(1015, 't', 'Rioquito', 12),
(1016, 't', 'Riosucio', 12),
(1017, 't', 'San Jose Del Palmar', 12),
(1018, 't', 'Sipi', 12),
(1019, 't', 'Tado', 12),
(1020, 't', 'Unguia', 12),
(1021, 't', 'Union Panamericana', 12),
(1022, 't', 'Neiva', 13),
(1023, 't', 'Acevedo', 13),
(1024, 't', 'Agrado', 13),
(1025, 't', 'Aipe', 13),
(1026, 't', 'Algeciras', 13),
(1027, 't', 'Altamira', 13),
(1028, 't', 'Baraya', 13),
(1029, 't', 'Campoalegre', 13),
(1030, 't', 'Colombia', 13),
(1031, 't', 'Elias', 13),
(1032, 't', 'Garzon', 13),
(1033, 't', 'Gigante', 13),
(1034, 't', 'Guadalupe', 13),
(1035, 't', 'Hobo', 13),
(1036, 't', 'Iquira', 13),
(1037, 't', 'Isnos ', 13),
(1038, 't', 'La Argentina', 13),
(1039, 't', 'La Plata', 13),
(1040, 't', 'Nataga', 13),
(1041, 't', 'Oporapa', 13),
(1042, 't', 'Paicol', 13),
(1043, 't', 'Palermo', 13),
(1044, 't', 'Palestina', 13),
(1045, 't', 'Pital', 13),
(1046, 't', 'Pitalito', 13),
(1047, 't', 'Rivera', 13),
(1048, 't', 'Saladoblanco', 13),
(1049, 't', 'San Agustin', 13),
(1050, 't', 'Santa Maria', 13),
(1051, 't', 'Suaza', 13),
(1052, 't', 'Tarqui', 13),
(1053, 't', 'Tesalia', 13),
(1054, 't', 'Tello', 13),
(1055, 't', 'Teruel', 13),
(1056, 't', 'Timana', 13),
(1057, 't', 'Villavieja', 13),
(1058, 't', 'Yaguara', 13),
(1059, 't', 'Riohacha', 14),
(1060, 't', 'Barrancas', 14),
(1061, 't', 'Dibulla', 14),
(1062, 't', 'Distraccion', 14),
(1063, 't', 'El Molino', 14),
(1064, 't', 'Fonseca', 14),
(1065, 't', 'Hatonuevo', 14),
(1066, 't', 'La Jagua Del Pilar', 14),
(1067, 't', 'Maicao', 14),
(1068, 't', 'Manaure', 14),
(1069, 't', 'San Juan Del Cesar', 14),
(1070, 't', 'Uribia', 14),
(1071, 't', 'Urumita', 14),
(1072, 't', 'Villanueva', 14),
(1073, 't', 'Santa Marta ', 15),
(1074, 't', 'Algarrobo', 15),
(1075, 't', 'Aracataca', 15),
(1076, 't', 'Ariguani ', 15),
(1077, 't', 'Cerro San Antonio', 15),
(1078, 't', 'Chivolo', 15),
(1079, 't', 'Cienaga', 15),
(1080, 't', 'Concordia', 15),
(1081, 't', 'El Banco', 15),
(1082, 't', 'El Piñon', 15),
(1083, 't', 'El Reten', 15),
(1084, 't', 'Fundacion', 15),
(1085, 't', 'Guamal', 15),
(1086, 't', 'Pedraza', 15),
(1087, 't', 'Pijiño Del Carmen ', 15),
(1088, 't', 'Pivijay', 15),
(1089, 't', 'Plato', 15),
(1090, 't', 'Puebloviejo', 15),
(1091, 't', 'Remolino', 15),
(1092, 't', 'Sabanas De San Angel', 15),
(1093, 't', 'Salamina', 15),
(1094, 't', 'San Sebastian De Buenavista', 15),
(1095, 't', 'San Zenon', 15),
(1096, 't', 'Santa Ana', 15),
(1097, 't', 'Sitionuevo', 15),
(1098, 't', 'Tenerife', 15),
(1099, 't', 'Villavicencio', 16),
(1100, 't', 'Acacias', 16),
(1101, 't', 'Barranca De Upia', 16),
(1102, 't', 'Cabuyaro', 16),
(1103, 't', 'Castilla La Nueva', 16),
(1104, 't', 'San Luis De Cubarral', 16),
(1105, 't', 'Cumaral', 16),
(1106, 't', 'El Calvario', 16),
(1107, 't', 'El Castillo', 16),
(1108, 't', 'El Dorado', 16),
(1109, 't', 'Fuente De Oro', 16),
(1110, 't', 'Granada', 16),
(1111, 't', 'Guamal', 16),
(1112, 't', 'Mapiripan', 16),
(1113, 't', 'Mesetas', 16),
(1114, 't', 'La Macarena', 16),
(1115, 't', 'La Uribe', 16),
(1116, 't', 'Lejanias', 16),
(1117, 't', 'Puerto Concordia', 16),
(1118, 't', 'Puerto Gaitan', 16),
(1119, 't', 'Puerto Lopez', 16);
INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(1120, 't', 'Puerto Lleras', 16),
(1121, 't', 'Puerto Rico', 16),
(1122, 't', 'Restrepo', 16),
(1123, 't', 'San Carlos De Guaroa', 16),
(1124, 't', 'San Juan De Arama', 16),
(1125, 't', 'San Juanito', 16),
(1126, 't', 'San Martin', 16),
(1127, 't', 'Vistahermosa', 16),
(1128, 't', 'Pasto ', 17),
(1129, 't', 'Alban ', 17),
(1130, 't', 'Aldana', 17),
(1131, 't', 'Ancuya', 17),
(1132, 't', 'Arboleda ', 17),
(1133, 't', 'Barbacoas', 17),
(1134, 't', 'Belen', 17),
(1135, 't', 'Buesaco', 17),
(1136, 't', 'Colon ', 17),
(1137, 't', 'Consaca', 17),
(1138, 't', 'Contadero', 17),
(1139, 't', 'Cordoba', 17),
(1140, 't', 'Cuaspud ', 17),
(1141, 't', 'Cumbal', 17),
(1142, 't', 'Cumbitara', 17),
(1143, 't', 'Chachagui', 17),
(1144, 't', 'El Charco', 17),
(1145, 't', 'El Peñol', 17),
(1146, 't', 'El Rosario', 17),
(1147, 't', 'El Tablon', 17),
(1148, 't', 'El Tambo', 17),
(1149, 't', 'Funes', 17),
(1150, 't', 'Guachucal', 17),
(1151, 't', 'Guaitarilla', 17),
(1152, 't', 'Gualmatan', 17),
(1153, 't', 'Iles', 17),
(1154, 't', 'Imues', 17),
(1155, 't', 'Ipiales', 17),
(1156, 't', 'La Cruz', 17),
(1157, 't', 'La Florida', 17),
(1158, 't', 'La Llanada', 17),
(1159, 't', 'La Tola', 17),
(1160, 't', 'La Union', 17),
(1161, 't', 'Leiva', 17),
(1162, 't', 'Linares', 17),
(1163, 't', 'Los Andes ', 17),
(1164, 't', 'Magui ', 17),
(1165, 't', 'Mallama ', 17),
(1166, 't', 'Mosquera', 17),
(1167, 't', 'Olaya Herrera ', 17),
(1168, 't', 'Ospina', 17),
(1169, 't', 'Francisco Pizarro ', 17),
(1170, 't', 'Policarpa', 17),
(1171, 't', 'Potosi', 17),
(1172, 't', 'Providencia', 17),
(1173, 't', 'Puerres', 17),
(1174, 't', 'Pupiales', 17),
(1175, 't', 'Ricaurte', 17),
(1176, 't', 'Roberto Payan ', 17),
(1177, 't', 'Samaniego', 17),
(1178, 't', 'Sandona', 17),
(1179, 't', 'San Bernardo', 17),
(1180, 't', 'San Lorenzo', 17),
(1181, 't', 'San Pablo', 17),
(1182, 't', 'San Pedro De Cartago', 17),
(1183, 't', 'Santa Barbara ', 17),
(1184, 't', 'Santa Cruz ', 17),
(1185, 't', 'Sapuyes', 17),
(1186, 't', 'Taminango', 17),
(1187, 't', 'Tangua', 17),
(1188, 't', 'Tumaco', 17),
(1189, 't', 'Tuquerres', 17),
(1190, 't', 'Yacuanquer', 17),
(1191, 't', 'Cucuta', 18),
(1192, 't', 'Abrego', 18);
INSERT INTO "public"."Ciudad" ("id", "estado", "nombre", "departamento_id_id") VALUES
(1193, 't', 'Arboledas', 18),
(1194, 't', 'Bochalema', 18),
(1195, 't', 'Bucarasica', 18),
(1196, 't', 'Cacota', 18),
(1197, 't', 'Cachira', 18),
(1198, 't', 'Chinacota', 18),
(1199, 't', 'Chitaga', 18),
(1200, 't', 'Convencion', 18),
(1201, 't', 'Cucutilla', 18),
(1202, 't', 'Durania', 18),
(1203, 't', 'El Carmen', 18),
(1204, 't', 'El Tarra', 18),
(1205, 't', 'El Zulia', 18),
(1206, 't', 'Gramalote', 18),
(1207, 't', 'Hacari', 18),
(1208, 't', 'Herran', 18),
(1209, 't', 'Labateca', 18),
(1210, 't', 'La Esperanza', 18),
(1211, 't', 'La Playa', 18),
(1212, 't', 'Los Patios', 18),
(1213, 't', 'Lourdes', 18),
(1214, 't', 'Mutiscua', 18),
(1215, 't', 'Ocaña', 18),
(1216, 't', 'Pamplona', 18),
(1217, 't', 'Pamplonita', 18),
(1218, 't', 'Puerto Santander', 18),
(1219, 't', 'Ragonvalia', 18),
(1220, 't', 'Salazar', 18),
(1221, 't', 'San Calixto', 18),
(1222, 't', 'San Cayetano', 18),
(1223, 't', 'Santiago', 18),
(1224, 't', 'Sardinata', 18),
(1225, 't', 'Silos', 18),
(1226, 't', 'Teorama', 18),
(1227, 't', 'Tibu', 18),
(1228, 't', 'Toledo', 18),
(1229, 't', 'Villacaro', 18),
(1230, 't', 'Villa Del Rosario', 18),
(1231, 't', 'Armenia', 19),
(1232, 't', 'Buenavista', 19),
(1233, 't', 'Calarca', 19),
(1234, 't', 'Circasia', 19),
(1235, 't', 'Cordoba', 19),
(1236, 't', 'Filandia', 19),
(1237, 't', 'Genova', 19),
(1238, 't', 'La Tebaida', 19),
(1239, 't', 'Montenegro', 19),
(1240, 't', 'Pijao', 19),
(1241, 't', 'Quimbaya', 19),
(1242, 't', 'Salento', 19),
(1243, 't', 'Pereira', 20),
(1244, 't', 'Apia', 20),
(1245, 't', 'Balboa', 20),
(1246, 't', 'Belen De Umbria', 20),
(1247, 't', 'Dos Quebradas', 20),
(1248, 't', 'Guatica', 20),
(1249, 't', 'La Celia', 20),
(1250, 't', 'La Virginia', 20),
(1251, 't', 'Marsella', 20),
(1252, 't', 'Mistrato', 20),
(1253, 't', 'Pueblo Rico', 20),
(1254, 't', 'Quinchia', 20),
(1255, 't', 'Santa Rosa De Cabal', 20),
(1256, 't', 'Santuario', 20),
(1257, 't', 'Bucaramanga', 21),
(1258, 't', 'Aguada', 21),
(1259, 't', 'Albania', 21),
(1260, 't', 'Aratoca', 21),
(1261, 't', 'Barbosa', 21),
(1262, 't', 'Barichara', 21),
(1263, 't', 'Barrancabermeja', 21),
(1264, 't', 'Betulia', 21),
(1265, 't', 'Bolivar', 21),
(1266, 't', 'Cabrera', 21),
(1267, 't', 'California', 21),
(1268, 't', 'Capitanejo', 21),
(1269, 't', 'Carcasi', 21),
(1270, 't', 'Cepita', 21),
(1271, 't', 'Cerrito', 21),
(1272, 't', 'Charala', 21),
(1273, 't', 'Charta', 21),
(1274, 't', 'Chima', 21),
(1275, 't', 'Chipata', 21),
(1276, 't', 'Cimitarra', 21),
(1277, 't', 'Concepcion', 21),
(1278, 't', 'Confines', 21),
(1279, 't', 'Contratacion', 21),
(1280, 't', 'Coromoro', 21),
(1281, 't', 'Curiti', 21),
(1282, 't', 'El Carmen De Chucury', 21),
(1283, 't', 'El Guacamayo', 21),
(1284, 't', 'El Peñon', 21),
(1285, 't', 'El Playon', 21),
(1286, 't', 'Encino', 21),
(1287, 't', 'Enciso', 21),
(1288, 't', 'Florian', 21),
(1289, 't', 'Floridablanca', 21),
(1290, 't', 'Galan', 21),
(1291, 't', 'Gambita', 21),
(1292, 't', 'Giron', 21),
(1293, 't', 'Guaca', 21),
(1294, 't', 'Guadalupe', 21),
(1295, 't', 'Guapota', 21),
(1296, 't', 'Guavata', 21),
(1297, 't', 'Guepsa', 21),
(1298, 't', 'Hato', 21),
(1299, 't', 'Jesus Maria', 21),
(1300, 't', 'Jordan', 21),
(1301, 't', 'La Belleza', 21),
(1302, 't', 'Landazuri', 21),
(1303, 't', 'La Paz', 21),
(1304, 't', 'Lebrija', 21),
(1305, 't', 'Los Santos', 21),
(1306, 't', 'Macaravita', 21),
(1307, 't', 'Malaga', 21),
(1308, 't', 'Matanza', 21),
(1309, 't', 'Mogotes', 21),
(1310, 't', 'Molagavita', 21),
(1311, 't', 'Ocamonte', 21),
(1312, 't', 'Oiba', 21),
(1313, 't', 'Onzaga', 21),
(1314, 't', 'Palmar', 21),
(1315, 't', 'Palmas Del Socorro', 21),
(1316, 't', 'Paramo', 21),
(1317, 't', 'Piedecuesta', 21),
(1318, 't', 'Pinchote', 21),
(1319, 't', 'Puente Nacional', 21),
(1320, 't', 'Puerto Parra', 21),
(1321, 't', 'Puerto Wilches', 21),
(1322, 't', 'Rionegro', 21),
(1323, 't', 'Sabana De Torres', 21),
(1324, 't', 'San Andres', 21),
(1325, 't', 'San Benito', 21),
(1326, 't', 'San Gil', 21),
(1327, 't', 'San Joaquin', 21),
(1328, 't', 'San Jose De Miranda', 21),
(1329, 't', 'San Miguel', 21),
(1330, 't', 'San Vicente De Chucuri', 21),
(1331, 't', 'Santa Barbara', 21),
(1332, 't', 'Santa Helena Del Opon', 21),
(1333, 't', 'Simacota', 21),
(1334, 't', 'Socorro', 21),
(1335, 't', 'Suaita', 21),
(1336, 't', 'Sucre', 21),
(1337, 't', 'Surata', 21),
(1338, 't', 'Tona', 21),
(1339, 't', 'Valle San Jose', 21),
(1340, 't', 'Velez', 21),
(1341, 't', 'Vetas', 21),
(1342, 't', 'Villanueva', 21),
(1343, 't', 'Zapatoca', 21),
(1344, 't', 'Sincelejo', 22),
(1345, 't', 'Buenavista', 22),
(1346, 't', 'Caimito', 22),
(1347, 't', 'Coloso ', 22),
(1348, 't', 'Corozal', 22),
(1349, 't', 'Chalan', 22),
(1350, 't', 'Galeras ', 22),
(1351, 't', 'Guaranda', 22),
(1352, 't', 'La Union', 22),
(1353, 't', 'Los Palmitos', 22),
(1354, 't', 'Majagual', 22),
(1355, 't', 'Morroa', 22),
(1356, 't', 'Ovejas', 22),
(1357, 't', 'Palmito', 22),
(1358, 't', 'Sampues', 22),
(1359, 't', 'San Benito Abad', 22),
(1360, 't', 'San Juan De Betulia', 22),
(1361, 't', 'San Marcos', 22),
(1362, 't', 'San Onofre', 22),
(1363, 't', 'San Pedro', 22),
(1364, 't', 'Since', 22),
(1365, 't', 'Sucre', 22),
(1366, 't', 'Tolu', 22),
(1367, 't', 'Toluviejo', 22),
(1368, 't', 'Ibague', 23),
(1369, 't', 'Alpujarra', 23),
(1370, 't', 'Alvarado', 23),
(1371, 't', 'Ambalema', 23),
(1372, 't', 'Anzoategui', 23),
(1373, 't', 'Armero ', 23),
(1374, 't', 'Ataco', 23),
(1375, 't', 'Cajamarca', 23),
(1376, 't', 'Carmen Apicala', 23),
(1377, 't', 'Casabianca', 23),
(1378, 't', 'Chaparral', 23),
(1379, 't', 'Coello', 23),
(1380, 't', 'Coyaima', 23),
(1381, 't', 'Cunday', 23),
(1382, 't', 'Dolores', 23),
(1383, 't', 'Espinal', 23),
(1384, 't', 'Falan', 23),
(1385, 't', 'Flandes', 23),
(1386, 't', 'Fresno', 23),
(1387, 't', 'Guamo', 23),
(1388, 't', 'Herveo', 23),
(1389, 't', 'Honda', 23),
(1390, 't', 'Icononzo', 23),
(1391, 't', 'Lerida', 23),
(1392, 't', 'Libano', 23),
(1393, 't', 'Mariquita', 23),
(1394, 't', 'Melgar', 23),
(1395, 't', 'Murillo', 23),
(1396, 't', 'Natagaima', 23),
(1397, 't', 'Ortega', 23),
(1398, 't', 'Palocabildo', 23),
(1399, 't', 'Piedras', 23),
(1400, 't', 'Planadas', 23),
(1401, 't', 'Prado', 23),
(1402, 't', 'Purificacion', 23),
(1403, 't', 'Rioblanco', 23),
(1404, 't', 'Roncesvalles', 23),
(1405, 't', 'Rovira', 23),
(1406, 't', 'Saldaña', 23),
(1407, 't', 'San Antonio', 23),
(1408, 't', 'San Luis', 23),
(1409, 't', 'Santa Isabel', 23),
(1410, 't', 'Suarez', 23),
(1411, 't', 'Valle De San Juan', 23),
(1412, 't', 'Venadillo', 23),
(1413, 't', 'Villahermosa', 23),
(1414, 't', 'Villarrica', 23),
(1415, 't', 'Cali ', 24),
(1416, 't', 'Alcala', 24),
(1417, 't', 'Andalucia', 24),
(1418, 't', 'Ansermanuevo', 24),
(1419, 't', 'Argelia', 24),
(1420, 't', 'Bolivar', 24),
(1421, 't', 'Buenaventura', 24),
(1422, 't', 'Buga', 24),
(1423, 't', 'Bugalagrande', 24),
(1424, 't', 'Caicedonia', 24),
(1425, 't', 'Calima ', 24),
(1426, 't', 'Candelaria', 24),
(1427, 't', 'Cartago', 24),
(1428, 't', 'Dagua', 24),
(1429, 't', 'El Aguila', 24),
(1430, 't', 'El Cairo', 24),
(1431, 't', 'El Cerrito', 24),
(1432, 't', 'El Dovio', 24),
(1433, 't', 'Florida', 24),
(1434, 't', 'Ginebra', 24),
(1435, 't', 'Guacari', 24),
(1436, 't', 'Jamundi', 24),
(1437, 't', 'La Cumbre', 24),
(1438, 't', 'La Union', 24),
(1439, 't', 'La Victoria', 24),
(1440, 't', 'Obando', 24),
(1441, 't', 'Palmira', 24),
(1442, 't', 'Pradera', 24),
(1443, 't', 'Restrepo', 24),
(1444, 't', 'Riofrio', 24),
(1445, 't', 'Roldanillo', 24),
(1446, 't', 'San Pedro', 24),
(1447, 't', 'Sevilla', 24),
(1448, 't', 'Toro', 24),
(1449, 't', 'Trujillo', 24),
(1450, 't', 'Tulua', 24),
(1451, 't', 'Ulloa', 24),
(1452, 't', 'Versalles', 24),
(1453, 't', 'Vijes', 24),
(1454, 't', 'Yotoco', 24),
(1455, 't', 'Yumbo', 24),
(1456, 't', 'Zarzal', 24),
(1457, 't', 'Arauca', 25),
(1458, 't', 'Arauquita', 25),
(1459, 't', 'Cravo Norte', 25),
(1460, 't', 'Fortul', 25),
(1461, 't', 'Puerto Rondon', 25),
(1462, 't', 'Saravena', 25),
(1463, 't', 'Tame', 25),
(1464, 't', 'Yopal', 26),
(1465, 't', 'Aguazul', 26),
(1466, 't', 'Chameza', 26),
(1467, 't', 'Hato Corozal', 26),
(1468, 't', 'La Salina', 26),
(1469, 't', 'Mani', 26),
(1470, 't', 'Monterrey', 26),
(1471, 't', 'Nunchia', 26),
(1472, 't', 'Orocue', 26),
(1473, 't', 'Paz De Ariporo', 26),
(1474, 't', 'Pore', 26),
(1475, 't', 'Recetor', 26),
(1476, 't', 'Sabanalarga', 26),
(1477, 't', 'Sacama', 26),
(1478, 't', 'San Luis De Palenque', 26),
(1479, 't', 'Tamara', 26),
(1480, 't', 'Tauramena', 26),
(1481, 't', 'Trinidad', 26),
(1482, 't', 'Villanueva', 26),
(1483, 't', 'Mocoa', 27),
(1484, 't', 'Colon', 27),
(1485, 't', 'Orito', 27),
(1486, 't', 'Puerto Asis', 27),
(1487, 't', 'Puerto Caicedo', 27),
(1488, 't', 'Puerto Guzman', 27),
(1489, 't', 'Puerto Leguizamo', 27),
(1490, 't', 'Sibundoy', 27),
(1491, 't', 'San Francisco', 27),
(1492, 't', 'San Miguel ', 27),
(1493, 't', 'Santiago', 27),
(1494, 't', 'La Hormiga ', 27),
(1495, 't', 'Villagarzon', 27),
(1496, 't', 'San Andres', 28),
(1497, 't', 'Providencia', 28),
(1498, 't', 'Leticia', 29),
(1499, 't', 'El Encanto', 29),
(1500, 't', 'La Chorrera', 29),
(1501, 't', 'La Pedrera', 29),
(1502, 't', 'La Victoria', 29),
(1503, 't', 'Miriti-Parana', 29),
(1504, 't', 'Puerto Alegria', 29),
(1505, 't', 'Puerto Arica', 29),
(1506, 't', 'Puerto Nariño', 29),
(1507, 't', 'Puerto Santander', 29),
(1508, 't', 'Tarapaca', 29),
(1509, 't', 'Puerto Inirida', 30),
(1510, 't', 'Barranco Minas', 30),
(1511, 't', 'San Felipe', 30),
(1512, 't', 'Puerto Colombia', 30),
(1513, 't', 'La Guadalupe', 30),
(1514, 't', 'Cacahual', 30),
(1515, 't', 'Pana Pana ', 30),
(1516, 't', 'Morichal ', 30),
(1517, 't', 'San Jose Del Guaviare', 31),
(1518, 't', 'Calamar', 31),
(1519, 't', 'El Retorno', 31),
(1520, 't', 'Miraflores', 31),
(1521, 't', 'Mitu', 32),
(1522, 't', 'Caruru', 32),
(1523, 't', 'Pacoa', 32),
(1524, 't', 'Taraira', 32),
(1525, 't', 'Papunaua ', 32),
(1526, 't', 'Yavarate', 32),
(1527, 't', 'Puerto Carreño', 33),
(1528, 't', 'La Primavera', 33),
(1529, 't', 'Santa Rita', 33),
(1530, 't', 'Santa Rosalia', 33),
(1531, 't', 'San Jose De Ocune', 33),
(1532, 't', 'Cumaribo', 33);



INSERT INTO "public"."Departamento" ("id", "estado", "nombre", "pais_id_id") VALUES
(1, 't', 'Antioquia', 1);
INSERT INTO "public"."Departamento" ("id", "estado", "nombre", "pais_id_id") VALUES
(2, 't', 'Atlantico', 1);
INSERT INTO "public"."Departamento" ("id", "estado", "nombre", "pais_id_id") VALUES
(3, 't', 'Bogota D.C', 1);
INSERT INTO "public"."Departamento" ("id", "estado", "nombre", "pais_id_id") VALUES
(4, 't', 'Bolivar', 1),
(5, 't', 'Boyaca', 1),
(6, 't', 'Caldas', 1),
(7, 't', 'Caqueta', 1),
(8, 't', 'Cauca', 1),
(9, 't', 'Cesar', 1),
(10, 't', 'Cordoba', 1),
(11, 't', 'Cundinamarca', 1),
(12, 't', 'Choco', 1),
(13, 't', 'Huila', 1),
(14, 't', 'La Guajira', 1),
(15, 't', 'Magdalena', 1),
(16, 't', 'Meta', 1),
(18, 't', 'Norte de Santander', 1),
(19, 't', 'Quindio', 1),
(20, 't', 'Risaralda', 1),
(21, 't', 'Santander', 1),
(22, 't', 'Sucre', 1),
(23, 't', 'Tolima', 1),
(24, 't', 'Valle', 1),
(25, 't', 'Arauca', 1),
(26, 't', 'Casanare', 1),
(27, 't', 'Putumayo', 1),
(28, 't', 'San Andres', 1),
(29, 't', 'Amazonas', 1),
(30, 't', 'Guainia', 1),
(31, 't', 'Guaviare', 1),
(32, 't', 'Vaupes', 1),
(33, 't', 'Vichada', 1),
(17, 't', 'Nariño', 1);

INSERT INTO "public"."django_admin_log" ("id", "action_time", "object_id", "object_repr", "action_flag", "change_message", "content_type_id", "user_id") VALUES
(1, '2023-01-30 15:02:44.267988+00', '1', 'JAIRO MILLER URREGO', 1, '[{"added": {}}]', 66, 1);
INSERT INTO "public"."django_admin_log" ("id", "action_time", "object_id", "object_repr", "action_flag", "change_message", "content_type_id", "user_id") VALUES
(2, '2023-01-30 15:03:02.533178+00', '2', '1013689035', 1, '[{"added": {}}]', 4, 1);
INSERT INTO "public"."django_admin_log" ("id", "action_time", "object_id", "object_repr", "action_flag", "change_message", "content_type_id", "user_id") VALUES
(3, '2023-01-30 15:03:11.048782+00', '1', 'JAIRO MILLER URREGO', 2, '[{"changed": {"fields": ["Usuario id"]}}]', 66, 1);
INSERT INTO "public"."django_admin_log" ("id", "action_time", "object_id", "object_repr", "action_flag", "change_message", "content_type_id", "user_id") VALUES
(4, '2023-01-30 15:03:51.88739+00', '2', '1013689035', 2, '[{"changed": {"fields": ["Superuser status"]}}]', 4, 1),
(5, '2023-01-30 15:25:04.39777+00', '1', 'Bienes', 1, '[{"added": {}}]', 68, 1),
(6, '2023-01-31 15:37:44.102417+00', '2', '1013689035', 2, '[{"changed": {"fields": ["Groups"]}}]', 4, 1),
(7, '2023-01-31 23:51:32.326933+00', '2', '1013689035', 2, '[]', 4, 1),
(8, '2023-01-31 23:56:43.873291+00', '3', 'Estudiante', 2, '[{"changed": {"fields": ["Permissions"]}}]', 3, 1),
(9, '2023-01-31 23:56:47.576436+00', '3', 'Estudiante', 2, '[]', 3, 1),
(10, '2023-02-01 00:06:18.319751+00', '3', 'Estudiante', 2, '[{"changed": {"fields": ["Permissions"]}}]', 3, 1),
(11, '2023-02-01 00:14:45.231105+00', '3', 'Estudiante', 2, '[{"changed": {"fields": ["Permissions"]}}]', 3, 1),
(12, '2023-02-01 00:18:48.126308+00', '3', 'Estudiante', 2, '[{"changed": {"fields": ["Permissions"]}}]', 3, 1),
(13, '2023-02-01 00:24:40.997252+00', '3', 'Estudiante', 2, '[]', 3, 1),
(14, '2023-02-01 15:40:05.567421+00', '3', 'Estudiante', 2, '[{"changed": {"fields": ["Permissions"]}}]', 3, 1),
(15, '2023-02-01 15:40:55.215023+00', '3', 'Estudiante', 2, '[{"changed": {"fields": ["Permissions"]}}]', 3, 1),
(16, '2023-02-01 15:48:31.692788+00', '26', 'Juan Sebastian Suarez Calderon', 3, '', 66, 1),
(17, '2023-02-01 15:48:31.694808+00', '25', 'juan ramirez', 3, '', 66, 1),
(18, '2023-02-01 15:48:31.695794+00', '24', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(19, '2023-02-01 15:48:31.696804+00', '23', 'juan ramirez', 3, '', 66, 1),
(20, '2023-02-01 15:48:31.697801+00', '22', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(21, '2023-02-01 15:48:31.698794+00', '21', 'juan ramirez', 3, '', 66, 1),
(22, '2023-02-01 15:48:31.699802+00', '20', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(23, '2023-02-01 15:48:31.700793+00', '19', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(24, '2023-02-01 15:48:31.701793+00', '18', 'juan ramirez', 3, '', 66, 1),
(25, '2023-02-01 15:48:31.703793+00', '17', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(26, '2023-02-01 15:48:31.7048+00', '16', 'camilo rios', 3, '', 66, 1),
(27, '2023-02-01 15:48:31.7058+00', '15', 'jairo urrego', 3, '', 66, 1),
(28, '2023-02-01 15:48:31.706793+00', '14', 'camilo rios', 3, '', 66, 1),
(29, '2023-02-01 15:48:31.707794+00', '13', 'jairo urrego', 3, '', 66, 1),
(30, '2023-02-01 15:48:31.7088+00', '12', 'juan ramirez', 3, '', 66, 1),
(31, '2023-02-01 15:48:31.709794+00', '11', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(32, '2023-02-01 15:48:31.710793+00', '10', 'juan ramirez', 3, '', 66, 1),
(33, '2023-02-01 15:48:31.711793+00', '9', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(34, '2023-02-01 15:48:31.712794+00', '8', 'juan ramirez', 3, '', 66, 1),
(35, '2023-02-01 15:48:31.713792+00', '7', 'ANRES FELIPE VILLAMIZAR', 3, '', 66, 1),
(36, '2023-02-01 15:48:31.714793+00', '6', 'camilo rios', 3, '', 66, 1),
(37, '2023-02-01 15:48:31.715799+00', '5', 'jairo urrego', 3, '', 66, 1),
(38, '2023-02-01 15:48:31.7168+00', '4', 'camilo rios', 3, '', 66, 1),
(39, '2023-02-01 15:48:31.717794+00', '3', 'jairo urrego', 3, '', 66, 1),
(40, '2023-02-01 15:49:00.784962+00', '2', 'JAIRO MILLER URREGO', 3, '', 66, 1),
(41, '2023-02-01 15:50:04.792664+00', '5', '1000465392', 3, '', 4, 1),
(42, '2023-02-01 15:50:04.794664+00', '4', '1010074595', 3, '', 4, 1),
(43, '2023-02-01 15:50:04.795659+00', '3', '1024579626', 3, '', 4, 1),
(44, '2023-02-01 15:52:33.634921+00', '1', 'DE 1 A 30 DIAS (HASTA 1 MES)', 2, '[{"changed": {"fields": ["Nombre"]}}]', 53, 1),
(45, '2023-02-01 15:53:06.287416+00', '2', 'DE 31 DIAS A 180 DIAS(ENTRE 2 Y 6 MESES)', 1, '[{"added": {}}]', 53, 1),
(46, '2023-02-01 15:53:29.161965+00', '3', 'SUPERIOR A 180 DIAS (ENTRE 7 Y 12 MESES)', 1, '[{"added": {}}]', 53, 1),
(47, '2023-02-01 15:53:47.324998+00', '4', 'SUPERIOR A 365 DIAS (SUPERIOR A 1 AÑO)', 1, '[{"added": {}}]', 53, 1),
(48, '2023-02-01 15:54:02.429145+00', '5', 'NO INFORMA', 1, '[{"added": {}}]', 53, 1),
(49, '2023-02-01 15:54:11.003435+00', '2', 'DE 31 DIAS A 180 DIAS (ENTRE 2 Y 6 MESES)', 2, '[{"changed": {"fields": ["Nombre"]}}]', 53, 1),
(50, '2023-02-01 15:58:09.756586+00', '1', 'Personal', 1, '[{"added": {}}]', 56, 1),
(51, '2023-02-01 15:58:14.493359+00', '2', 'Telefonicamente', 1, '[{"added": {}}]', 56, 1),
(52, '2023-02-01 15:58:19.110469+00', '3', 'E-mail', 1, '[{"added": {}}]', 56, 1),
(53, '2023-02-01 15:58:28.014524+00', '4', 'Otro', 1, '[{"added": {}}]', 56, 1),
(54, '2023-02-01 15:58:40.999751+00', '1', '¿Se cumplió o se está cumpliendo el acuerdo
de conciliación?', 2, '[{"changed": {"fields": ["Nombre"]}}]', 77, 1),
(55, '2023-02-01 15:58:50.611504+00', '2', '¿El acuerdo alcanzado en la conciliación fue
llevado a proceso judicial?', 2, '[{"changed": {"fields": ["Nombre"]}}]', 77, 1),
(56, '2023-02-01 15:59:00.045994+00', '3', '¿Existe reincidencia del conflicto que se
acordó en el caso de conciliación?', 2, '[{"changed": {"fields": ["Nombre"]}}]', 77, 1),
(57, '2023-02-01 16:01:26.544545+00', '3', 'Se requiere información', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(58, '2023-02-01 16:01:42.435906+00', '4', 'Audiencia pendiente', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(59, '2023-02-01 16:01:57.563935+00', '6', 'Generación de resultado', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(60, '2023-02-01 16:02:08.661346+00', '7', 'Encuesta pendiente', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(61, '2023-02-01 16:02:32.746204+00', '7', 'Encuesta de Satisfacción Pendiente', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(62, '2023-02-01 16:02:47.047931+00', '8', 'En seguimiento', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(63, '2023-02-01 16:02:52.309706+00', '9', 'Cerrada', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(64, '2023-02-01 16:02:57.557045+00', '10', 'Inactiva', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(65, '2023-02-01 16:03:15.83901+00', '11', 'Anulada', 2, '[{"changed": {"fields": ["Nombre"]}}]', 86, 1),
(66, '2023-02-01 19:28:44.76739+00', '11', 'Anulada', 3, '', 86, 1),
(67, '2023-02-01 19:28:44.769937+00', '10', 'Inactiva', 3, '', 86, 1),
(68, '2023-02-01 19:28:44.771716+00', '9', 'Cerrada', 3, '', 86, 1),
(69, '2023-02-01 19:28:44.77346+00', '8', 'En seguimiento', 3, '', 86, 1),
(70, '2023-02-01 19:28:44.775347+00', '7', 'Encuesta de Satisfacción Pendiente', 3, '', 86, 1),
(71, '2023-02-01 19:28:44.77723+00', '6', 'Generación de resultado', 3, '', 86, 1),
(72, '2023-02-01 19:28:44.77917+00', '5', 'Resuelta', 3, '', 86, 1),
(73, '2023-02-01 19:28:44.780841+00', '4', 'Audiencia pendiente', 3, '', 86, 1),
(74, '2023-02-01 19:28:44.782354+00', '3', 'Se requiere información', 3, '', 86, 1),
(75, '2023-02-01 19:28:44.790506+00', '2', 'Asignada', 3, '', 86, 1);

INSERT INTO "public"."django_content_type" ("id", "app_label", "model") VALUES
(1, 'admin', 'logentry');
INSERT INTO "public"."django_content_type" ("id", "app_label", "model") VALUES
(2, 'auth', 'permission');
INSERT INTO "public"."django_content_type" ("id", "app_label", "model") VALUES
(3, 'auth', 'group');
INSERT INTO "public"."django_content_type" ("id", "app_label", "model") VALUES
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(7, 'apiSolicitudesApp', 'apoderado_solicitud'),
(8, 'apiSolicitudesApp', 'centro_conciliacion'),
(9, 'apiSolicitudesApp', 'ciudad'),
(10, 'apiSolicitudesApp', 'estado_solicitud'),
(11, 'apiSolicitudesApp', 'estrato_socioeconomico'),
(12, 'apiSolicitudesApp', 'genero'),
(13, 'apiSolicitudesApp', 'pais'),
(14, 'apiSolicitudesApp', 'persona_solicitud'),
(15, 'apiSolicitudesApp', 'sexo'),
(16, 'apiSolicitudesApp', 'tipo_cliente'),
(17, 'apiSolicitudesApp', 'tipo_documento'),
(18, 'apiSolicitudesApp', 'tipo_persona'),
(19, 'apiSolicitudesApp', 'solicitud'),
(20, 'apiSolicitudesApp', 'relacion_persona_solicitud'),
(21, 'apiSolicitudesApp', 'hechos_solicitud'),
(22, 'apiSolicitudesApp', 'documento_solicitud'),
(23, 'apiSolicitudesApp', 'departamento'),
(24, 'apiSolicitudesApp', 'codigo'),
(25, 'rest_framework_api_key', 'apikey'),
(26, 'apiExpedientesApp', 'authgroup'),
(27, 'apiExpedientesApp', 'authgrouppermissions'),
(28, 'apiExpedientesApp', 'authpermission'),
(29, 'apiExpedientesApp', 'authuser'),
(30, 'apiExpedientesApp', 'authusergroups'),
(31, 'apiExpedientesApp', 'authuseruserpermissions'),
(32, 'apiExpedientesApp', 'centro_conciliacion'),
(33, 'apiExpedientesApp', 'codigo'),
(34, 'apiExpedientesApp', 'departamento'),
(35, 'apiExpedientesApp', 'djangoadminlog'),
(36, 'apiExpedientesApp', 'djangocontenttype'),
(37, 'apiExpedientesApp', 'djangomigrations'),
(38, 'apiExpedientesApp', 'djangosession'),
(39, 'apiExpedientesApp', 'estado_solicitud'),
(40, 'apiExpedientesApp', 'pais'),
(41, 'apiExpedientesApp', 'tipo_reporte'),
(42, 'apiExpedientesApp', 'grupo_etnico'),
(43, 'apiExpedientesApp', 'tipo_discapacidad'),
(44, 'apiExpedientesApp', 'escolaridad'),
(45, 'apiExpedientesApp', 'tipo_medio'),
(46, 'apiExpedientesApp', 'estrato_socioeconomico'),
(47, 'apiExpedientesApp', 'localidad'),
(48, 'apiExpedientesApp', 'hechos'),
(49, 'apiExpedientesApp', 'respuesta_seguimiento'),
(50, 'apiExpedientesApp', 'objetivo_servicio'),
(51, 'apiExpedientesApp', 'tipo_cargo'),
(52, 'apiExpedientesApp', 'barrio'),
(53, 'apiExpedientesApp', 'inicio_conflicto'),
(54, 'apiExpedientesApp', 'subtema'),
(55, 'apiExpedientesApp', 'area'),
(56, 'apiExpedientesApp', 'medio_seguimiento'),
(57, 'apiExpedientesApp', 'genero'),
(58, 'apiExpedientesApp', 'historico'),
(59, 'apiExpedientesApp', 'respuesta_encuesta'),
(60, 'apiExpedientesApp', 'seguimiento'),
(61, 'apiExpedientesApp', 'tipo_documento'),
(62, 'apiExpedientesApp', 'tipo_servicio'),
(63, 'apiExpedientesApp', 'perfil'),
(64, 'apiExpedientesApp', 'relacion_persona_citacion'),
(65, 'apiExpedientesApp', 'categoria_resultado'),
(66, 'apiExpedientesApp', 'persona'),
(67, 'apiExpedientesApp', 'tipo_resultado'),
(68, 'apiExpedientesApp', 'tema'),
(69, 'apiExpedientesApp', 'encuesta'),
(70, 'apiExpedientesApp', 'citacion'),
(71, 'apiExpedientesApp', 'solicitante_servicio'),
(72, 'apiExpedientesApp', 'turno'),
(73, 'apiExpedientesApp', 'estado_civil'),
(74, 'apiExpedientesApp', 'resultado'),
(75, 'apiExpedientesApp', 'ciudad'),
(76, 'apiExpedientesApp', 'tipo_vivienda'),
(77, 'apiExpedientesApp', 'pregunta_seguimiento'),
(78, 'apiExpedientesApp', 'tipo_persona'),
(79, 'apiExpedientesApp', 'expediente'),
(80, 'apiExpedientesApp', 'tipo_cliente'),
(81, 'apiExpedientesApp', 'pregunta_encuesta'),
(82, 'apiExpedientesApp', 'sexo'),
(83, 'apiExpedientesApp', 'relacion_persona_expediente'),
(84, 'apiExpedientesApp', 'apoderado'),
(85, 'apiExpedientesApp', 'medio_conocimiento'),
(86, 'apiExpedientesApp', 'estado_expediente'),
(87, 'apiExpedientesApp', 'finalidad_servicio');

INSERT INTO "public"."django_migrations" ("id", "app", "name", "applied") VALUES
(1, 'contenttypes', '0001_initial', '2023-01-30 14:21:27.624707+00');
INSERT INTO "public"."django_migrations" ("id", "app", "name", "applied") VALUES
(2, 'auth', '0001_initial', '2023-01-30 14:21:27.687177+00');
INSERT INTO "public"."django_migrations" ("id", "app", "name", "applied") VALUES
(3, 'admin', '0001_initial', '2023-01-30 14:21:27.7028+00');
INSERT INTO "public"."django_migrations" ("id", "app", "name", "applied") VALUES
(4, 'admin', '0002_logentry_remove_auto_add', '2023-01-30 14:21:27.705224+00'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2023-01-30 14:21:27.705224+00'),
(6, 'apiSolicitudesApp', '0001_initial', '2023-01-30 14:21:27.861506+00'),
(7, 'apiSolicitudesApp', '0002_alter_documento_solicitud_documento', '2023-01-30 14:21:27.861506+00'),
(8, 'contenttypes', '0002_remove_content_type_name', '2023-01-30 14:21:27.877128+00'),
(9, 'auth', '0002_alter_permission_name_max_length', '2023-01-30 14:21:27.892753+00'),
(10, 'auth', '0003_alter_user_email_max_length', '2023-01-30 14:21:27.892753+00'),
(11, 'auth', '0004_alter_user_username_opts', '2023-01-30 14:21:27.90838+00'),
(12, 'auth', '0005_alter_user_last_login_null', '2023-01-30 14:21:27.90838+00'),
(13, 'auth', '0006_require_contenttypes_0002', '2023-01-30 14:21:27.90838+00'),
(14, 'auth', '0007_alter_validators_add_error_messages', '2023-01-30 14:21:27.90838+00'),
(15, 'auth', '0008_alter_user_username_max_length', '2023-01-30 14:21:27.924008+00'),
(16, 'auth', '0009_alter_user_last_name_max_length', '2023-01-30 14:21:27.924008+00'),
(17, 'auth', '0010_alter_group_name_max_length', '2023-01-30 14:21:27.939634+00'),
(18, 'auth', '0011_update_proxy_permissions', '2023-01-30 14:21:27.939634+00'),
(19, 'auth', '0012_alter_user_first_name_max_length', '2023-01-30 14:21:27.955259+00'),
(20, 'rest_framework_api_key', '0001_initial', '2023-01-30 14:21:27.955259+00'),
(21, 'rest_framework_api_key', '0002_auto_20190529_2243', '2023-01-30 14:21:27.970893+00'),
(22, 'rest_framework_api_key', '0003_auto_20190623_1952', '2023-01-30 14:21:27.970893+00'),
(23, 'rest_framework_api_key', '0004_prefix_hashed_key', '2023-01-30 14:21:27.986476+00'),
(24, 'rest_framework_api_key', '0005_auto_20220110_1102', '2023-01-30 14:21:27.986476+00'),
(25, 'sessions', '0001_initial', '2023-01-30 14:21:28.002129+00'),
(26, 'apiExpedientesApp', '0001_initial', '2023-01-30 14:26:05.269545+00'),
(27, 'apiExpedientesApp', '0002_alter_tema_nombre', '2023-01-30 15:23:03.457771+00'),
(28, 'apiSolicitudesApp', '0002_alter_ciudad_nombre', '2023-01-30 15:32:55.61854+00'),
(29, 'apiExpedientesApp', '0003_alter_pregunta_encuesta_nombre', '2023-01-30 15:38:30.821726+00'),
(30, 'apiExpedientesApp', '0004_alter_subtema_nombre', '2023-01-31 15:22:15.392293+00'),
(31, 'apiExpedientesApp', '0005_alter_subtema_nombre', '2023-01-31 15:25:32.563062+00'),
(32, 'apiSolicitudesApp', '0003_alter_documento_solicitud_nombre', '2023-02-06 12:26:14.675018+00');

INSERT INTO "public"."django_session" ("session_key", "session_data", "expire_date") VALUES
('hauk3ndvrdjotd3nl216mlypi7onr13i', '.eJxVjEEOwiAQRe_C2hCgBRyX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gILU6_W8T04LoDumO9NZlaXZc5yl2RB-1yasTP6-H-HRTs5VtjMn4A53RCtFZ5Y5yyUY9kI0NkYp8pkyZyowLnXVLZIEQyMAAynMX7A-bCODs:1pMVCq:s8ejVAMA21JnLYkkFfT38DR4Uy-uO_0W56AED4ZWPYo', '2023-02-13 14:32:24.859952+00');
INSERT INTO "public"."django_session" ("session_key", "session_data", "expire_date") VALUES
('ofybzgzc9ajmpgkrw83sw7vr4qac6dyf', '.eJxVjEEOwiAQRe_C2hCgBRyX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gILU6_W8T04LoDumO9NZlaXZc5yl2RB-1yasTP6-H-HRTs5VtjMn4A53RCtFZ5Y5yyUY9kI0NkYp8pkyZyowLnXVLZIEQyMAAynMX7A-bCODs:1pMZl7:WWQVuYCk8eN-vpdYxtNqrG37YsVVnpo2Ak_KtdQ3Xj4', '2023-02-13 19:24:05.572572+00');
INSERT INTO "public"."django_session" ("session_key", "session_data", "expire_date") VALUES
('wpx3cwszed121b2vkuc2ntwfke2u65qz', '.eJxVjEEOwiAQRe_C2hCgBRyX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gILU6_W8T04LoDumO9NZlaXZc5yl2RB-1yasTP6-H-HRTs5VtjMn4A53RCtFZ5Y5yyUY9kI0NkYp8pkyZyowLnXVLZIEQyMAAynMX7A-bCODs:1pMi2g:uVJes-yexkp61mhmO_cqU0iwuu8Gqilaj_HhTsXddgQ', '2023-02-14 04:14:46.125932+00');
INSERT INTO "public"."django_session" ("session_key", "session_data", "expire_date") VALUES
('rr4u5vutyzrargg4fnm3ob5ltflagp7s', '.eJxVjEEOwiAQRe_C2hCgBRyX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gILU6_W8T04LoDumO9NZlaXZc5yl2RB-1yasTP6-H-HRTs5VtjMn4A53RCtFZ5Y5yyUY9kI0NkYp8pkyZyowLnXVLZIEQyMAAynMX7A-bCODs:1pMsIj:E4mCQqelja5GXEWPSnzlVBPwSauFayUf6fp3W4c70xI', '2023-02-14 15:12:01.052726+00'),
('kf7dv32m8x9ocs862sl2o3wkultpiqb7', '.eJxVjEEOwiAQRe_C2hCgBRyX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gILU6_W8T04LoDumO9NZlaXZc5yl2RB-1yasTP6-H-HRTs5VtjMn4A53RCtFZ5Y5yyUY9kI0NkYp8pkyZyowLnXVLZIEQyMAAynMX7A-bCODs:1pN0P8:uMNZMOf7rP2fLhKmtcxTV-D_de51rUCzcjzFMS521K8', '2023-02-14 23:51:10.774637+00'),
('c2n6ycxs1supmgcv077ppeookq1vdkn0', '.eJxVjEEOwiAQRe_C2hCgBRyX7nsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwk7gILU6_W8T04LoDumO9NZlaXZc5yl2RB-1yasTP6-H-HRTs5VtjMn4A53RCtFZ5Y5yyUY9kI0NkYp8pkyZyowLnXVLZIEQyMAAynMX7A-bCODs:1pNFCo:JE8eKCjE5tKmhnKhEfM7jT7cmVyVaC3ykbg_yFQIFGU', '2023-02-15 15:39:26.198637+00');

INSERT INTO "public"."Documento_solicitud" ("id", "estado", "nombre", "fecha_registro", "documento", "solicitud_id_id") VALUES
(55, 't', 'CamScanner 02-06-2023 13.08.pdf', '2023-02-06', 'documentos/2023-02-06-CamScanner_02-06-2023_13.08.pdf', 30);
INSERT INTO "public"."Documento_solicitud" ("id", "estado", "nombre", "fecha_registro", "documento", "solicitud_id_id") VALUES
(56, 't', 'recibo publico.pdf', '2023-02-06', 'documentos/2023-02-06-recibo_publico.pdf', 30);
INSERT INTO "public"."Documento_solicitud" ("id", "estado", "nombre", "fecha_registro", "documento", "solicitud_id_id") VALUES
(57, 't', 'anexos_compressed.pdf', '2023-02-06', 'documentos/2023-02-06-anexos_compressed.pdf', 30);



INSERT INTO "public"."Escolaridad" ("id", "estado", "nombre") VALUES
(1, 't', 'ducación primera infancia ');
INSERT INTO "public"."Escolaridad" ("id", "estado", "nombre") VALUES
(2, 't', 'Educación básica primaria');
INSERT INTO "public"."Escolaridad" ("id", "estado", "nombre") VALUES
(3, 't', 'Educación básica secundaria o secundaria básica');
INSERT INTO "public"."Escolaridad" ("id", "estado", "nombre") VALUES
(4, 't', 'Educación media o secundaria alta'),
(5, 't', 'Educación postsecundaria no superior'),
(6, 't', 'Educación técnica profesional y tecnológica'),
(7, 't', 'Educación universitario o equivalente'),
(8, 't', 'Especialización maestría o equivalente'),
(9, 't', 'Doctorado o equivalente'),
(10, 't', 'Ninguna ');

INSERT INTO "public"."Estado_civil" ("id", "estado", "nombre") VALUES
(1, 't', 'Casado(a)');
INSERT INTO "public"."Estado_civil" ("id", "estado", "nombre") VALUES
(2, 't', 'Divorciado(a)');
INSERT INTO "public"."Estado_civil" ("id", "estado", "nombre") VALUES
(3, 't', 'Union libre');
INSERT INTO "public"."Estado_civil" ("id", "estado", "nombre") VALUES
(4, 't', 'Separado(a)'),
(5, 't', 'Soltero(a)'),
(6, 't', 'Viudo(a)');

INSERT INTO "public"."Estado_expediente" ("id", "estado", "nombre") VALUES
(1, 't', 'Nueva');
INSERT INTO "public"."Estado_expediente" ("id", "estado", "nombre") VALUES
(2, 't', 'Asignada');
INSERT INTO "public"."Estado_expediente" ("id", "estado", "nombre") VALUES
(3, 't', 'Se requiere información');
INSERT INTO "public"."Estado_expediente" ("id", "estado", "nombre") VALUES
(4, 't', 'Audiencia pendiente'),
(5, 't', 'Generando resultado'),
(6, 't', 'Resuelta'),
(7, 't', 'Encuesta pendiente'),
(8, 't', 'En seguimiento'),
(9, 't', 'Cerrada'),
(10, 't', 'Inadmitida');

INSERT INTO "public"."Estado_solicitud" ("id", "estado", "nombre") VALUES
(1, 't', 'En espera de revisión');
INSERT INTO "public"."Estado_solicitud" ("id", "estado", "nombre") VALUES
(2, 't', 'Aprobada');
INSERT INTO "public"."Estado_solicitud" ("id", "estado", "nombre") VALUES
(3, 't', 'Rechazada');
INSERT INTO "public"."Estado_solicitud" ("id", "estado", "nombre") VALUES
(4, 't', 'Falta de informacion'),
(5, 't', 'Remitida');

INSERT INTO "public"."Estrato_socioeconomico" ("id", "estado", "nombre") VALUES
(1, 't', '1');
INSERT INTO "public"."Estrato_socioeconomico" ("id", "estado", "nombre") VALUES
(2, 't', '2');
INSERT INTO "public"."Estrato_socioeconomico" ("id", "estado", "nombre") VALUES
(3, 't', '3');
INSERT INTO "public"."Estrato_socioeconomico" ("id", "estado", "nombre") VALUES
(4, 't', '4'),
(5, 't', '5'),
(6, 't', '6');

INSERT INTO "public"."Expediente" ("id", "estado", "identificador_sicaac", "numero_radicado", "numero_caso", "fecha_registro", "caso_gratuito", "asunto_juridico_definible", "fecha_finalizacion", "expediente_pre_cerrado", "expediente_cerrado", "Finalidad_servicio_id_id", "area_id_id", "estado_expediente_id_id", "inicio_conflicto_id_id", "solicitante_servicio_id_id", "subtema_id_id", "tipo_servicio_id_id") VALUES
(23, 't', NULL, 'S20232CCJIT001', '2023-001', '2023-02-06', 't', 'f', NULL, 'f', 'f', NULL, NULL, 1, NULL, NULL, NULL, NULL);


INSERT INTO "public"."finalidad_servicio" ("id", "estado", "nombre") VALUES
(1, 't', 'Finalidad 1');


INSERT INTO "public"."Genero" ("id", "estado", "nombre") VALUES
(1, 't', 'Masculino');
INSERT INTO "public"."Genero" ("id", "estado", "nombre") VALUES
(2, 't', 'Femenino');
INSERT INTO "public"."Genero" ("id", "estado", "nombre") VALUES
(3, 't', 'Transgénero');

INSERT INTO "public"."Grupo_etnico" ("id", "estado", "nombre") VALUES
(1, 't', 'Rom ');
INSERT INTO "public"."Grupo_etnico" ("id", "estado", "nombre") VALUES
(2, 't', 'Gitano');
INSERT INTO "public"."Grupo_etnico" ("id", "estado", "nombre") VALUES
(3, 't', 'Negro');
INSERT INTO "public"."Grupo_etnico" ("id", "estado", "nombre") VALUES
(4, 't', 'Mulato'),
(5, 't', 'Afrocolombiano'),
(6, 't', 'Afrodescendiente'),
(7, 't', 'Raizal'),
(8, 't', 'Palenquero de San Basilio'),
(9, 't', 'Indígena'),
(10, 't', 'Ninguno');



INSERT INTO "public"."Hechos_solicitud" ("id", "estado", "descripcion", "ciudad_id_id", "solicitud_id_id") VALUES
(30, 't', 'EL SEÑOR CRISTIAN FERNEY SANCHEZ OSPINA IDENTIFICADO CON CEDULA DE CIUDADANIA No. 1033757528 DE BOGOTA D.C Y LA SEÑORA ANGIE KATHERINE SIERRA CORTES IDENTIFICADA CON LA CEDULA DE CIUDADANIA No. 1012402697 DE BOGOTA D.C., SON PADRES DE LA MENOR LUCIANA SANCHEZ SIERRA IDENTIFICADA CON NUIP No. 1011259000 NACIDA EL 08 DE MAYO DE 2020 EN LA CIUDAD DE BOGOTA D.C. 

LA MENOR LUCIANA SANCHEZ SIERRA IDENTIFICADA CON NUIP No. 1011259000, DE DOS (2) AÑOS CUMPLIDOS, VIVE CON SU PROGENITORA EN LA CARRERA 78 B No. 71 C 06 SUR DE ESTA CIUDAD. 

LAS PARTES EN ESTE ASUSNTO A LA FECHA, NO HAN REALIZADO NINGUN ACUERDO CONCILIATORIO SOBRE FIJACION DE CUOTA DE ALIMENTOS Y REGIMEN DE VISITAS A FAVOR DE LA MENOR LUCIANA SANCHEZ SIERRA IDENTIFICADA CON NUIP No. 1011259000, EN ENTIDAD ALGUNA, NI EN OTRO CENTRO DE CONCILIACION.', 575, 30);




INSERT INTO "public"."Inicio_conflicto" ("id", "estado", "nombre") VALUES
(1, 't', 'DE 1 A 30 DIAS (HASTA 1 MES)');
INSERT INTO "public"."Inicio_conflicto" ("id", "estado", "nombre") VALUES
(3, 't', 'SUPERIOR A 180 DIAS (ENTRE 7 Y 12 MESES)');
INSERT INTO "public"."Inicio_conflicto" ("id", "estado", "nombre") VALUES
(4, 't', 'SUPERIOR A 365 DIAS (SUPERIOR A 1 AÑO)');
INSERT INTO "public"."Inicio_conflicto" ("id", "estado", "nombre") VALUES
(5, 't', 'NO INFORMA'),
(2, 't', 'DE 31 DIAS A 180 DIAS (ENTRE 2 Y 6 MESES)');

INSERT INTO "public"."Localidad" ("id", "estado", "nombre", "ciudad_id_id") VALUES
(1, 't', 'Usaquen', 575);
INSERT INTO "public"."Localidad" ("id", "estado", "nombre", "ciudad_id_id") VALUES
(2, 't', 'Chapinero', 575);
INSERT INTO "public"."Localidad" ("id", "estado", "nombre", "ciudad_id_id") VALUES
(3, 't', 'Santa Fe', 575);
INSERT INTO "public"."Localidad" ("id", "estado", "nombre", "ciudad_id_id") VALUES
(4, 't', 'San Cristobal', 575),
(5, 't', 'Usme', 575),
(6, 't', 'Tunjuelito', 575),
(7, 't', 'Bosa', 575),
(8, 't', 'Kennedy', 575),
(9, 't', 'Fontibon', 575),
(10, 't', 'Engativa', 575),
(11, 't', 'Suba', 575),
(12, 't', 'Barrios Unidos', 575),
(13, 't', 'Teusaquillo', 575),
(14, 't', 'Martires', 575),
(15, 't', 'Antonio Nariño', 575),
(16, 't', 'Puente Aranda', 575),
(17, 't', 'Candelaria', 575),
(18, 't', 'Rafael Uribe', 575),
(19, 't', 'Ciudad Bolivar', 575),
(20, 't', 'Sumapaz', 575);

INSERT INTO "public"."Medio_conocimiento" ("id", "estado", "nombre") VALUES
(1, 't', 'Radio       ');
INSERT INTO "public"."Medio_conocimiento" ("id", "estado", "nombre") VALUES
(2, 't', 'Folletos      ');
INSERT INTO "public"."Medio_conocimiento" ("id", "estado", "nombre") VALUES
(3, 't', 'Televisión       ');
INSERT INTO "public"."Medio_conocimiento" ("id", "estado", "nombre") VALUES
(4, 't', 'Un Amigo       '),
(5, 't', 'Web       '),
(6, 't', 'Otro    ');

INSERT INTO "public"."Medio_seguimiento" ("id", "estado", "nombre") VALUES
(1, 't', 'Personal');
INSERT INTO "public"."Medio_seguimiento" ("id", "estado", "nombre") VALUES
(2, 't', 'Telefonicamente');
INSERT INTO "public"."Medio_seguimiento" ("id", "estado", "nombre") VALUES
(3, 't', 'E-mail');
INSERT INTO "public"."Medio_seguimiento" ("id", "estado", "nombre") VALUES
(4, 't', 'Otro');

INSERT INTO "public"."Objetivo_servicio" ("id", "estado", "nombre") VALUES
(1, 't', 'Conciliacion');


INSERT INTO "public"."Pais" ("id", "estado", "nombre") VALUES
(1, 't', 'Colombia');




INSERT INTO "public"."Persona" ("id", "estado", "nombres", "apellidos", "identificacion", "fecha_expedicion", "lugar_expedicion", "fecha_nacimiento", "telefono", "direccion", "ocupacion", "celular", "correo", "persona_ugc", "tarjeta_profesional", "lugar_nacimiento", "apoderado_id_id", "barrio_id_id", "escolaridad_id_id", "estado_civil_id_id", "estrato_socioeconomico_id_id", "genero_id_id", "grupo_etnico_id_id", "perfil_id_id", "sexo_id_id", "tipo_cargo_id_id", "tipo_discapacidad_id_id", "tipo_documento_id_id", "tipo_persona_id_id", "tipo_vivienda_id_id", "usuario_id_id") VALUES
(58, 't', 'CRISTIAN FERNEY', 'SANCHEZ  OSPINA', '1033757528', '2011-09-12', 'BOGOTA', '1993-07-11', '', 'CALLE 39A SUR # 73A 29 APTO402', '', '3194755783', 'CRISTIAN.SANCHEZ.OSPINA1310@GMAIL.COM', 'f', NULL, 'BOGOTA', NULL, NULL, NULL, NULL, 3, 1, NULL, NULL, 1, NULL, NULL, 1, 1, NULL, NULL);
INSERT INTO "public"."Persona" ("id", "estado", "nombres", "apellidos", "identificacion", "fecha_expedicion", "lugar_expedicion", "fecha_nacimiento", "telefono", "direccion", "ocupacion", "celular", "correo", "persona_ugc", "tarjeta_profesional", "lugar_nacimiento", "apoderado_id_id", "barrio_id_id", "escolaridad_id_id", "estado_civil_id_id", "estrato_socioeconomico_id_id", "genero_id_id", "grupo_etnico_id_id", "perfil_id_id", "sexo_id_id", "tipo_cargo_id_id", "tipo_discapacidad_id_id", "tipo_documento_id_id", "tipo_persona_id_id", "tipo_vivienda_id_id", "usuario_id_id") VALUES
(1, 't', 'JAIRO MILLER', 'URREGO', '1013689035', NULL, NULL, NULL, NULL, NULL, '', '3144216973', 'jairo.urrego@ugc.edu.co', 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2);
INSERT INTO "public"."Persona" ("id", "estado", "nombres", "apellidos", "identificacion", "fecha_expedicion", "lugar_expedicion", "fecha_nacimiento", "telefono", "direccion", "ocupacion", "celular", "correo", "persona_ugc", "tarjeta_profesional", "lugar_nacimiento", "apoderado_id_id", "barrio_id_id", "escolaridad_id_id", "estado_civil_id_id", "estrato_socioeconomico_id_id", "genero_id_id", "grupo_etnico_id_id", "perfil_id_id", "sexo_id_id", "tipo_cargo_id_id", "tipo_discapacidad_id_id", "tipo_documento_id_id", "tipo_persona_id_id", "tipo_vivienda_id_id", "usuario_id_id") VALUES
(59, 't', 'ANGIE KATHERINE', 'SIERRA CORTES', '1012402697', NULL, NULL, NULL, NULL, 'CARRERA 78 B # 71 C 06 SUR', '', '3057898375', 'ASIERRACO@IBERO.EDU.CO', 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL);
INSERT INTO "public"."Persona" ("id", "estado", "nombres", "apellidos", "identificacion", "fecha_expedicion", "lugar_expedicion", "fecha_nacimiento", "telefono", "direccion", "ocupacion", "celular", "correo", "persona_ugc", "tarjeta_profesional", "lugar_nacimiento", "apoderado_id_id", "barrio_id_id", "escolaridad_id_id", "estado_civil_id_id", "estrato_socioeconomico_id_id", "genero_id_id", "grupo_etnico_id_id", "perfil_id_id", "sexo_id_id", "tipo_cargo_id_id", "tipo_discapacidad_id_id", "tipo_documento_id_id", "tipo_persona_id_id", "tipo_vivienda_id_id", "usuario_id_id") VALUES
(60, 't', 'CRISTIAN FERNEY', 'SANCHEZ  OSPINA', '1033757528', '2011-09-12', 'BOGOTA', '1993-07-11', '', 'CALLE 39A SUR # 73A 29 APTO402', '', '3194755783', 'CRISTIAN.SANCHEZ.OSPINA1310@GMAIL.COM', 'f', NULL, 'BOGOTA', NULL, NULL, NULL, NULL, 3, 1, NULL, NULL, 1, NULL, NULL, 1, 1, NULL, NULL),
(61, 't', 'ANGIE KATHERINE', 'SIERRA CORTES', '1012402697', NULL, NULL, NULL, NULL, 'CARRERA 78 B # 71 C 06 SUR', '', '3057898375', 'ASIERRACO@IBERO.EDU.CO', 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL),
(27, 't', 'Juan Sebastian', 'Suarez Calderon', '1000465392', NULL, NULL, NULL, NULL, NULL, '', '3138191589', 'juan.suarez@ugc.edu.co', 't', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 1, NULL, NULL, 6),
(53, 't', 'MAURICIO ALBERTO', 'DÁVILA AGUJA', '1033704857', NULL, NULL, NULL, NULL, NULL, '', '3208223386', 'mauricio.davila@ugc.edu.co', 't', '260156', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, 1, NULL, NULL, 11),
(54, 't', 'CRISTIAN FERNEY', 'SANCHEZ  OSPINA', '1033757528', '2011-09-12', 'BOGOTA', '1993-07-11', '', 'CALLE 39A SUR # 73A 29 APTO402', '', '3194755783', 'CRISTIAN.SANCHEZ.OSPINA1310@GMAIL.COM', 'f', NULL, 'BOGOTA', NULL, NULL, NULL, NULL, 3, 1, NULL, NULL, 1, NULL, NULL, 1, 1, NULL, NULL),
(56, 't', 'CRISTIAN FERNEY', 'SANCHEZ  OSPINA', '1033757528', '2011-09-12', 'BOGOTA', '1993-07-11', '', 'CALLE 39A SUR # 73A 29 APTO402', '', '3194755783', 'CRISTIAN.SANCHEZ.OSPINA1310@GMAIL.COM', 'f', NULL, 'BOGOTA', NULL, NULL, NULL, NULL, 3, 1, NULL, NULL, 1, NULL, NULL, 1, 1, NULL, NULL),
(57, 't', 'ANGIE KATHERINE', 'SIERRA CORTES', '1012402697', NULL, NULL, NULL, NULL, 'CARRERA 78 B # 71 C 06 SUR', '', '3057898375', 'ASIERRACO@IBERO.EDU.CO', 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL),
(55, 't', 'ANGIE KATHERINE', 'SIERRA CORTES', '1012402697', '2011-09-14', 'BOGOTA D.C', '1993-09-04', '', 'CARRERA 78 B # 71 C 06 SUR', '', '3057898375', 'ASIERRACO@IBERO.EDU.CO', 'f', '', 'BOGOTA', NULL, NULL, 7, 5, 2, 2, 10, NULL, 2, NULL, 7, 1, 1, NULL, NULL),
(28, 't', 'Andres Felipe', 'Villamizar', '1010074595', NULL, NULL, NULL, NULL, NULL, '', '300 5126595', 'andres.villamizar@ugc.edu.co', 't', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 1, NULL, NULL, 7);

INSERT INTO "public"."Persona_solicitud" ("id", "estado", "nombres", "apellidos", "identificacion", "fecha_expedicion", "lugar_expedicion", "fecha_nacimiento", "telefono", "direccion", "celular", "correo", "lugar_nacimiento", "apoderado_id_id", "estrato_socioeconomico_id_id", "genero_id_id", "sexo_id_id", "tipo_documento_id_id", "tipo_persona_id_id") VALUES
(59, 't', 'CRISTIAN FERNEY', 'SANCHEZ  OSPINA', '1033757528', '2011-09-12', 'BOGOTA', '1993-07-11', '', 'CALLE 39A SUR # 73A 29 APTO402', '3194755783', 'CRISTIAN.SANCHEZ.OSPINA1310@GMAIL.COM', 'BOGOTA', NULL, 3, 1, 1, 1, 1);
INSERT INTO "public"."Persona_solicitud" ("id", "estado", "nombres", "apellidos", "identificacion", "fecha_expedicion", "lugar_expedicion", "fecha_nacimiento", "telefono", "direccion", "celular", "correo", "lugar_nacimiento", "apoderado_id_id", "estrato_socioeconomico_id_id", "genero_id_id", "sexo_id_id", "tipo_documento_id_id", "tipo_persona_id_id") VALUES
(60, 't', 'ANGIE KATHERINE', 'SIERRA CORTES', '1012402697', NULL, NULL, NULL, NULL, 'CARRERA 78 B # 71 C 06 SUR', '3057898375', 'ASIERRACO@IBERO.EDU.CO', NULL, NULL, NULL, NULL, NULL, 1, 1);


INSERT INTO "public"."Pregunta_encuesta" ("id", "estado", "nombre") VALUES
(1, 't', 'Servicio recibido por parte del conciliador');
INSERT INTO "public"."Pregunta_encuesta" ("id", "estado", "nombre") VALUES
(2, 't', 'Puntualidad del conciliador');
INSERT INTO "public"."Pregunta_encuesta" ("id", "estado", "nombre") VALUES
(3, 't', 'Dominio del tema del conciliador');
INSERT INTO "public"."Pregunta_encuesta" ("id", "estado", "nombre") VALUES
(4, 't', 'Lenguaje utilizado del conciliador'),
(5, 't', 'Manejo de la audiencia del conciliador'),
(6, 't', 'Imparcialidad del conciliador'),
(7, 't', 'Servicio prestado por el centro'),
(8, 't', 'Satisfacción por la información que brindada el Centro'),
(9, 't', 'Satisfacción por el tiempo de atención del centro'),
(10, 't', 'Amabilidad del personal del Centro'),
(11, 't', 'Expectativas en el tratamiento del conflicto'),
(12, 't', '¿Recomendaría la conciliación para resolver conflictos?');

INSERT INTO "public"."Pregunta_seguimiento" ("id", "estado", "nombre") VALUES
(1, 't', '¿Se cumplió o se está cumpliendo el acuerdo
de conciliación?');
INSERT INTO "public"."Pregunta_seguimiento" ("id", "estado", "nombre") VALUES
(2, 't', '¿El acuerdo alcanzado en la conciliación fue
llevado a proceso judicial?');
INSERT INTO "public"."Pregunta_seguimiento" ("id", "estado", "nombre") VALUES
(3, 't', '¿Existe reincidencia del conflicto que se
acordó en el caso de conciliación?');

INSERT INTO "public"."Relacion_persona_citacion" ("id", "estado", "citacion_id_id", "persona_id_id") VALUES
(62, 't', 16, 54);
INSERT INTO "public"."Relacion_persona_citacion" ("id", "estado", "citacion_id_id", "persona_id_id") VALUES
(63, 't', 16, 55);
INSERT INTO "public"."Relacion_persona_citacion" ("id", "estado", "citacion_id_id", "persona_id_id") VALUES
(64, 't', 16, 53);

INSERT INTO "public"."Relacion_persona_expediente" ("id", "estado", "expediente_id_id", "persona_id_id", "tipo_cliente_id_id") VALUES
(70, 't', 23, 54, 1);
INSERT INTO "public"."Relacion_persona_expediente" ("id", "estado", "expediente_id_id", "persona_id_id", "tipo_cliente_id_id") VALUES
(71, 't', 23, 55, 2);
INSERT INTO "public"."Relacion_persona_expediente" ("id", "estado", "expediente_id_id", "persona_id_id", "tipo_cliente_id_id") VALUES
(72, 't', 23, 53, 3);

INSERT INTO "public"."Relacion_persona_solicitud" ("id", "estado", "persona_id_id", "solicitud_id_id", "tipo_cliente_id_id") VALUES
(59, 't', 59, 30, 1);
INSERT INTO "public"."Relacion_persona_solicitud" ("id", "estado", "persona_id_id", "solicitud_id_id", "tipo_cliente_id_id") VALUES
(60, 't', 60, 30, 2);






INSERT INTO "public"."rest_framework_api_key_apikey" ("id", "created", "name", "revoked", "expiry_date", "hashed_key", "prefix") VALUES
('2ZwZtPbd.pbkdf2_sha256$320000$tb07mpt247R4Vpp24CWbnn$nj8Q3Md5K/lfPfW6zL79dokAOeWYEwl1yltha8Dl34E=', '2023-01-23 02:45:13.700117+00', 'api_gateway_Solicitudes', 'f', NULL, 'pbkdf2_sha256$320000$tb07mpt247R4Vpp24CWbnn$nj8Q3Md5K/lfPfW6zL79dokAOeWYEwl1yltha8Dl34E=', '2ZwZtPbd');
INSERT INTO "public"."rest_framework_api_key_apikey" ("id", "created", "name", "revoked", "expiry_date", "hashed_key", "prefix") VALUES
('wHo6CMs6.pbkdf2_sha256$390000$Q05enYosTbU0bI5XXDoYzS$VHXfGJuCEXH/0edS0O6cDPPsRC11lA7vHjSRiTl18NY=', '2023-01-23 02:40:33.421833+00', 'api_gateway_expedientes', 'f', NULL, 'pbkdf2_sha256$390000$Q05enYosTbU0bI5XXDoYzS$VHXfGJuCEXH/0edS0O6cDPPsRC11lA7vHjSRiTl18NY=', 'wHo6CMs6');






INSERT INTO "public"."Sexo" ("id", "estado", "nombre") VALUES
(1, 't', 'Hombre ');
INSERT INTO "public"."Sexo" ("id", "estado", "nombre") VALUES
(2, 't', 'Mujer');
INSERT INTO "public"."Sexo" ("id", "estado", "nombre") VALUES
(3, 't', 'intersexual');
INSERT INTO "public"."Sexo" ("id", "estado", "nombre") VALUES
(4, 't', 'Indeterminado');

INSERT INTO "public"."Solicitud" ("id", "numero_radicado", "fecha_registro", "comentario", "estado", "estado_solicitud_id_id") VALUES
(30, 'S20232CCJIT001', '2023-02-06', 'Su solicitud fue aprobada', 't', 2);


INSERT INTO "public"."Solicitud_servicio" ("id", "estado", "nombre") VALUES
(1, 't', 'LAS DOS PARTES');
INSERT INTO "public"."Solicitud_servicio" ("id", "estado", "nombre") VALUES
(2, 't', 'SOLO UNA DE LAS PARTES');
INSERT INTO "public"."Solicitud_servicio" ("id", "estado", "nombre") VALUES
(3, 't', 'MEDIANTE APODERADO');

INSERT INTO "public"."Subtema" ("id", "estado", "nombre", "tema_id_id") VALUES
(1, 't', 'Donaciones y modos de adquirir el dominio distintos de la compraventa o la sucesión por causa de muerte', 1);
INSERT INTO "public"."Subtema" ("id", "estado", "nombre", "tema_id_id") VALUES
(2, 't', 'Competencia desleal', 2);
INSERT INTO "public"."Subtema" ("id", "estado", "nombre", "tema_id_id") VALUES
(3, 't', 'Clausulas abusivas', 3);
INSERT INTO "public"."Subtema" ("id", "estado", "nombre", "tema_id_id") VALUES
(4, 't', 'Comercio electronico', 3),
(5, 't', 'Condiciones negociales y contratos de adhesion', 3),
(6, 't', 'Daños por producto defectuoso', 3),
(7, 't', 'Especulacion, acaparamiento y usura', 3),
(8, 't', 'Garantia legal', 3),
(9, 't', 'Garantias suplementarias', 3),
(10, 't', 'Informacion', 3),
(11, 't', 'Operaciones mediante sistemas de financiacion', 3),
(12, 't', 'Publicidad', 3),
(13, 't', 'Ventas por metodos no tradicionales o a distancia', 3),
(14, 't', 'Otros', 3),
(15, 't', 'Agencia comercial', 4),
(16, 't', 'Aparceria', 4),
(17, 't', 'Arrendamiento comercial', 4),
(18, 't', 'Arrendamiento de vivienda', 4),
(19, 't', 'Comision', 4),
(20, 't', 'Comodato', 4),
(21, 't', 'Compraventa distinta de actos de consumo', 4),
(22, 't', 'Consignacion', 4),
(23, 't', 'Contratos atipicos', 4),
(24, 't', 'Corretaje', 4),
(25, 't', 'Depositvo civil', 4),
(26, 't', 'Depositvo mercantil', 4),
(27, 't', 'Edicion', 4),
(28, 't', 'Mandato', 4),
(29, 't', 'Mutuo distinto de operaciones de crédito realizadas por establecimientos de crédito y sociedades de servicios financieros', 4),
(30, 't', 'Obra', 4),
(31, 't', 'Otras formas de arrendamiento distintas del arrendamiento financiero o leasing', 4),
(32, 't', 'Permuta', 4),
(33, 't', 'Preposicion', 4),
(34, 't', 'Suministro', 4),
(35, 't', 'Transaccion', 4),
(36, 't', 'Transporte de cosas', 4),
(37, 't', 'Transporte de personas', 4),
(38, 't', 'Otros', 4),
(39, 't', 'Cooperativas de ahorro y credito', 5),
(40, 't', 'Arrendamiento, usufructo y anticresis', 6),
(41, 't', 'Deshaucio', 6),
(42, 't', 'Renovacion del contrato de arrendamiento', 6),
(43, 't', 'Subarriendo', 6),
(44, 't', 'Otros', 6),
(45, 't', 'Anticresis sobre inmuebles', 7),
(46, 't', 'Fianza', 7),
(47, 't', 'Fiducia en garantia', 7),
(48, 't', 'Garantias inmobiliarias', 7),
(49, 't', 'Hipoteca', 7),
(50, 't', 'Otras garantias inmobiliarias', 7),
(51, 't', 'Propiedad horizontal', 8),
(52, 't', 'Responsabilidad extracontractual', 9),
(53, 't', 'Seguros', 10),
(54, 't', 'Sociedades, personas juridicas de derecho privado y otras formas asociativas', 11),
(55, 't', 'Titulos valores', 12),
(56, 't', 'Turismo', 13),
(57, 't', 'Otros', 14),
(58, 't', 'Prevencion de violencia intrafamiliar', 15),
(59, 't', 'Capitulaciones matrimoniales', 16),
(60, 't', 'Disolucion y liquidacion de la sociedad conyugal', 16),
(61, 't', 'Separacion de bienes y cuerpos', 16),
(62, 't', 'Alimentos', 17),
(63, 't', 'Custodia y regimen sobre menores e incapaces', 17),
(64, 't', 'Direccion conjunta del hogar y ejercicio de la patria potestad', 17),
(65, 't', 'Alimentos de adulto mayor', 17),
(66, 't', 'Rescision de la particion en las sucesiones', 18),
(67, 't', 'Declaracion de union marital de hecho', 19),
(68, 't', 'Disolucion y liquidacion de la sociedad patrimonial de hecho', 19),
(69, 't', 'Usura y recargo de ventas a plazo', 20),
(70, 't', 'Ofrecimiento engañoso de productos y servicios', 20),
(71, 't', 'Hurto simple cuya cuantía no exceda de 150 salarios mínimos mensuales legales vigentes', 21),
(72, 't', 'Hurto simple para hacer uso de la cosa, con restitución en término no mayor de 24 horas', 21),
(73, 't', 'Hurto simple cometido por socio, copropietario, comunero o heredero, o sobre cosa común indivisible o común divisible, excediendo su cuota parte', 21),
(74, 't', 'Alteración, desfiguración y suplantación de marcas de ganado', 21),
(75, 't', 'Estafa cuya cuantía no exceda de 150 salarios mínimos mensuales legales vigentes', 21),
(76, 't', 'Emisión y transferencia ilegal de cheques', 21),
(77, 't', 'Abuso de confianza', 21),
(78, 't', 'Aprovechamiento de error ajeno o caso fortuito', 21),
(79, 't', 'Alzamiento de bienes', 21),
(80, 't', 'Sustracción de bien propio', 21),
(81, 't', 'Disposición de bien propio gravado con prenda (garantía mobiliaria)', 21),
(82, 't', 'Defraudación de fluidos', 21),
(83, 't', 'Malversación y dilapidación de bienes', 21),
(84, 't', 'Usurpación de inmuebles', 21),
(85, 't', 'Usurpación de aguas', 21),
(86, 't', 'Invasión de tierras o edificaciones', 21),
(87, 't', 'Perturbación de la posesión sobre inmueble', 21),
(88, 't', 'Daño en bien ajeno', 21),
(89, 't', 'Abuso de autoridad por acto arbitrario e injusto', 22),
(90, 't', 'Abuso de autoridad por omisión de denuncia simple', 22),
(91, 't', 'Revelación de secreto simple', 22),
(92, 't', 'Utilización indebida de información oficial privilegiada', 22),
(93, 't', 'Asesoramiento y otras actuaciones ilegales simple', 22),
(94, 't', 'Intervención en política', 22),
(95, 't', 'Utilización indebida de información obtenida en el ejercicio de función pública', 22),
(96, 't', 'Utilización indebida de influencias derivadas del ejercicio de función pública', 22),
(97, 't', 'Utilización de asunto sometido a secreto o reserva', 22),
(98, 't', 'Falsa autoacusación', 23),
(99, 't', 'Favorecimiento de la fuga culposa simple', 23),
(100, 't', 'Infidelidad a los deberes profesionales', 23),
(101, 't', 'Aceptación indebida de honores', 24),
(102, 't', 'Violación de inmunidad diplomática', 24),
(103, 't', 'Maltrato mediante restricción a la libertad física', 25),
(104, 't', 'Malversación y dilapidación de los bienes de familiares', 25),
(105, 't', 'Inasistencia alimentaria', 25),
(106, 't', 'Circulación y uso de efecto oficial o sello falsificado', 26),
(107, 't', 'Falsedad para obtener prueba de hecho verdadero', 26),
(108, 't', 'Falsedad personal', 26),
(109, 't', 'Falsificación o uso fraudulento de sello oficial', 26),
(110, 't', 'Supresión de signo de anulación de efecto oficial', 26),
(111, 't', 'Uso y circulación de efecto oficial anulado', 26),
(112, 't', 'Calumnia', 27),
(113, 't', 'Injuria', 27),
(114, 't', 'Injuria por vías de hecho', 27),
(115, 't', 'Injuria y calumnia indirecta', 27),
(116, 't', 'Injurias recíprocas', 27),
(117, 't', 'Daños o agravios a personas o a cosas destinadas al culto', 28),
(118, 't', 'Divulgación y empleo de documentos reservados', 28),
(119, 't', 'Impedimento y perturbación de ceremonia religiosa', 28),
(120, 't', 'Irrespeto a cadáveres', 28),
(121, 't', 'Ofrecimiento, venta o compra de instrumento apto para interceptar la comunicación privada entre personas', 28),
(122, 't', 'Violación a la libertad religiosa', 28),
(123, 't', 'Violación de habitación ajena', 28),
(124, 't', 'Violación de habitación ajena por servidor público', 28),
(125, 't', 'Violación de la libertad de trabajo', 28),
(126, 't', 'Violación de los derechos de reunión y asociación', 28),
(127, 't', 'Violación en lugar de trabajo', 28),
(128, 't', 'Omisión de denuncia de quien tuviere conocimiento de la utilización de menores para la realización de delitos de explotación sexual', 29),
(129, 't', 'Instigación a delinquir simple', 30),
(130, 't', 'Inducción o ayuda al suicidio', 31),
(131, 't', 'Lesiones personales sin secuelas que produjeren incapacidad para trabajar o enfermedad sin exceder de sesenta (60) días', 31),
(132, 't', 'Lesiones personales con deformidad física transitoria', 31),
(133, 't', 'Lesiones personales con perturbación funcional transitoria', 31),
(134, 't', 'Parto o aborto preterintencional', 31),
(135, 't', 'Lesiones personales culposas', 31),
(136, 't', 'Omisión de socorro', 31);

INSERT INTO "public"."Tema" ("id", "estado", "nombre") VALUES
(1, 't', 'Bienes');
INSERT INTO "public"."Tema" ("id", "estado", "nombre") VALUES
(2, 't', 'Competencia desleal');
INSERT INTO "public"."Tema" ("id", "estado", "nombre") VALUES
(3, 't', 'Consumo');
INSERT INTO "public"."Tema" ("id", "estado", "nombre") VALUES
(4, 't', 'Contratos'),
(5, 't', 'Economia solidaria'),
(6, 't', 'Establecimiento de comercio'),
(7, 't', 'Garantias'),
(8, 't', 'Propiedad horizontal'),
(9, 't', 'Responsabilidad extracontractual'),
(10, 't', 'Seguros'),
(11, 't', 'Sociedades, personas juridicas de derecho privado y otras formas asociativas'),
(12, 't', 'Titulos valores'),
(13, 't', 'Turismo'),
(14, 't', 'Otros'),
(15, 't', 'Convivencia'),
(16, 't', 'Matrimonio'),
(17, 't', 'Obligaciones frente a los hijos e incapaces'),
(18, 't', 'Sucesiones'),
(19, 't', 'Union marital del hecho'),
(20, 't', 'Delitos contra el orden economico social'),
(21, 't', 'Delitos contra el patrimonio economico'),
(22, 't', 'Delitos contra la administracion publica'),
(23, 't', 'Delitos contra la eficaz y recta imparticion de justicia'),
(24, 't', 'Delitos contra la existencia y seguridad del estado'),
(25, 't', 'Delitos contra la familia'),
(26, 't', 'Delitos contra la fe publica'),
(27, 't', 'Delitos contra la integridad moral'),
(28, 't', 'Delitos contra la libertad individual y otras garantias'),
(29, 't', 'Delitos contra la libertad , integridad y formacion sexuales'),
(30, 't', 'Delitos contra la seguridad publica'),
(31, 't', 'Delito contra la vida y la integridad personal');

INSERT INTO "public"."Tipo_cargo" ("id", "estado", "nombre") VALUES
(1, 't', 'Administrador');
INSERT INTO "public"."Tipo_cargo" ("id", "estado", "nombre") VALUES
(2, 't', 'Docente conciliador');
INSERT INTO "public"."Tipo_cargo" ("id", "estado", "nombre") VALUES
(3, 't', 'Estudiante');

INSERT INTO "public"."Tipo_cliente" ("id", "estado", "nombre") VALUES
(1, 't', 'Convocante');
INSERT INTO "public"."Tipo_cliente" ("id", "estado", "nombre") VALUES
(2, 't', 'Convocado');
INSERT INTO "public"."Tipo_cliente" ("id", "estado", "nombre") VALUES
(3, 't', 'Conciliador');
INSERT INTO "public"."Tipo_cliente" ("id", "estado", "nombre") VALUES
(4, 't', 'Estudiante');

INSERT INTO "public"."Tipo_discapacidad" ("id", "estado", "nombre") VALUES
(1, 't', 'Física');
INSERT INTO "public"."Tipo_discapacidad" ("id", "estado", "nombre") VALUES
(2, 't', 'Sensorial auditiva');
INSERT INTO "public"."Tipo_discapacidad" ("id", "estado", "nombre") VALUES
(3, 't', 'Sensorial visual');
INSERT INTO "public"."Tipo_discapacidad" ("id", "estado", "nombre") VALUES
(4, 't', 'Intelectual cognitiva'),
(5, 't', 'Mental psicosocial'),
(6, 't', 'Discapacidad múltiple'),
(7, 't', 'Ninguna');

INSERT INTO "public"."Tipo_documento" ("id", "estado", "nombre") VALUES
(1, 't', 'Cedula de Ciudadania');
INSERT INTO "public"."Tipo_documento" ("id", "estado", "nombre") VALUES
(2, 't', 'Cedula de Extranjeria ');
INSERT INTO "public"."Tipo_documento" ("id", "estado", "nombre") VALUES
(3, 't', 'Tarjeta de Identidad ');
INSERT INTO "public"."Tipo_documento" ("id", "estado", "nombre") VALUES
(4, 't', 'Registro Civil '),
(5, 't', 'Pasaporte '),
(6, 't', 'Nit ');

INSERT INTO "public"."Tipo_medio" ("id", "estado", "nombre") VALUES
(1, 't', 'Presencial');
INSERT INTO "public"."Tipo_medio" ("id", "estado", "nombre") VALUES
(2, 't', 'Virtual');
INSERT INTO "public"."Tipo_medio" ("id", "estado", "nombre") VALUES
(3, 't', 'Mixto');

INSERT INTO "public"."Tipo_persona" ("id", "estado", "nombre") VALUES
(1, 't', 'Natural');
INSERT INTO "public"."Tipo_persona" ("id", "estado", "nombre") VALUES
(2, 't', 'Jurídica');


INSERT INTO "public"."Tipo_reporte" ("id", "estado", "nombre") VALUES
(1, 't', 'Consecutivos Resultados');
INSERT INTO "public"."Tipo_reporte" ("id", "estado", "nombre") VALUES
(2, 't', 'SNIES');


INSERT INTO "public"."Tipo_resultado" ("id", "estado", "nombre", "categoria_id_id") VALUES
(1, 't', 'ACTA CONTRATO DE ARRENDAMIENTO', 1);
INSERT INTO "public"."Tipo_resultado" ("id", "estado", "nombre", "categoria_id_id") VALUES
(2, 't', 'ACTA ACUERDO DE ALIMENTOS', 1);
INSERT INTO "public"."Tipo_resultado" ("id", "estado", "nombre", "categoria_id_id") VALUES
(3, 't', 'CONSTANCIA DE ASUNTO NO CONCILIABLE', 2);
INSERT INTO "public"."Tipo_resultado" ("id", "estado", "nombre", "categoria_id_id") VALUES
(4, 't', 'CONSTANCIA DE INASISTENCIA', 2),
(5, 't', 'CONSTANCIA DE NO ACUERDO', 2),
(6, 't', 'IMPOSIBILIDAD DE NOTIFICACION', 3),
(7, 't', 'ACTA CONTRATO DE MUTUO', 1),
(8, 't', 'ACTA DE CONCILIACIÓN DE RESPONSABILIDAD CIVIL EXTR', 1),
(9, 't', 'ACTA DECLARACION UMH SOCIEDAD PATRIMONIAL SU DISOL', 1),
(10, 't', 'HOJA DE TRABAJO', 3),
(11, 't', 'CITACION AUDIENCIA DE CONCILIACION', 2);

INSERT INTO "public"."Tipo_servicio" ("id", "estado", "nombre", "Objetivo_servicio_id_id") VALUES
(1, 't', 'Requisito de procedibilidad', NULL);
INSERT INTO "public"."Tipo_servicio" ("id", "estado", "nombre", "Objetivo_servicio_id_id") VALUES
(2, 't', 'Resolver de manera alternativa el conflicto', NULL);


INSERT INTO "public"."Tipo_vivienda" ("id", "estado", "nombre") VALUES
(1, 't', 'Propia');
INSERT INTO "public"."Tipo_vivienda" ("id", "estado", "nombre") VALUES
(2, 't', 'Arrendada');


INSERT INTO "public"."Turno" ("id", "estado", "nombre") VALUES
(1, 't', '8:00AM');
INSERT INTO "public"."Turno" ("id", "estado", "nombre") VALUES
(2, 't', '9:00AM');
INSERT INTO "public"."Turno" ("id", "estado", "nombre") VALUES
(3, 't', '10:00AM');
INSERT INTO "public"."Turno" ("id", "estado", "nombre") VALUES
(4, 't', '11:00AM'),
(5, 't', '12:00PM'),
(6, 't', '1:00PM'),
(7, 't', '2:00PM'),
(8, 't', '3:00PM'),
(9, 't', '4:00PM'),
(10, 't', '5:00PM');
