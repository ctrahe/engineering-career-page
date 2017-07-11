import React from 'react'
import logoScout24 from './../images/scout24.png';
import logoIS24 from './../images/is24.png';
import logoAS24 from './../images/as24.png';
import './header.css'

const Header = () => (
  <div className="grid grid-flex grid-justify-space-between padding-horizontal-xxl padding-vertical-s margin-horizontal-xxl">
    <div className="grid-item">
      <img src={logoScout24} className="logo" alt="logo" />
      <img src={logoAS24} className="logo" alt="logo" />
      <img src={logoIS24} className="logo" alt="logo" />
    </div>
    <div className="grid-item padding-top-s">
      <a href="www.is24.de">DE |</a>
      <a href="www.is24.de"> EN</a>
    </div>
  </div>
);

export default Header
