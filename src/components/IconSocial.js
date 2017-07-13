import React from 'react';
import './IconCockpit.css';
import { Translate } from 'react-i18nify';

const IconSocial = () => (
    <div className="grid-item palm-one-whole lap-one-third desk-one-third text-center">
        <a href="https://csrbericht.scout24.com/de/">
            <p><i className="font-xxl fa fa-thumbs-o-up" aria-hidden="true"></i></p>
            <p className="font-l font-light margin-top-s"><Translate value="iconSocial.title"/></p>
            <p className="font-light"><Translate value="iconSocial.text"/></p>
        </a>
    </div>
);

export default IconSocial;
