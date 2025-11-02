
import React, { useState } from 'react';
import { checkAbleistLanguage } from '../services/geminiService';
import { LinterResult } from '../types';
import { ACCESSIBILITY_PROFILE_OPTIONS } from '../constants';

const FormSection: React.FC<{ title: string; children: React.ReactNode, description?: string }> = ({ title, children, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold text-[#005A9C] border-b pb-2 mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
);

const FormField: React.FC<{ label: string; id: string; children: React.ReactNode }> = ({ label, id, children }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-[#343A40]">{label}</label>
        <div className="mt-1">
            {children}
        </div>
    </div>
);

const CheckboxGroup: React.FC<{ options: string[] }> = ({ options }) => (
    <div className="space-y-2">
        {options.map(option => (
            <label key={option} className="flex items-center font-normal text-gray-700">
                <input type="checkbox" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300 rounded" />
                <span className="ml-2">{option}</span>
            </label>
        ))}
    </div>
);

export const PostVagaPage: React.FC = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [linterResult, setLinterResult] = useState<LinterResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJobDescription(e.target.value);
        if (linterResult) {
            setLinterResult(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setLinterResult(null);
        const result = await checkAbleistLanguage(jobDescription);
        setIsLoading(false);
        if (result) {
            setLinterResult(result);
        } else {
            // Proceed with form submission
            alert('Vaga publicada com sucesso! (Simulação)');
        }
    };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-[#343A40] mb-6">Publicar Nova Vaga</h1>

      <FormSection title="Informações da Vaga">
        <FormField label="Título da Vaga" id="job-title">
            <input type="text" id="job-title" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C]" required/>
        </FormField>
        <FormField label="Descrição da Vaga" id="job-description">
             <textarea 
                id="job-description" 
                rows={8}
                value={jobDescription}
                onChange={handleDescriptionChange}
                className={`block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C] ${linterResult ? 'border-[#D90429] ring-2 ring-[#D90429]' : 'border-gray-300'}`} 
                required
            />
        </FormField>
         {linterResult && (
            <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-md text-sm">
                <h3 className="font-bold text-[#D90429]">Sugestão de Linguagem Inclusiva</h3>
                <p className="mt-1 text-red-800">O termo <strong className="font-semibold">"{linterResult.phrase}"</strong> foi encontrado.</p>
                <p className="mt-1 text-red-800"><strong>Motivo:</strong> {linterResult.reason}</p>
                <p className="mt-1 text-red-800"><strong>Sugestão:</strong> Considere usar "{linterResult.suggestion}".</p>
            </div>
        )}
      </FormSection>

      <FormSection 
        title="Recursos de Acessibilidade para esta Vaga"
        description="Esta seção é fundamental. As informações preenchidas aqui serão usadas para conectar sua vaga aos candidatos que precisam dessas adaptações."
      >
        <FormField label="O processo seletivo (entrevista/teste) é acessível?" id="processo-acessivel">
            <div className="flex items-center space-x-4">
                <label className="flex items-center"><input type="radio" name="processo-acessivel" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300"/> <span className="ml-2">Sim</span></label>
                <label className="flex items-center"><input type="radio" name="processo-acessivel" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300"/> <span className="ml-2">Não</span></label>
                <label className="flex items-center"><input type="radio" name="processo-acessivel" className="h-4 w-4 text-[#005A9C] focus:ring-[#005A9C] border-gray-300"/> <span className="ml-2">Parcialmente</span></label>
            </div>
        </FormField>
        <div>
            <h3 className="block text-sm font-medium text-[#343A40]">Quais adaptações estão disponíveis para o processo seletivo?</h3>
            <div className="mt-2">
                <CheckboxGroup options={ACCESSIBILITY_PROFILE_OPTIONS.interviewNeeds} />
            </div>
        </div>
         <div>
            <h3 className="block text-sm font-medium text-[#343A40]">Quais adaptações estão disponíveis para o dia a dia da função?</h3>
            <div className="mt-2">
                <CheckboxGroup options={ACCESSIBILITY_PROFILE_OPTIONS.workplaceNeeds} />
            </div>
        </div>
      </FormSection>

       <div className="mt-8 flex justify-end">
        <button type="submit" disabled={isLoading || !!linterResult} className="bg-[#005A9C] text-[#FFFFFF] px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C] disabled:bg-gray-400 disabled:cursor-not-allowed">
            {isLoading ? 'Verificando...' : linterResult ? 'Corrija o texto para publicar' : 'Publicar Vaga'}
        </button>
      </div>

    </form>
  );
};
