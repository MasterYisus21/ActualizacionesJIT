const ExcelJS = require('exceljs');

const funcion={}


funcion.LibroRadicador=async (res,datos)=> {

  
  const workbook = new ExcelJS.Workbook();

  workbook.views = [ // controlan cuántas ventanas separadas Excel abrirá al ver el libro de trabajo.
      {
        x: 0, y: 0, width: 10000, height: 20000,
        firstSheet: 0, activeTab: 1, visibility: 'visible'
      }
    ]
    const sheet = workbook.addWorksheet('Informe', {properties:{tabColor:{argb:'008A3E'}}}); //  agregar hoja de trabajo 
    const worksheet = workbook.getWorksheet('Informe')

    worksheet.mergeCells('A1', 'AN'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('A2', 'D2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('E2', 'J2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('K2', 'P2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('Q2', 'Q2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('R2', 'R2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('S2', 'T2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('W2', 'Z2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('AA2', 'AE2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('AF2', 'AJ2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('AK2', 'AM2'); // CINBINAR CELDAS DE CELDA A CELDA
    worksheet.mergeCells('AN2', 'AN2'); // CINBINAR CELDAS DE CELDA A CELDA

    // VALORES FILA 2


//     //   worksheet.columns = [
//     //     { header: 'Id', key: 'id', width: 10 },
//     //     { header: 'Name', key: 'name', width: 32,style: { font: { color: { argb: 'FF00FF00' }} }},
//     //     { header: 'D.O.B.', key: 'dob', width: 40 }
//     //   ];


//    //worksheet.getRow(2).style = { font:font , fill:backgroundRow2}
// //    worksheet.getRow(2).fill(backgroundRow2).font(font)

 





 

    worksheet.getCell('A2').value = 'DATOS DE SOLICITUD DE AUDIENCIA';
    worksheet.getCell('E2').value = 'DATOS DE SOLICITUD DE AUDIENCIA';
    worksheet.getCell('K2').value = 'DATOS CONVOCADO';
    worksheet.getCell('Q2').value = 'FECHA AUDIENCIA';
    worksheet.getCell('R2').value = 'ESTADO';
    worksheet.getCell('S2').value = 'RESULTADO DEL TRÁMITE';
    worksheet.getCell('U2').value = 'SEGUIMIENTO';
    worksheet.getCell('V2').value = 'SNIES';
    worksheet.getCell('W2').value = '';
    worksheet.getCell('AA2').value = 'EVALUACIÓN DEL CONCILIADOR';
    worksheet.getCell('AF2').value = 'EVALUACIÓN DEL CENTRO';
    worksheet.getCell('AK2').value = 'EVALUACIÓN DEL MECANISMO';
    worksheet.getCell('AN2').value = '¿POR CUÁL MEDIO CONOCIÓ EL CENTRO DE CONCILIACION? ';

    //  Style }
    const fontEncabezado = {name: 'FrankRuehl', family: 4, size: 25,color:{argb:'008A3E'} }; // 
    const font = {name: 'Calibri', family: 4, size: 10,color:{argb:'FFFFFF'} }; // 
    const fontFilasDatos = {name: 'Calibri', family: 4, size: 8,color:{argb:'000000'} }; // 
    const fontTitulos = {name: 'Calibri', family: 4, size: 10,color:{argb:'FFFFFF'} }; // 
    const backgroundRow2 = {type: 'pattern',pattern:'solid',fgColor:{argb:'215967'},bgColor:{argb:'215967'}};
    const backgroundRow3 = {type: 'pattern',pattern:'solid',fgColor:{argb:'008A3E'},bgColor:{argb:'008A3E'}};

    const border  = {top: {style:'thin'},left: {style:'thin'},bottom: {style:'thin'},right: {style:'thin'}};
 
    worksheet.getRows(1).font=font
    
         // Ajuste Filas

    worksheet.getRow(1).alignment = alignment = { vertical: 'top', horizontal: 'left' };;
    worksheet.getRow(1).font= fontEncabezado 
    worksheet.getRow(1).height= 50;
    worksheet.getRow(2).alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getRow(2).fill= backgroundRow2
     
    worksheet.getRow(2).font= font 
    worksheet.getRow(2).height= 25;
    

    

    
    

      worksheet.columns = [
              { header: 'FECHA SOLICITUD', key: 'fecha_registro',width:15.64},
              { header: 'No. TRAMITE', key: 'numero_caso', width: 12.3},// { header: 'No. De Tramite', key: 'numero_solicitud', width: 32,style: { font: { color: { argb: 'FF00FF00' }} }},
              { header: 'MATERIA', key: 'materia', width: 13.06 },
              { header: 'ASUNTO', key: 'tema', width: 35 },
              { header: 'CONVOCANTE', key: 'convocante', width: 22.6 },
              { header: 'NO DE DOCUMENTO', key: 'convocante_identificacion', width: 16.9 },
              { header: 'GENERO', key: 'convocante_genero', width: 10.1 },
              { header: 'ESTRATO', key: 'convocante_estrato', width: 10.9 },
              { header: 'LOCALIDAD', key: 'convocante_localidad', width: 15 },
              { header: 'BARRIO', key: 'convocante_barrio', width: 15 },
              { header: 'CONVOCADO', key: 'convocado', width: 22.6 },
              { header: 'NO DE DOCUMENTO', key: 'convocado_identificacion', width: 16.9 },
              { header: 'GENERO', key: 'convocado_genero', width: 10.1 },
              { header: 'ESTRATO', key: 'convocado_estrato', width: 10.9 },
              { header: 'LOCALIDAD', key: 'convocado_localidad', width: 15 },
              { header: 'BARRIO', key: 'convocado_barrio', width: 15 },
              // { header: 'MODALIDAD', key: 'Modalidad', width: 15 },
              { header: 'FECHA  DE AUDIENCIA', key: 'fecha_sesion', width: 19.2 },
              { header: 'ESTADO DEL TRAMITE', key: 'estado_tramite', width: 19 },
              { header: 'NUEVA FECHA', key: 'fecha_nueva_sesion', width: 15 },
              { header: 'RESULTADO DEL TRÁMITE ', key: 'resultado', width: 39 },
              { header: 'No. RESULTAD', key: 'no. resultado', width: 18 },
              { header: 'CUMPLIO', key: 'cumplio', width: 11.7 },
              { header: 'POBLACIÓN CICLO VITAL', key: 'poblacion ciclo vital', width: 19.5 },
              { header: 'CONCILIADOR', key: 'conciliador', width: 22.6 },
              { header: 'RUG', key: 'rug', width: 15 },
              { header: 'COMISARIA', key: 'comisaria', width: 15 },
              { header: 'REMITE', key: 'remite', width: 15 },
              { header: 'Servicio recibido por parte del conciliador', key: 'pregunta1', width: 40 },
              { header: 'Puntualidad', key: 'pregunta2', width: 40 },
              { header: 'Dominio del tema', key: 'pregunta3', width: 40 },
              { header: 'Lenguaje utilizado', key: 'pregunta4', width: 40 },
              { header: 'Manejo de la audiencia', key: 'pregunta5', width: 40 },
              { header: 'Servicio prestado por el centro', key: 'pregunta6', width: 40 },
              { header: 'Imparcialidad', key: 'pregunta7', width: 40 },
              { header: 'Satisfacción por la información que brindada el ', key: 'pregunta8', width: 40 },
              { header: 'Satisfacción por el tiempo de atención', key: 'pregunta9', width: 40 },
              { header: 'Amabilidad del personal del Centro', key: 'pregunta10', width: 40 },
              { header: '¿La conciliación lleno sus expectativas en el tratamiento del ', key: 'pregunta11', width: 49 },
              { header: '¿Recomendaría la conciliación para resolver ', key: 'pregunta12', width: 40 },
              { header: 'Medio Conocimiento', key: 'medio_conocimiento', width: 49 },
             


            ];
          
            
            // for (const iterator of info[0]) {

            //   worksheet.columns = worksheet.columns.concat({ header: iterator.Pregunta, key: 'Pregunta_Id_'+iterator.Id, width: 35 })
            // }

            // for (const iterator of info[1]) {

            //   worksheet.columns = worksheet.columns.concat({ header: iterator.Nombre, key: 'Medio_conocimiento_'+iterator.Nombre, width: 12 })
            // }
          
          const rows = {}
          for (const iterator of worksheet.columns) {
              rows[iterator.key]=iterator.header
          }
          
          worksheet.addRow(rows, 'n');
          worksheet.getCell('C1').value = '                             REGISTRO DE AUDIENCIAS DE CONCILIACIÓN';

          worksheet.getRow(3).alignment = { vertical: 'middle', horizontal: 'center' };
          worksheet.getRow(3).height= 26;
          worksheet.getRow(3).fill= backgroundRow3
          worksheet.getRow(3).border=border
          worksheet.getRow(3).font=fontTitulos
          // FILTROS
          
          //worksheet.autoFilter = 'A3:W3'
        

         // Imagen

         const logotipo_ugc = workbook.addImage({
          filename: 'logotipo_ugc.png',
          extension: 'jpeg',
        });

        worksheet.addImage(logotipo_ugc, {
          tl: { col: 0.2, row: 0.1 },
          br: { col: 1.6, row: 1.35 }
        });

         
          for (const iterator of datos) {
              let fila=worksheet.addRow(iterator, 'n')
              fila.border=border
              fila.font=fontFilasDatos
              fila.alignment = { vertical: 'middle', horizontal: 'center' }
          }
         
          // formato condicional
          
          
          worksheet.addConditionalFormatting({
              ref: "A3:AN"+ worksheet.lastRow.number ,
              rules: [
                {
                  type: 'containsText',
                  operator: 'containsBlanks',
                  text:"",
                  style: {fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: 'B7DEE8'}}},
                }
              ]
            })
  


            res.setHeader(
              'Content-Type',
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            );
            res.setHeader('Content-Disposition', 'attachment; filename=example.xlsx');
          
            // Escribir el libro de Excel en la respuesta HTTP
            workbook.xlsx.write(res)
              .then(() => {
                res.end();
              })
              .catch((error) => {
                console.error('Error al generar el archivo Excel:', error);
                res.status(500).send('Error al generar el archivo Excel');
              });
    // await workbook.xlsx.writeFile("Formato Consolidado.xlsx")
      
      
   
}


module.exports = funcion;