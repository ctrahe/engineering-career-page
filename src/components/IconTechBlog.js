import React from 'react';
import './IconCockpit.css';
import { Translate } from 'react-i18nify';

const IconTechBlog = () => (
    <div className="grid-item palm-one-whole lap-one-third desk-one-third text-center">
        <a href="http://techblog.scout24.com/">
            <i className="font-xxl fa fa-cog" aria-hidden="true"></i>
            <p className="font-l font-light margin-top-s"><Translate value="iconTechBlog.title"/></p>
            <p className="font-light"><Translate value="iconTechBlog.text"/></p>
        </a>
    </div>
);

export default IconTechBlog;
