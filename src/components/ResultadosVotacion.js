import React from 'react';

const ResultadosVotacion = ({ resultados }) => {
  return (
    <div>
      <h3>Resultados de la votación</h3>
      <ul>
        {resultados.map((item, index) => (
          <li key={index}>{item.opcion}: {item.votos} votos</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultadosVotacion;
