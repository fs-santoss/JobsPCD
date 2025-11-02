
import React from 'react';
import { User } from '../types';
import { ACCESSIBILITY_PROFILE_OPTIONS } from '../constants';

interface PerfilPageProps {
  user: User;
}

const ProfileSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h2 className="text-2xl font-bold text-[#005A9C] border-b pb-2 mb-4">{title}</h2>
    {children}
  </div>
);

const CheckboxGroup: React.FC<{ title: string; options: string[] }> = ({ title, options }) => (
    <div>
        <h3 className="text-md font-semibold text-[#343A40] mb-2">{title}</h3>
        <div className="space-y-2">
            {options.map(option => (
                <label key={option} className="flex items-center font-normal text-gray-700">
                    <input type="checkbox" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300 rounded" />
                    <span className="ml-2">{option}</span>
                </label>
            ))}
        </div>
    </div>
);


export const PerfilPage: React.FC<PerfilPageProps> = ({ user }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#343A40] mb-6">Meu Perfil</h1>
      
      <ProfileSection title="Informações Profissionais">
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#343A40]">Nome Completo</label>
            <input type="text" id="fullName" defaultValue={user.name} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C]" />
          </div>
          <div>
            <label htmlFor="cv" className="block text-sm font-medium text-[#343A40]">Currículo (URL ou texto)</label>
            <textarea id="cv" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C]"></textarea>
          </div>
        </form>
      </ProfileSection>

      <ProfileSection title="Perfil de Acessibilidade e Adaptações (Recomendado)">
        <p className="text-gray-600 mb-4">Ajude-nos a encontrar vagas com as adaptações que você precisa. Estas informações só serão compartilhadas com recrutadores com a sua permissão explícita a cada candidatura.</p>
        <form className="space-y-6">
            <div>
                 <label htmlFor="disabilityType" className="block text-md font-semibold text-[#343A40] mb-2">Tipo de Deficiência</label>
                 <select id="disabilityType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C] sm:text-sm rounded-md">
                    <option>Selecione uma opção (opcional)</option>
                    {ACCESSIBILITY_PROFILE_OPTIONS.disabilityType.map(opt => <option key={opt}>{opt}</option>)}
                 </select>
            </div>
            <CheckboxGroup title="Tecnologias Assistivas Utilizadas" options={ACCESSIBILITY_PROFILE_OPTIONS.assistiveTech} />
            <CheckboxGroup title="Necessidades para Entrevista" options={ACCESSIBILITY_PROFILE_OPTIONS.interviewNeeds} />
            <CheckboxGroup title="Necessidades no Ambiente de Trabalho" options={ACCESSIBILITY_PROFILE_OPTIONS.workplaceNeeds} />
        </form>
      </ProfileSection>

      <ProfileSection title='"Cofre" de Laudo Médico'>
         <p className="text-gray-600 mb-4">Seu laudo é um documento sensível. Ele ficará armazenado de forma segura e criptografada. Nenhuma empresa terá acesso a ele, a menos que você autorize em uma candidatura específica.</p>
         <div>
            <label htmlFor="laudo-upload" className="block text-sm font-medium text-[#343A40]">Upload de Laudo (Opcional)</label>
            <input type="file" id="laudo-upload" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#005A9C] hover:file:bg-blue-100"/>
         </div>
      </ProfileSection>

      <div className="mt-8 flex justify-end">
        <button className="bg-[#005A9C] text-[#FFFFFF] px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]">
            Salvar Perfil
        </button>
      </div>

    </div>
  );
};
