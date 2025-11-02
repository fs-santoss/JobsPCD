
import React from 'react';

export const SkipToContentLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="absolute z-50 top-0 left-0 m-2 p-2 bg-[#005A9C] text-[#FFFFFF] -translate-y-16 focus:translate-y-0 transition-transform duration-300 rounded-md"
    >
      Pular para o Conteúdo Principal
    </a>
  );
};
