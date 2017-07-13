import React from 'react'
import logoScout24 from './../images/scout24.png';
import logoIS24 from './../images/is24.png';
import logoAS24 from './../images/as24.png';
import './Header.css'
import { I18n } from 'react-i18nify';

const changeLocaleToGerman = () => {
    I18n.setLocale('de',true);
}

const changeLocaleToEnglish = () => {
    I18n.setLocale('en', true);
}

const Header = () => (
  <div className="grid-item one-whole header">
    <div className="grid-item palm-two-thirds desk-eleven-twelfths lap-eleven-twelfths">
      <img src={logoScout24} className="logo" alt="logo" />
      <img src={logoAS24} className="logo" alt="logo" />
      <img src={logoIS24} className="logo" alt="logo" />
    </div>
    <div className="grid-item palm-one-third languages desk-one-twelfth lap-one-twelfth">
      <a onClick={() => changeLocaleToGerman()}>DE |</a>
      <a onClick={() => changeLocaleToEnglish()}> EN</a>
    </div>
  </div>
);

export default Header
