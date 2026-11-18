import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import AppInterface from './components/AppInterface'; // Aquí irá el Tinder de músicos

function App() {
  // Estado para saber si el usuario ya "instaló" o entró a la app
  const [isAppOpen, setIsAppOpen] = useState(false);
  
  // Estado para el Modo Oscuro
  const [darkMode, setDarkMode] = useState(true); // Por defecto oscuro, queda mejor con tu imagen

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Botón para cambiar modo (siempre visible) */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Contenido Principal */}
      {isAppOpen ? (
        <AppInterface /> 
      ) : (
        <LandingPage onEnter={() => setIsAppOpen(true)} />
      )}

      {/* Marca de Agua DFF (Siempre visible abajo a la derecha) */}
      <div className="fixed bottom-4 right-4 z-50 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-600">
          DFF
        </span>
      </div>
    </div>
  );
}

export default App;
