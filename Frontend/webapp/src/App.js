
import './App.css';

// Importing react router components
import { Routes, Route, } from 'react-router-dom';

// Importing pages
import { Layout } from './pages/Layout'
import { PaginaPrincipal } from './pages/PaginaPrincipal'
import { Consultar } from './pages/Consultar'
import { Login } from './pages/Login'
import { RegistrarSolicitud } from './pages/RegistrarSolicitud'
import { Dashboard, Expedientes, Solicitudes, Personas, Reportes } from './pages/Dashboard'
import { NoMatch } from './pages/NoMatch'
import { Convocantes, DatosGenerales, ExpedientesDetalle } from './pages/Dashboard/ExpedientesDetalle';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path="login" element={<Login />} />
          <Route path="registrarsolicitud" element={<RegistrarSolicitud />} />
          <Route path="consultar" element={<Consultar />} />
          <Route path="dashboard/" element={<Dashboard />} >
            <Route path='expedientes' element={<Expedientes />} />
            <Route path='expedientes/detalle/' element={<ExpedientesDetalle />} >
              <Route path=':id/datosgenerales' element={<DatosGenerales />} />
              <Route path=':id/convocantes' element={<Convocantes />} />
            </Route>
            <Route path='solicitudes' element={<Solicitudes />} />
            <Route path='personas' element={<Personas />} />
            <Route path='reportes' element={<Reportes />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
