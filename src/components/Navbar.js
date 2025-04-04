import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      <Link to="/pagos">Pagos</Link> | 
      <Link to="/reportes">Reportes</Link> | 
      <Link to="/votaciones">Votaciones</Link>
    </nav>
  );
}

export default Navbar;

