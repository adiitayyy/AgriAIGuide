import React from 'react';

const Header = ({ onSectionChange }) => (
  <header>
    <h1>AgriGuide</h1>
    <nav>
      <ul>
        <li><button onClick={() => onSectionChange('home')}>Home</button></li>
        <li><button onClick={() => onSectionChange('about')}>About</button></li>
        <li><button onClick={() => onSectionChange('contact')}>Contact</button></li>
        <li><button onClick={() => onSectionChange('creator')}>Creator</button></li>
      </ul>
    </nav>
  </header>
);

export default Header;
