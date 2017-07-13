import React from 'react';
import IconSocial from './IconSocial';
import IconScout from './IconScout';
import IconTechBlog from './IconTechBlog';
import './IconCockpit.css';

const IconCockpit = () => (
    <div className="grid-item one-whole margin-top-xxl margin-bottom-l">
        <div className="grid grid-flex gutter-xl icon-cockpit">
            <IconSocial/>
            <IconScout/>
            <IconTechBlog/>
        </div>
    </div>
);

export default IconCockpit;
