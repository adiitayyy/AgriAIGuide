import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { About, Creator, Contact } from './StaticPages';

function App() {
  const [section, setSection] = useState('home');

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'creator':
        return <Creator />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header onSectionChange={setSection} />
      {renderSection()}
      <footer>
        <p>AgriGuide - Your Partner in Agriculture</p>
      </footer>
    </div>
  );
}

export default App;
