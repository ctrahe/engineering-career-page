import React from 'react';
import {Translate} from 'react-i18nify';

import './coreValues.css';

const Winning = () => (
  <div className="grid-item palm-one-whole lap-one-fourth desk-one-fourth align-center">
    <i className="fa fa-star icons font-xxl" aria-hidden="true"/>
    <p className="font-l margin-top-s"><Translate value="winning.title"/></p>
    <p className="font-light"><Translate value="winning.text"/></p>
  </div>
);

export default Winning;
