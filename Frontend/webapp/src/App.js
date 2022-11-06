
import './App.css';

// Importing react router components
import { Routes, Route, } from 'react-router-dom';

// Importing pages
import { Layout } from './pages/Layout'
import { PaginaPrincipal } from './pages/PaginaPrincipal'
import { Consultar } from './pages/Consultar'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { NoMatch } from './pages/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path="login" element={<Login />} />
          <Route path="consultar" element={<Consultar />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
