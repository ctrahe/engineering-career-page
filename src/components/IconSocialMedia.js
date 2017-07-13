import React from 'react';
import './IconCockpit.css';
import { Translate } from 'react-i18nify';

const IconSocialMedia = () => (
    <div className="grid-item palm-one-whole lap-one-third desk-one-third text-center">
        <a href="https://walls.io/scout24" className="icon-link">
            <i className="fa fa-thumbs-up icons font-xxl" aria-hidden="true"/>
            <p className="font-l font-light margin-top-s"><Translate value="iconScout.title"/></p>
            <p className="font-light"><Translate value="iconScout.text"/></p>
        </a>
    </div>
);

export default IconSocialMedia;
