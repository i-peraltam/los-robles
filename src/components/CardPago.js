// src/components/CardPago.js

import React from 'react';
import './CardPago.css';

const CardPago = ({ nombre, monto, fecha, estado }) => {
  return (
    <div className="card-pago">
      <h3>{nombre}</h3>
      <p><strong>Monto:</strong> ${monto}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p className={`estado ${estado.toLowerCase()}`}>
        <strong>Estado:</strong> {estado}
      </p>
    </div>
  );
};

export default CardPago;

