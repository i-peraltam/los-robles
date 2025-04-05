// src/components/ModalVotacion.js

import React from 'react';
import './ModalVotacion.css'; 

const ModalVotacion = ({ isOpen, onClose, pregunta, opciones, onVotar }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-votacion-overlay">
      <div className="modal-votacion">
        <h2>{pregunta}</h2>
        <ul>
          {opciones.map((opcion, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  onVotar(opcion);
                  onClose();
                }}
              >
                {opcion}
              </button>
            </li>
          ))}
        </ul>
        <button className="cerrar" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalVotacion;

