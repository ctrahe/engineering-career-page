import React from 'react'
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
            <a className="home-link" href='https://www.immobilienscout24.de'>
              ImmobilienScout24
            </a>
          </h1>
          <div className="main_menu_wrapper" />
        </div>
      </div>
    </div>
  </div>
export default Header
