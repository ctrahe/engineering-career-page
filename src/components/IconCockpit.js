import React from 'react';
import IconSocial from './IconSocial';
import IconScout from './IconScout';
import IconJobs from './IconJobs';
import './IconCockpit.css';

const IconCockpit = () => (
    <div className="grid-item one-whole margin-top-l">
        <div className="grid grid-flex gutter-xl icon-cockpit">
            <IconSocial/>
            <IconScout/>
            <IconJobs/>
        </div>
    </div>
);

export default IconCockpit;
