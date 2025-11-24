import React from 'react';

// Supondo que a estrutura da procedure seja: {id, nome, descricao, imagemUrl}
export const ProcedureCard = ({ procedure, onAgendar }) => {
  return (
    // 💡 Classes do Card:
    // bg-white: Fundo branco
    // rounded-lg: Bordas arredondadas (large)
    // shadow-xl: Sombra grande
    // overflow-hidden: Esconde o que sai da borda (importante para a imagem)
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.02]">
      
      {/* Imagem do Procedimento */}
      <img 
        src={procedure.imagemUrl} 
        alt={procedure.nome} 
        // w-full: Largura total
        // h-48: Altura fixa de 48 unidades (12rem)
        // object-cover: Garante que a imagem preencha o espaço sem distorcer
        className="w-full h-48 object-cover"
      />
      
      {/* Conteúdo do Card */}
      <div className="p-5">
        
        {/* Título do Procedimento */}
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {procedure.nome}
        </h3>
        
        {/* Descrição (Ajuste o limite de linhas se necessário) */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {procedure.descricao}
        </p>
        
        {/* Botão de Agendamento */}
        <button
          onClick={() => onAgendar(procedure)}
          // bg-pink-600: Fundo rosa
          // hover:bg-pink-700: Cor mais escura no hover
          // text-white: Texto branco
          // font-bold: Negrito
          // py-2 px-4: Padding vertical e horizontal
          // rounded: Bordas arredondadas
          // w-full: Largura total do botão
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded w-full transition duration-150"
        >
          Agendar
        </button>
      </div>
    </div>
  );
};