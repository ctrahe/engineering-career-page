import React from 'react'
import { I18n } from 'react-i18nify';

import logoScout24 from '../../images/scout24.png';
import './header.css'


const changeLocaleToGerman = () => {
  I18n.setLocale('de', true);
};

const changeLocaleToEnglish = () => {
  I18n.setLocale('en', true);
};

const Header = () => (
  <div className="grid-item one-whole">
    <div className="grid grid-flex grid-align-center padding-vertical-l padding-left-l padding-right-xxl header-line-height">
      <div className="grid-item one-half">
        <a href="http://www.scout24.com"><img src={logoScout24} className="logo" alt="logo" /></a>
      </div>
      <div className="grid-item one-half">
        <div className="float-right languages">
          <a onClick={() => changeLocaleToGerman()}>DE</a>
          <a onClick={() => changeLocaleToEnglish()}>EN</a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
