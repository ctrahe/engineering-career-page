import React from 'react'
import './Footer.css'

const Footer = () =>
  <footer className="grid-item one-whole main-footer" data-cms-qa="page-footer">
      <div>
        <p>&copy; Copyright 2017 by Scout24</p>
        <div class="content">
          <ul>
            <li><a target="_blank" href="http://www.scout24.com/FooterNavi/Impressum/impressum.aspx" title="Impressum">Impressum</a></li>   <li><a target="_blank" href="http://www.scout24.com/FooterNavi/Datenschutz/datenschutzerklaerung.aspx" title="Datenschutz">Datenschutz</a></li>   <li><a target="_blank" href="http://www.scout24.com/FooterNavi/Anfahrt/anfahrt.aspx" title="Anfahrt">Anfahrt</a></li>
          </ul>
        </div>
    </div>
  </footer>

export default Footer
