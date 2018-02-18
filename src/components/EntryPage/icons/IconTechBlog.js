import React from 'react';
import { Translate } from 'react-i18nify';

import './iconCockpit.css';

const IconTechBlog = () => (
    <div className="grid-item palm-one-whole lap-one-third desk-one-third align-center">
        <a href="http://techblog.scout24.com/" className="icon-link">
            <i className="fa fa-cog font-xxl icons" aria-hidden="true"/>
            <p className="font-l font-light margin-top-s"><Translate value="iconTechBlog.title"/></p>
            <p className="font-light"><Translate value="iconTechBlog.text"/></p>
        </a>
    </div>
);

export default IconTechBlog;
