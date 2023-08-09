SELECT COUNT (expedientes) as Expedientes,
SUM(CASE WHEN categoria_id_id = 1 THEN 1 ELSE 0 END) AS Resultados, semestre
FROM (

SELECT e.id as expedientes,r.id as resultado,tr.categoria_id_id, e.fecha_registro,
CASE
	   WHEN EXTRACT(MONTH FROM e.fecha_registro) <= 6 THEN 1
	   ELSE 2
	   END AS semestre
	   
FROM "Expediente" as e
LEFT JOIN "Resultado" as r ON e.id=r.expediente_id_id
LEFT JOIN "Tipo_resultado" as tr ON r.tipo_resultado_id_id=tr.id
WHERE e.fecha_registro BETWEEN 'fecha_inicio' AND 'fecha_fin') as resultados_expedientes
GROUP BY semestre
