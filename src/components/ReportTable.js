// src/components/ReportTable.js

import React from 'react';
import './ReportTable.css'; // Puedes personalizar los estilos si lo deseas

const ReportTable = ({ reportes }) => {
  return (
    <div className="tabla-container">
      <h2>Reporte Financiero</h2>
      <table className="tabla-reportes">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Método de Pago</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reportes && reportes.length > 0 ? (
            reportes.map((reporte, index) => (
              <tr key={index}>
                <td>{reporte.fecha}</td>
                <td>{reporte.concepto}</td>
                <td>${reporte.monto.toFixed(2)}</td>
                <td>{reporte.metodoPago}</td>
                <td>{reporte.estado}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No hay reportes disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;

