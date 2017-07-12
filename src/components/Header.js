import React from 'react'
import logoScout24 from './../images/scout24.png';
import logoIS24 from './../images/is24.png';
import logoAS24 from './../images/as24.png';
import './Header.css'
import { I18n } from 'react-i18nify';
import { Translate } from 'react-i18nify';

const changeLocaleToGerman = () => {
    I18n.setLocale('de',true);
}

const changeLocaleToEnglish = () => {
    I18n.setLocale('en', true);
}

const Header = () => (
  <div className="grid grid-flex grid-justify-space-between padding-horizontal-xxl padding-vertical-s margin-horizontal-xxl">
    <div className="grid-item">
      <img src={logoScout24} className="logo" alt="logo" />
      <img src={logoAS24} className="logo" alt="logo" />
      <img src={logoIS24} className="logo" alt="logo" />
    </div>
    <div className="grid-item padding-top-s">
        <p><Translate value="application.title"/></p>
      <a onClick={() => changeLocaleToGerman()}>DE |</a>
      <a onClick={() => changeLocaleToEnglish()}> EN</a>
    </div>
  </div>
);

export default Header
