const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

// Load the docx file as binary content
const content = fs.readFileSync(
    path.resolve(__dirname, "Acta de Conciliación.docx"),
    "binary"
);

const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

// Render the document (Replace {first_name} by John, {last_name} by Doe, ...)

// contancia de no acuerdo
doc.render({
    nombre_apellidos_convocante:"jairo",
    nombre_apellidos_convocados:"Juan camilo P",
    numero_cedula_convocado:1231,
    numero_cedula_convocante:12345,
    barrio_convocante:"Santa L",
    localidad_convocante:"usme",
    barrio_convocado:"Castilla",
    localidad_convocado:"Kenedy",
    nombre_apellidos_conciliador:"luz helena G",
    numero_identificacion_conciliador:145342,
    nombre_apellidos_estudiante:"Kevin andres U",
    fecha_hora_citacion:"16/22/2020 8:00",
    hechos:"En esta situacion lo que se presento fue un conflicto en el que ..."
   
});
let date = new Date().toDateString();
console.log(date);

const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});

// buf is a nodejs Buffer, you can either write it to a
// file or res.send it with express for example.
fs.writeFileSync(path.resolve(__dirname, "output"+3+".docx"), buf);