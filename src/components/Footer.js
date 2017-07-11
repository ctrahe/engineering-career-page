import React from 'react'
import './Footer.scss'


const Footer = () =>
  <footer className="main-footer" data-cms-qa="page-footer">
    <h6>Seiteninformationen</h6>
    <ul>
      <li>
        <a
          href="https://www.immobilienscout24.de/kontakt/"
          title="Kontakt &amp; Hilfe"
          aria-label="Kontakt &amp; Hilfe"
          target="_blank"
        >
          Kontakt & Hilfe
        </a>
      </li>
      <li>
        <a
          href= "https://www.immobilienscout24.de/impressum.html"
          title="Impressum"
          aria-label="Impressum"
          target="_blank"
        >
          Impressum
        </a>
      </li>
      <li>
        <a
          href="https://www.immobilienscout24.de/agb.html"
          title="AGB &amp; Rechtliche Hinweise"
          aria-label="AGB &amp; Rechtliche Hinweise"
          target="_blank"
        >
          AGB & Rechtliche Hinweise
        </a>
      </li>
      <li>
        <a
          href="https://www.immobilienscout24.de//agb/verbraucherinformationen.html"
          title="Verbraucherinformationen"
          aria-label="Verbraucherinformationen"
          target="_blank"
        >
          Verbraucherinformationen
        </a>
      </li>
      <li>
        <a
          href="https://www.immobilienscout24.de/agb/datenschutz.html"
          aria-label="Datenschutz"
          target="_blank"
        >
          Datenschutz
        </a>
      </li>
      <li>
        <a
          href="//sicherheit.immobilienscout24.de"
          title="Sicherheit"
          aria-label="Sicherheit"
          target="_blank"
        >
          Sicherheit
        </a>
      </li>
    </ul>
    <p className="build-information">
      © Copyright 1999 - 2017 Immobilien Scout GmbH
    </p>
  </footer>

export default Footer
