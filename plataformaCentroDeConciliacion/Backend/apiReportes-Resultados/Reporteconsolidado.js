
const ExcelJS = require('exceljs');

const funcion={}


funcion.GenerarReporte=async (res,info)=> {

  
    const workbook = new ExcelJS.Workbook();

    workbook.views = [ // controlan cuántas ventanas separadas Excel abrirá al ver el libro de trabajo.
        {
          x: 0, y: 0, width: 10000, height: 20000,
          firstSheet: 0, activeTab: 1, visibility: 'visible'
        }
      ]
      const sheet = workbook.addWorksheet('Informe', {properties:{tabColor:{argb:'008A3E'}}}); //  agregar hoja de trabajo 
      const worksheet = workbook.getWorksheet('Informe')

      worksheet.mergeCells('A1', 'AU'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('A2', 'D2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('E2', 'I2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('J2', 'N2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('O2', 'P2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('Q2', 'R2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('S2', 'T2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('W2', 'Z2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('AA2', 'AE2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('AF2', 'AJ2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('AK2', 'AL2'); // CINBINAR CELDAS DE CELDA A CELDA
      worksheet.mergeCells('AM2', 'AR2'); // CINBINAR CELDAS DE CELDA A CELDA

 

   
 
      worksheet.getCell('A2').value = 'DATOS DE SOLICITUD DE AUDIENCIA';
      worksheet.getCell('E2').value = 'DATOS DE SOLICITUD DE AUDIENCIA';
      worksheet.getCell('J2').value = 'DATOS CONVOCADO';
      worksheet.getCell('O2').value = 'FECHA AUDIENCIA';
      worksheet.getCell('Q2').value = 'ESTADO';
      worksheet.getCell('S2').value = 'RESULTADO DEL TRÁMITE';
      worksheet.getCell('U2').value = 'SEGUIMIENTO';
      worksheet.getCell('V2').value = 'SNIES';
      worksheet.getCell('W2').value = '';
      worksheet.getCell('AA2').value = 'EVALUACIÓN DEL CONCILIADOR';
      worksheet.getCell('AF2').value = 'EVALUACIÓN DEL CENTRO';
      worksheet.getCell('AK2').value = 'EVALUACIÓN DEL MECANISMO';
      worksheet.getCell('AM2').value = '¿POR CUÁL MEDIO CONOCIÓ EL CENTRO DE CONCILIACION? ';

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
                { header: 'FECHA SOLICITUD', key: 'Fecha_registro',width:15.64},
                { header: 'No. TRAMITE', key: 'Numero_caso', width: 12.3},// { header: 'No. De Tramite', key: 'numero_solicitud', width: 32,style: { font: { color: { argb: 'FF00FF00' }} }},
                { header: 'MATERIA', key: 'Area_Id', width: 13.06 },
                { header: 'ASUNTO', key: 'Tema', width: 14 },
                { header: 'CONVOCANTE', key: 'Convocante_nombre', width: 22.6 },
                { header: 'NO DE DOCUMENTO', key: 'Convocante_identificacion', width: 16.9 },
                { header: 'GENERO', key: 'Convocante_genero', width: 10.1 },
                { header: 'ESTRATO', key: 'Convocante_estrato', width: 10.9 },
                { header: 'LOCALIDAD', key: 'Convocante_localidad', width: 10 },
                { header: 'CONVOCADO', key: 'Convocado_nombre', width: 22.6 },
                { header: 'NO DE DOCUMENTO', key: 'Convocado_identificacion', width: 16.9 },
                { header: 'GENERO', key: 'Convocado_genero', width: 10.1 },
                { header: 'ESTRATO', key: 'Convocado_estrato', width: 10.9 },
                { header: 'LOCALIDAD', key: 'Convocado_localidad', width: 10 },
                { header: 'MODALIDAD', key: 'Modalidad', width: 15 },
                { header: 'FECHA  DE AUDIENCIA', key: 'Fecha_citacion', width: 19.2 },
                { header: 'ESTADO DEL TRAMITE', key: 'Estado_tramite', width: 19 },
                { header: 'NUEVA FECHA', key: 'nueva_fecha', width: 15 },
                { header: 'RESULTADO DEL TRÁMITE ', key: 'Tipo_resultado_Id', width: 21.4 },
                { header: 'No. RESULTAD', key: 'numero_resultado', width: 18 },
                { header: 'CUMPLIO', key: 'cumplio', width: 11.7 },
                { header: 'POBLACIÓN CICLO VITAL', key: 'Convocante_poblacion', width: 19.5 },
                { header: 'CONCILIADOR', key: 'Conciliador', width: 22.6 },
                { header: 'RUG', key: 'rug', width: 15 },
                { header: 'COMISARIA', key: 'comisaria', width: 15 },
                { header: 'REMITE', key: 'remite', width: 15 },

              ];
            
              
              for (const iterator of info[0]) {

                worksheet.columns = worksheet.columns.concat({ header: iterator.Pregunta, key: 'Pregunta_Id_'+iterator.Id, width: 35 })
              }

              for (const iterator of info[1]) {

                worksheet.columns = worksheet.columns.concat({ header: iterator.Nombre, key: 'Medio_conocimiento_'+iterator.Nombre, width: 12 })
              }
            
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

            datos=info[2]
            for (const iterator of datos) {
                let fila=worksheet.addRow(iterator, 'n')
                fila.border=border
                fila.font=fontFilasDatos
                fila.alignment = { vertical: 'middle', horizontal: 'center' }
            }
           
            // formato condicional
            
          
            worksheet.addConditionalFormatting({
                ref: "A3:AL"+ worksheet.lastRow.number ,
                rules: [
                  {
                    type: 'containsText',
                    operator: 'containsBlanks',
                    text:"",
                    style: {fill: {type: 'pattern', pattern: 'solid', bgColor: {argb: 'B7DEE8'}}},
                  }
                ]
              })

    const buffer = await workbook.xlsx.writeBuffer();
    

      res.end(buffer)  
      
      
   
}


module.exports = funcion;



