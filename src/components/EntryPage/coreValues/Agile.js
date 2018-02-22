import React from 'react';
import {Translate} from 'react-i18nify';

import './coreValues.css';

const Agile = () => (
  <div className="grid-item palm-one-whole lap-one-fourth desk-one-fourth align-center">
    <i className="far fa-lightbulb font-xxl icons" aria-hidden="true"/>
    <p className="font-l margin-top-s"><Translate value="agile.title"/></p>
    <p className="font-light"><Translate value="agile.text"/></p>
  </div>
);

export default Agile;
