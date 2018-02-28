import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';

class WorkingAtScout extends React.PureComponent {

  static propTypes = {
    button: PropTypes.node
  };

  static defaultProps = {
    button: null
  };

  render() {
    return (
      <div className="grid grid-flex gutter-xl">
        <div className="grid-item palm-one-whole one-half">
          <h2 className="font-m margin-bottom-m article-title margin-top-m"><Translate value="workingAtScout.mission.title"/></h2>
          <p className="article-text font-lightgray font-light"><Translate value="workingAtScout.mission.text"/></p>
        </div>
        <div className="grid-item palm-one-whole one-half">
          <h2 className="font-m margin-bottom-m article-title margin-top-m"><Translate value="workingAtScout.diversity.title"/></h2>
          <p className="article-text font-lightgray font-light"><Translate value="workingAtScout.diversity.text"/></p>
        </div>
        <div className="grid-item palm-one-whole one-half">
          <h2 className="font-m margin-bottom-m article-title margin-top-m"><Translate value="workingAtScout.benefits.title"/></h2>
          <p className="article-text font-lightgray font-light"><Translate value="workingAtScout.benefits.text"/></p>
        </div>
        <div className="grid-item palm-one-whole one-half">
          <h2 className="font-m margin-bottom-m article-title margin-top-m"><Translate value="workingAtScout.spirit.title"/></h2>
          <p className="article-text font-lightgray font-light"><Translate value="workingAtScout.spirit.text"/></p>
        </div>
        <div className="grid-item palm-one-whole one-half">
          <h2 className="font-m margin-bottom-m article-title margin-top-m"><Translate value="workingAtScout.balance.title"/></h2>
          <p className="article-text font-lightgray font-light"><Translate value="workingAtScout.balance.text"/></p>
        </div>
        <div className="grid-item palm-one-whole one-half">
          <h2 className="font-m margin-bottom-m article-title margin-top-m"><Translate value="workingAtScout.development.title"/></h2>
          <p className="article-text font-lightgray font-light"><Translate value="workingAtScout.development.text"/></p>
        </div>
        <div className="grid-item one-whole">
          { this.props.button }
        </div>
        <div className="grid-item one-whole">
          <div className="divider margin-vertical-l"/>
          <div className="social-media-links margin-bottom-m">
            <a target="_blank" href="https://www.linkedin.com/company/scout24-group" rel="noopener noreferrer" title="Linked In" className="linkedin" />
            <a target="_blank" href="https://www.xing.com/companies/scout24holdinggmbh" rel="noopener noreferrer" title="Xing" className="xing" />
            <a target="_blank" href="https://twitter.com/Scout24" rel="noopener noreferrer" title="Twitter" className="twitter" />
            <a target="_blank" href="https://www.youtube.com/user/scout24" rel="noopener noreferrer" title="YouTube" className="youtube" />
            <a target="_blank" href="https://www.facebook.com/Scout24" rel="noopener noreferrer" title="Facebook" className="facebook" />
            <a target="_blank" href="https://www.instagram.com/scout24_official/" rel="noopener noreferrer" title="Instagram" className="instagram" />
          </div>
          <a className="block margin-bottom-s" target="_blank" href="http://blog.scout24.com/" rel="noopener noreferrer">Corporate Blog</a>
          <a className="block" target="_blank" href="http://techblog.scout24.com/" rel="noopener noreferrer">Tech Blog</a>
        </div>
      </div>
    );
  }

}

export default WorkingAtScout;
