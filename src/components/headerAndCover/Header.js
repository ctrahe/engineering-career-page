import React from 'react'
import logoScout24 from '../../images/scout24.png';
import logoIS24 from '../../images/is24.png';
import logoAS24 from '../../images/as24.png';
import './Header.css'
import { I18n } from 'react-i18nify';

const changeLocaleToGerman = () => {
    I18n.setLocale('de',true);
};

const changeLocaleToEnglish = () => {
    I18n.setLocale('en', true);
};

const Header = () => (
  <div className="grid-item one-whole header">
    <div className="grid-item palm-two-thirds desk-eleven-twelfths lap-eleven-twelfths">
      <a href="http://www.scout24.com"><img src={logoScout24} className="logo" alt="logo" /></a>
      <a href="https://www.immobilienscout24.de"><img src={logoAS24} className="logo" alt="logo" /></a>
      <a href="https://www.autoscout24.de"><img src={logoIS24} className="logo" alt="logo" /></a>
    </div>
    <div className="grid-item palm-one-third languages desk-one-twelfth lap-one-twelfth">
      <a onClick={() => changeLocaleToGerman()}>DE |</a>
      <a onClick={() => changeLocaleToEnglish()}> EN</a>
    </div>
  </div>
);

export default Header
