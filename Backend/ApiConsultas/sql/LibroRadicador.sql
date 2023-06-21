SELECT
e.id,
    CAST(e.fecha_registro as VARCHAR(10)) as fecha_registro,
    e.numero_caso,
    a.nombre AS materia,
    sb.nombre AS subtema,
    tm.nombre AS tema,
    CONCAT(p.nombres, '', p.apellidos) AS convocante,
    p.identificacion as "convocante_identificacion", 
    p.fecha_nacimiento,
   	DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) AS edad,
    CASE
        WHEN DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) >=12 and  DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) <=25  THEN 'Jovenes'
        WHEN DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) >=26 and  DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) <=60  THEN 'Adultos'
        WHEN DATE_PART('year', AGE(current_date, p.fecha_nacimiento))>=60 THEN 'Adultos Mayores'
    END AS "poblacion ciclo vital",
    g.nombre  as "convocante_genero",
    b.nombre  as "convocante_barrio",
    l.nombre as "convocante_localidad",
    es.nombre  as "convocante_estrato",
    CONCAT(p2.nombres, '', p2.apellidos) AS convocado,
    p2.identificacion as "convocado_identificacion",
    g2.nombre  as "convocado_genero", 
    b2.nombre  as "convocado_barrio", 
    l2.nombre  as "convocado_localidad",
    es2.nombre  as "convocado_estrato",
    CONCAT(p3.nombres, '', p3.apellidos) AS conciliador,
    CAST(c.fecha_sesion as VARCHAR(10)) as fecha_sesion,
    est.nombre AS "estado_tramite", 
    tr.nombre AS resultado,
    r.consecutivo AS "no. resultado",
    CASE
        WHEN s.se_cumplio_acuerdo = 'True' THEN 'Si'
        WHEN s.se_cumplio_acuerdo = 'False' THEN 'No'
    END AS se_cumplio_acuerdo,
   
    NULL as RUG,
    NULL as COMISARIA,
    NULL as REMITE,
    mc.nombre as medio_conocimiento,
    re.*
    
    
FROM
    "Expediente" AS e
    LEFT JOIN "Area" AS a ON e.area_id_id = a.id
    LEFT JOIN "Subtema" AS sb ON e.subtema_id_id = sb.id
    LEFT JOIN "Tema" AS tm ON sb.tema_id_id = tm.id
    LEFT JOIN (
        SELECT
            expediente_id_id,
            tipo_cliente_id_id,
            persona_id_id
        FROM
            (
                SELECT
                    expediente_id_id,
                    tipo_cliente_id_id,
                    persona_id_id,
                    ROW_NUMBER() OVER (
                        PARTITION BY expediente_id_id,
                        tipo_cliente_id_id
                        ORDER BY
                            persona_id_id
                    ) AS row_num
                FROM
                    "Relacion_persona_expediente"
            ) AS subquery
        WHERE
            row_num = 1
            and tipo_cliente_id_id = 1
    ) AS rpe ON e.id = rpe.expediente_id_id
    LEFT JOIN "Persona" AS p ON rpe.persona_id_id = p.id
    LEFT JOIN "Genero" as g ON p.genero_id_id = g.id
    LEFT JOIN "Barrio" as b ON p.barrio_id_id = b.id
    LEFT JOIN "Localidad" as l ON b.localidad_id_id = l.id
    LEFT JOIN "Estrato_socioeconomico" as es ON p.estrato_socioeconomico_id_id = es.id
    LEFT JOIN "Citacion" as c ON e.id = c.expediente_id_id
    LEFT JOIN "Estado_expediente" as est ON e.estado_expediente_id_id = est.id
    LEFT JOIN "Resultado" as r ON e.id = r.expediente_id_id
    LEFT JOIN "Tipo_resultado" as tr ON r.tipo_resultado_id_id = tr.id
    LEFT JOIN "Seguimiento" as s ON e.id = s.expediente_id_id
    
 --            Convocado 
     LEFT JOIN (
        SELECT
            expediente_id_id,
            tipo_cliente_id_id,
            persona_id_id
        FROM
            (
                SELECT
                    expediente_id_id,
                    tipo_cliente_id_id,
                    persona_id_id,
                    ROW_NUMBER() OVER (
                        PARTITION BY expediente_id_id,
                        tipo_cliente_id_id
                        ORDER BY
                            persona_id_id
                    ) AS row_num
                FROM
                    "Relacion_persona_expediente"
            ) AS subquery
        WHERE
            row_num = 1
            and tipo_cliente_id_id = 2
    ) AS rpe2 ON e.id = rpe2.expediente_id_id

    LEFT JOIN "Persona" AS p2 ON rpe2.persona_id_id = p2.id
    LEFT JOIN "Genero" as g2 ON p2.genero_id_id = g2.id
    LEFT JOIN "Barrio" as b2 ON p2.barrio_id_id = b2.id
    LEFT JOIN "Localidad" as l2 ON b2.localidad_id_id = l2.id
    LEFT JOIN "Estrato_socioeconomico" as es2 ON p2.estrato_socioeconomico_id_id = es2.id

 --            Conciliador 
LEFT JOIN (
        SELECT
            expediente_id_id,
            tipo_cliente_id_id,
            persona_id_id
        FROM
            (
                SELECT
                    expediente_id_id,
                    tipo_cliente_id_id,
                    persona_id_id,
                    ROW_NUMBER() OVER (
                        PARTITION BY expediente_id_id,
                        tipo_cliente_id_id
                        ORDER BY
                            persona_id_id
                    ) AS row_num
                FROM
                    "Relacion_persona_expediente"
            ) AS subquery
        WHERE
            row_num = 1
            and tipo_cliente_id_id = 3
    ) AS rpe3 ON e.id = rpe3.expediente_id_id
    LEFT JOIN "Persona" AS p3 ON rpe3.persona_id_id = p3.id
    LEFT JOIN "Encuesta" AS en ON e.id = en.expediente_id_id
    LEFT JOIN "Medio_conocimiento" AS mc ON en.medio_conocimiento_id_id = mc.id
    LEFT JOIN (
    Select * from
	crosstab('SELECT encuesta_id_id,nombre,calificacion from "Respuesta_encuesta"','SELECT DISTINCT nombre FROM "Respuesta_encuesta"')
	as Respuesta_encuesta(encuesta_id int, pregunta1 int, pregunta2 int, pregunta3 int, pregunta4 int , pregunta5 int, pregunta6 int, pregunta7 int , pregunta8 int, pregunta9 int, pregunta10 int, pregunta11 int , pregunta12 int)
) as re ON en.id = re.encuesta_id
    
  
    WHERE e.fecha_registro >= 'fecha_inicio' AND e.fecha_registro <= 'fecha_fin';