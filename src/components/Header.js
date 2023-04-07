import React from 'react';
import logo from '../Assets/logo.png';

function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="" style={{ width: '300px', height: 'auto' }} />
          </a>
          <button className="btn btn-sm btn-custom">Work With Me</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
