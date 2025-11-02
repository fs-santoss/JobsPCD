
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EBF3FB] mt-12">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-[#343A40]">
        <p>&copy; {new Date().getFullYear()} JobsPCD. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Promovendo um mercado de trabalho mais inclusivo.</p>
      </div>
    </footer>
  );
};
