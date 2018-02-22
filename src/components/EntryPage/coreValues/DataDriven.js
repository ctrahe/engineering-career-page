import React from 'react';
import {Translate} from 'react-i18nify';

import './coreValues.css';

const DataDriven = () => (
  <div className="grid-item palm-one-whole lap-one-fourth desk-one-fourth align-center">
    <i className="fa fa-cogs font-xxl icons" aria-hidden="true"/>
    <p className="font-l margin-top-s"><Translate value="dataDriven.title"/></p>
    <p className="font-light"><Translate value="dataDriven.text"/></p>
  </div>
);

export default DataDriven;
