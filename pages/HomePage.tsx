
import React from 'react';

interface HomePageProps {
  navigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#343A40] tracking-tight">
        Conectando Talentos, Construindo Inclusão.
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        A principal ponte entre profissionais qualificados com deficiência (PCD) e empresas genuinamente inclusivas.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Card for Candidates */}
        <div className="bg-[#EBF3FB] p-8 rounded-lg shadow-md text-left">
          <h2 className="text-2xl font-bold text-[#005A9C]">Para Candidatos</h2>
          <p className="mt-2 text-[#343A40]">
            Encontre vagas em empresas que valorizam suas competências. Tenha transparência sobre acessibilidade e participe de processos seletivos justos.
          </p>
          <button
            onClick={() => navigate('vagas')}
            className="mt-6 bg-[#005A9C] text-[#FFFFFF] w-full px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]"
          >
            Buscar Vagas
          </button>
        </div>

        {/* Card for Recruiters */}
        <div className="bg-[#EBF3FB] p-8 rounded-lg shadow-md text-left">
          <h2 className="text-2xl font-bold text-[#005A9C]">Para Empresas</h2>
          <p className="mt-2 text-[#343A40]">
            Acesse um banco de talentos qualificados e publique suas vagas de forma inclusiva, detalhando os recursos de acessibilidade que sua empresa oferece.
          </p>
          <button
            onClick={() => navigate('post-vaga')}
            className="mt-6 bg-[#005A9C] text-[#FFFFFF] w-full px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]"
          >
            Publicar uma Vaga
          </button>
        </div>
      </div>
    </div>
  );
};
