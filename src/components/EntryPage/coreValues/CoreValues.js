import React from 'react';

import Agile from './Agile';
import OneTeam from './OneTeam';
import DataDriven from './DataDriven';
import Winning from './Winning';
import './coreValues.css';

const IconCockpit = () => (
    <div className="grid-item one-whole margin-top-xxl margin-bottom-l">
        <div className="grid grid-flex gutter-xl icon-cockpit">
            <Agile/>
            <OneTeam/>
            <DataDriven/>
            <Winning/>
        </div>
    </div>
);

export default IconCockpit;
