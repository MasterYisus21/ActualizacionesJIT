SELECT

    e.numero_caso,
    a.nombre as area,

    g.nombre AS genero,  
    DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) AS edad,
    CASE
        WHEN DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) >=12 and  DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) <=25  THEN 'Jovenes'
        WHEN DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) >=26 and  DATE_PART('year', AGE(current_date, p.fecha_nacimiento)) <=60  THEN 'Adultos'
        WHEN DATE_PART('year', AGE(current_date, p.fecha_nacimiento))>=60 THEN 'Adultos Mayores'
    END AS "poblacion ciclo vital"
from
    "Expediente" as e
    LEFT JOIN "Area" AS a ON e.area_id_id = a.id
   
    LEFT JOIN (
        SELECT
            expediente_id_id,   70
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
    WHERE e.fecha_registro >= 'fecha_inicio' AND e.fecha_registro <= 'fecha_fin';
    