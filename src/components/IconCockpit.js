import React from 'react';
import IconWeCare from './IconWeCare';
import IconSocialMedia from './IconSocialMedia';
import IconTechBlog from './IconTechBlog';
import './IconCockpit.css';

const IconCockpit = () => (
    <div className="grid-item one-whole margin-top-xxl margin-bottom-l">
        <div className="grid grid-flex gutter-xl icon-cockpit">
            <IconWeCare/>
            <IconSocialMedia/>
            <IconTechBlog/>
        </div>
        <div className="divider"/>
    </div>
);

export default IconCockpit;
