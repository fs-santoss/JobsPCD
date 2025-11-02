
import React from 'react';
import { NAV_LINKS, CANDIDATE_NAV_LINKS, RECRUITER_NAV_LINKS } from '../constants';
import { User, UserType } from '../types';

interface HeaderProps {
  user: User | null;
  navigate: (page: string) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, navigate, onLogout }) => {
  const links = user?.type === UserType.CANDIDATE ? CANDIDATE_NAV_LINKS : user?.type === UserType.RECRUITER ? RECRUITER_NAV_LINKS : NAV_LINKS;

  return (
    <header className="bg-[#EBF3FB] shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => navigate('home')} className="text-2xl font-bold text-[#005A9C]">
              JobsPCD
            </button>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.page)}
                  className="text-[#343A40] hover:bg-[#d4e6f7] hover:text-[#005A9C] px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>
          <div className="hidden md:block">
            {user ? (
              <div className="ml-4 flex items-center md:ml-6">
                <span className="text-[#343A40] mr-4">Olá, {user.name.split(' ')[0]}</span>
                <button
                  onClick={onLogout}
                  className="bg-[#005A9C] text-[#FFFFFF] px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate('login')}
                className="bg-[#005A9C] text-[#FFFFFF] px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]"
              >
                Login / Cadastro
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
