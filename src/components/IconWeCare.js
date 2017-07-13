import React from 'react';
import './IconCockpit.css';
import { Translate } from 'react-i18nify';

const IconWeCare = () => (
    <div className="grid-item palm-one-whole lap-one-third desk-one-third text-center">
        <a href="https://csrbericht.scout24.com/de/" className="icon-link">
            <i className="fa fa-user font-xxl icons" aria-hidden="true"/>
            <p className="font-l font-light margin-top-s"><Translate value="iconSocial.title"/></p>
            <p className="font-light"><Translate value="iconSocial.text"/></p>
        </a>
    </div>
);

export default IconWeCare;
