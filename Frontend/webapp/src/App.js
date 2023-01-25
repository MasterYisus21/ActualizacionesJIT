import "./App.css";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// Importing react router components
import { Routes, Route } from "react-router-dom";

// Importing pages
import { Layout } from "./pages/Layout";
import { PaginaPrincipal } from "./pages/PaginaPrincipal";
import { Login } from "./pages/Login";
import { RegistrarSolicitud } from "./pages/RegistrarSolicitud";
import {
  Dashboard,
  Expedientes,
  Solicitudes,
  Personas,
  Reportes,
} from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import {
  Audiencia,
  Conciliador,
  Convocados,
  Convocantes,
  DatosGenerales,
  Documentos,
  Estudiantes,
  EvaluacionServicio,
  ExpedientesDetalle,
  Hechos,
  ManejoConflicto,
  Resultado,
  Seguimientos,
} from "./pages/Dashboard/ExpedientesDetalle";
import Consultar from "./pages/Consultar/Consultar";
import { Expediente } from "./pages/Consultar/Expediente";
import { Solicitud } from "./pages/Consultar/Solicitud";
import { SolicitudesDetalle } from "./pages/Dashboard/SolicitudesDetalle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path="login" element={<Login />} />
          <Route path="registrarsolicitud" element={<RegistrarSolicitud />} />
          <Route path="consultar/" element={<Consultar />} />
          <Route path="consultar/expedientes/:id" element={<Expediente />} />
          <Route path="consultar/solicitudes/:id" element={<Solicitud />} />
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="expedientes" element={<Expedientes />} />
            <Route path="expedientes/detalle/" element={<ExpedientesDetalle />}>
              <Route path=":id/datosgenerales" element={<DatosGenerales />} />
              <Route path=":id/convocantes" element={<Convocantes />} />
              <Route path=":id/convocados" element={<Convocados />} />
              <Route path=":id/hechos" element={<Hechos />} />
              <Route path=":id/documentos" element={<Documentos />} />
              <Route path=":id/conciliador" element={<Conciliador />} />
              ManejoConflicto
              <Route path=":id/estudiantes" element={<Estudiantes />} />
              <Route path=":id/manejoconflicto" element={<ManejoConflicto />} />
              <Route path=":id/audiencia" element={<Audiencia />} />
              <Route path=":id/resultado" element={<Resultado />} />
              <Route
                path=":id/evaluacionservicio"
                element={<EvaluacionServicio />}
              />
              <Route path=":id/seguimientos" element={<Seguimientos />} />
            </Route>
            <Route path="solicitudes/" element={<Solicitudes />} />
            <Route
              path="solicitudes/detalle/:id"
              element={<SolicitudesDetalle />}
            />
            <Route path="personas" element={<Personas />} />
            <Route path="reportes" element={<Reportes />} />
          </Route>
          <Route path="forbidden" element={<ErrorPage codigo={403} />} />
          <Route path="*" element={<ErrorPage codigo={404}/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
