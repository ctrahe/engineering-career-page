import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './cover.css';

class Cover extends Component {

  static propTypes = {
    phrase: PropTypes.object.isRequired,
    button: PropTypes.node,
    background: PropTypes.string.isRequired,
    departmentImage: PropTypes.string
  };

  static defaultProps = {
    button: null
  };

  render() {
    const background = this.renderCoverBackground();
    return (
      <div className="grid-item one-whole cover-wrapper">
        {background}
        <span className="img-source">Bildquelle: officedropin.com</span>
        <div className="absolute-container grid-item one-whole">
          <div className="cover-phrase">
            {this.props.phrase}
            {this.props.button}
          </div>
        </div>
      </div>
    )
  }

  renderCoverBackground() {
    return  <div className={(this.props.background === 'cover' ? 'general-image cover-image' : this.props.departmentImage + ' cover-image')}/>;
  }
}

export default Cover;
