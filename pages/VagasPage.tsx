
import React, { useState } from 'react';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';
import { ACCESSIBILITY_FILTER_OPTIONS } from '../constants';

const mockJobs: Job[] = [
  { id: '1', title: 'Analista Administrativo Afirmativa (PCD)', company: 'InovaTech Solutions', location: 'São Paulo, SP', modality: 'Híbrido', description: 'Buscamos um profissional organizado para apoiar nossas operações administrativas. Oferecemos um ambiente de trabalho inclusivo e adaptado.', salary: 'R$ 3.500', accommodations: { interview: ['Intérprete de LIBRAS', 'Local com Acesso Físico Total'], workplace: ['Mobiliário Adaptado', 'Horários Flexíveis'] }, hasFullPhysicalAccess: true },
  { id: '2', title: 'Desenvolvedor Frontend Pleno (Home Office)', company: 'Digital World Inc.', location: 'Remoto', modality: 'Home Office', description: 'Vaga para desenvolvedor React com experiência. Nosso processo seletivo é 100% online e acessível.', salary: 'R$ 7.000', accommodations: { interview: ['Prova em formato acessível'], workplace: ['Softwares de Leitura', 'Horários Flexíveis'] }, hasFullPhysicalAccess: false },
  { id: '3', title: 'Assistente de RH', company: 'Capital Humano', location: 'Rio de Janeiro, RJ', modality: 'Presencial', description: 'Oportunidade para atuar no recrutamento e seleção, com foco em diversidade e inclusão.', salary: 'R$ 2.800', accommodations: { interview: [], workplace: [] }, hasFullPhysicalAccess: true },
];

export const VagasPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');

    const filteredJobs = mockJobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );

  return (
    <div>
      <div className="bg-[#EBF3FB] p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-[#343A40]">Encontre a Vaga Certa para Você</h1>
        <p className="mt-2 text-gray-600">Use os filtros para encontrar oportunidades com as adaptações que você precisa.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="search-term" className="block text-sm font-medium text-[#343A40]">Cargo ou palavra-chave</label>
                <input 
                    type="text" 
                    id="search-term"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C] sm:text-sm" 
                />
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-[#343A40]">Localização</label>
                <input 
                    type="text" 
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C] sm:text-sm" 
                />
            </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-xl font-bold text-[#343A40]">Filtros</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Modalidade</h3>
                <div className="mt-2 space-y-2">
                  {['Home Office', 'Híbrido', 'Presencial'].map(m => (
                    <label key={m} className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300 rounded" />
                      <span className="ml-2 text-gray-700">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-700">Acessibilidade do Local</h3>
                 <div className="mt-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300 rounded" />
                      <span className="ml-2 text-gray-700">Acesso Físico Completo</span>
                    </label>
                 </div>
              </div>
              {Object.entries(ACCESSIBILITY_FILTER_OPTIONS).map(([category, options]) => (
                <div key={category} className="border-t pt-4">
                  <h3 className="font-semibold text-gray-700">{category}</h3>
                  <div className="mt-2 space-y-2">
                    {options.map(option => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300 rounded" />
                        <span className="ml-2 text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <div className="w-full md:w-3/4">
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
                filteredJobs.map(job => <JobCard key={job.id} job={job} />)
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-[#343A40]">Nenhuma vaga encontrada</h3>
                    <p className="text-gray-600 mt-2">Tente ajustar seus filtros de busca.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
