SELECT  e.numero_caso,tr.nombre as resultado, cr.nombre as "Tipo_resultado",r.consecutivo,r.fecha as "fecha resultado" from "Resultado" AS r
LEFT JOIN "Tipo_resultado" as tr ON r.tipo_resultado_id_id = tr.id
LEFT JOIN "Categoria_resultado" as cr ON tr.categoria_id_id = cr.id
LEFT JOIN "Expediente" as e ON r.expediente_id_id = e.id
WHERE e.fecha_registro >= 'fecha_inicio' AND e.fecha_registro <= 'fecha_fin';