import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './administrador/nvar'; // Asegúrate de que la ruta sea correcta
import CrearActivo from './administrador/CrearActivo'; // Asegúrate de que la ruta sea correcta

const App: React.FC = () => {
  return (
    <>
      {/* Navbar fuera del Router */}
      <Navbar />

      {/* Definimos las rutas dentro del Router (solo una vez) */}
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Definimos las rutas para 'individual' y 'lote' */}
          <Route path="/crear-activo/:tipo" element={<CrearActivo />} />
          <Route path="/eliminar-activo" element={<h2>Eliminar Activo</h2>} />
          <Route path="/activos" element={<h2>Activos</h2>} />
          <Route path="/reportes" element={<h2>Reportes</h2>} />
          <Route path="/fichas" element={<h2>Fichas</h2>} />
          <Route path="/cerrar-sesion" element={<h2>Cerrar Sesión</h2>} />
          <Route path="/" element={<h2>Bienvenido a la aplicación</h2>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
