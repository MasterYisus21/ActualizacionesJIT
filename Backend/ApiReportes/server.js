const express = require('express');
const app = express();
const port = 8005;
const ExcelJS = require('exceljs');
const router = require('./routers/routers');

app.use(express.json());





app.use('/api/generador_reportes/v1', router)

app.listen(port, () => {
  console.log(`Servidor Express funcionando en el puerto ${port}`);
});