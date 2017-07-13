import React  from 'react';
import { Translate } from 'react-i18nify';
import PropTypes from 'prop-types';

const Claim = (props) =>
        <div className="three-fourths palm-one-whole horizontal-center align-center">
            <p className="font-m font-light">"Colorful is my favorite color"<span className="align-top font-s padding-left-s">*</span></p>

            <p className="font-italic font-light">
                Home is where your story begins. Mobility takes you further on your very journey. <br/>At Scout24 we value the diversity of our employees as much as our users’ individual life scripts. Our house is open for everyone and free of stereotyped thinking. The power of our team grows with the variety of individual perspectives. Our culture embraces a workplace that fits in with your personal way of life. Together, we build leading digital marketplaces in Europe.</p>

            <p className="font-xs padding-top-xs font-lightgray">* The architect Walter Gropius</p>
        </div>

export default Claim;