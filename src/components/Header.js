import React from 'react'
import logoScout24 from './../images/scout24.png';
import logoIS24 from './../images/is24.png';
import logoAS24 from './../images/as24.png';
import './Header.css'

const Header = () => (
  <div className="header">
    <div id="scoutmanager-header">
      <div className="resp-header blue">
        <div className="page-wrapper">
          <h1 className="logo">
            <div className="App-header">
              <img src={logoScout24} className="App-logo" alt="logo" />
              <img src={logoAS24} className="App-logo" alt="logo" />
              <img src={logoIS24} className="App-logo" alt="logo" />
            </div>
            <div className="language-menu">
              <a href="#">DE |</a>
              <a href="#"> EN</a>
            </div>
          </h1>

        </div>
      </div>
    </div>
  </div>
);

export default Header
