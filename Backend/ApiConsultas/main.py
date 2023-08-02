
from flask import Flask, jsonify,request

import psycopg2
import io
import os
import json
import csv
app = Flask(__name__)
app.config['NAME'] = os.getenv("DB_NAME", "db_conciliacion_jit_expedientes")
app.config['USER'] = os.getenv("DB_USER", "jit_expedientes")
app.config['PASSWORD'] = os.getenv("DB_PASS", "Ugc$%jit2022")
app.config['HOST'] = os.getenv("DB_HOST", "172.20.100.5")
app.config['PORT'] = os.getenv("PORT", '5435')

def conexion():
     
    conn = psycopg2.connect(
        host=app.config['HOST'],
        database=app.config['NAME'],
        user=app.config['USER'],
        password=app.config['PASSWORD'],
        port=app.config['PORT']
    )

    return conn
@app.route('/',methods=['POST'])

def informe():

    data = request.get_json()

    conn=conexion()
    cursor = conn.cursor()
    
    try:
        with open("sql/"+data['nombre']+'.sql', 'r') as file:  #data['nombre']+'.sql', 'r'
                sql_query = file.read()
    except IOError as e:
        return "Error al abrir el archivo",404
    
    sql_query = sql_query.replace('fecha_inicio', data['fecha_inicio'])
    sql_query = sql_query.replace('fecha_fin', data['fecha_fin'])
    cursor.execute(sql_query)
    # Obtener los resultados como una lista de diccionarios
    column_names = [desc[0] for desc in cursor.description]
    
    results = []
    for row in cursor.fetchall():
        results.append(dict(zip(column_names, row)))

    # Cerrar el cursor y la conexión a la base de datos
    cursor.close()
    conn.close()
    
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=False, port=5000)