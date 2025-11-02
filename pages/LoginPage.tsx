
import React from 'react';
import { UserType } from '../types';

interface LoginPageProps {
    onLogin: (type: UserType) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-[#343A40] mb-6">Login / Cadastro</h1>
                <p className="text-center text-gray-600 mb-6">Para fins de demonstração, selecione o seu perfil para continuar.</p>
                <div className="space-y-4">
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#343A40]">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C]" placeholder="seu@email.com" />
                    </div>
                     <div>
                        <label htmlFor="password_login" className="block text-sm font-medium text-[#343A40]">Senha</label>
                        <input type="password" id="password_login" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#005A9C] focus:border-[#005A9C]" placeholder="********" />
                    </div>
                    <div className="border-t pt-6 space-y-4">
                        <button
                            onClick={() => onLogin(UserType.CANDIDATE)}
                            className="w-full bg-[#005A9C] text-[#FFFFFF] px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]"
                        >
                            Entrar como Candidato
                        </button>
                        <button
                            onClick={() => onLogin(UserType.RECRUITER)}
                            className="w-full bg-gray-600 text-[#FFFFFF] px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            Entrar como Recrutador
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
