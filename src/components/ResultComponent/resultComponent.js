import React from 'react';

const ResultComponent = ({ data }) => {
  // Este é o componente que será renderizado após o envio do formulário
  return (
    <div>
      <h2>Formulário Enviado</h2>
      <p>Dados do Formulário:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* Adicione aqui os elementos que você deseja mostrar após o envio do formulário */}
    </div>
  );
};

export default ResultComponent;
