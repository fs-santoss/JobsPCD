
import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VagasPage } from './pages/VagasPage';
import { PerfilPage } from './pages/PerfilPage';
import { PostVagaPage } from './pages/PostVagaPage';
import { LoginPage } from './pages/LoginPage';
import { User, UserType } from './types';
import { SkipToContentLink } from './components/SkipToContentLink';

// Mock users for demonstration
const mockCandidate: User = { id: '1', name: 'Ana Silva', type: UserType.CANDIDATE, email: 'ana.silva@email.com' };
const mockRecruiter: User = { id: '2', name: 'Empresa Inclusiva S.A.', type: UserType.RECRUITER, email: 'recrutador@inclusiva.com' };

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [user, setUser] = useState<User | null>(null);

  const navigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = useCallback((type: UserType) => {
    setUser(type === UserType.CANDIDATE ? mockCandidate : mockRecruiter);
    navigate(type === UserType.CANDIDATE ? 'perfil' : 'post-vaga');
  }, [navigate]);

  const handleLogout = useCallback(() => {
    setUser(null);
    navigate('home');
  }, [navigate]);

  const renderPage = useMemo(() => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'vagas':
        return <VagasPage />;
      case 'perfil':
        return user ? <PerfilPage user={user} /> : <LoginPage onLogin={handleLogin} />;
      case 'post-vaga':
          return user && user.type === UserType.RECRUITER ? <PostVagaPage /> : <LoginPage onLogin={handleLogin} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  }, [currentPage, user, navigate, handleLogin]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-[#343A40] font-sans">
      <SkipToContentLink />
      <Header user={user} navigate={navigate} onLogout={handleLogout} />
      <main id="main-content" className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage}
      </main>
      <Footer />
    </div>
  );
};

export default App;
