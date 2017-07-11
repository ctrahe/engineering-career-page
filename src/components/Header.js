import React from 'react'
import logoScout24 from './../images/scout24.jpeg';
import logoIS24 from './../images/is24.jpeg';
import logoAS24 from './../images/as24.jpeg';
import './Header.scss'
const Header = () =>
  <div className="header">
    <div id="scoutmanager-header">
      <div className="above-header clearfix">
        <div className="page-wrapper">
          <div className="left">
            {'\u00A0'}
          </div>
          <div className="right">
            {'\u00A0'}
          </div>
        </div>
      </div>
      <div className="resp-header blue">
        <div className="page-wrapper">
          <h1 className="logo">
            <div className="App-header">
              <img src={logoScout24} className="App-logo" alt="logo" />
              <img src={logoAS24} className="App-logo" alt="logo" />
              <img src={logoIS24} className="App-logo" alt="logo" />
            </div>
          </h1>
          <div className="main_menu_wrapper" />
        </div>
      </div>
    </div>
  </div>
export default Header
