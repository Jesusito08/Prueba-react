import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CrearUsuario from './components/Crear/CrearUsuario';
import Login from './components/Login/login';
import Usuarios from './components/Usuarios/usuarios';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/crear" element={<CrearUsuario />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
