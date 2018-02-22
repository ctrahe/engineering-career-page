import React from 'react';
import {Translate} from 'react-i18nify';

import './coreValues.css';

const OneTeam = () => (
  <div className="grid-item palm-one-whole lap-one-fourth desk-one-fourth align-center">
    <i className="fa fa-users icons font-xxl" aria-hidden="true"/>
    <p className="font-l margin-top-s"><Translate value="oneTeam.title"/></p>
    <p className="font-light"><Translate value="oneTeam.text"/></p>
  </div>
);

export default OneTeam;
