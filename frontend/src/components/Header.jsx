import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const handleAboutClick = () => {
    alert('Daily Record - A personal daily tracking application. Keep track of your daily activities and memories.');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo"><a href="/home">Daily Record</a></h1>
        <nav className="nav">
          <button className="nav-link" onClick={handleAboutClick}>
            About
          </button>
          <button className="nav-link logout-btn" >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;