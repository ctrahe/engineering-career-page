import React from 'react'
import { I18n } from 'react-i18nify';

import logoScout24 from '../../images/scout24.png';
import './header.css'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'en'
    };
  }

  changeLocale(selectedLocale) {
    I18n.setLocale(selectedLocale, true);
    this.setState({
      selectedLanguage: selectedLocale
    });
    this.forceUpdate();
  };

  render() {
    return (
      <div className="grid-item one-whole">
        <div className="grid grid-flex grid-align-center padding-vertical-l padding-left-l padding-right-xxl header">
          <div className="grid-item one-half">
            <a href="http://www.scout24.com"><img src={logoScout24} className="logo" alt="logo"/></a>
          </div>
          <div className="grid-item one-half">
            <div className="float-right languages">
              <a className={(this.state.selectedLanguage === "de" ? "selected" : "")} onClick={() => this.changeLocale("de")}>DE</a>
              <a className={(this.state.selectedLanguage === "en"  ? "selected" : "")} onClick={() => this.changeLocale("en")}>EN</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
