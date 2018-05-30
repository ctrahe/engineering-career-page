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
      </div>
    );
  }

}

export default WorkingAtScout;
