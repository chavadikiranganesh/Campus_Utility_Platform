
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Resources from './pages/Resources.tsx';
import Accommodations from './pages/Accommodations.tsx';
import Chatbot from './pages/Chatbot.tsx';
import Documentation from './pages/Documentation.tsx';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/resources':
        return <Resources />;
      case '#/accommodations':
        return <Accommodations />;
      case '#/chatbot':
        return <Chatbot />;
      case '#/documentation':
        return <Documentation />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;
