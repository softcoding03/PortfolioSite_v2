import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <h1>KIM YANG SOO</h1>
        <h2>Code for Systems, <br/> Think for People</h2>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;