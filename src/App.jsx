import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { About } from './components/About';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Dashboard } from './components/Dashboard';
import { Leaderboard } from './components/Leaderboard';


function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    setUser({ name: 'Demo Student', email });
    setCurrentPage('dashboard');
  };

  const handleGoogleLogin = () => {
    setUser({ name: 'Demo Student', email: 'demo@student.com' });
    setCurrentPage('dashboard');
  };

  const handleDemoLogin = () => {
    setUser({ name: 'Demo Student', email: 'demo@student.com' });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0f1729] dark:via-[#1a2332] dark:to-[#0f1729] theme-transition">
      {currentPage === 'home' && (
        <Home 
          onNavigate={navigate}
          onDemoLogin={handleDemoLogin}
        />
      )}
      {currentPage === 'login' && (
        <Login 
          onLogin={handleLogin}
          onGoogleLogin={handleGoogleLogin}
          onDemoLogin={handleDemoLogin}
          onNavigate={navigate}
        />
      )}
      {currentPage === 'about' && (
        <About onNavigate={navigate} />
      )}
      {currentPage === 'features' && (
        <Features onNavigate={navigate} />
      )}
      {currentPage === 'contact' && (
        <Contact onNavigate={navigate} />
      )}
      {currentPage === 'dashboard' && user && (
        <Dashboard 
          user={user}
          onLogout={handleLogout}
          onNavigate={navigate}
        />
      )}
      {currentPage === 'leaderboard' && (
        <Leaderboard onNavigate={navigate} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
