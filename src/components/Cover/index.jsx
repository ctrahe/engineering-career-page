import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './cover.css';

class Cover extends Component {

  static propTypes = {
    phrase: PropTypes.object.isRequired,
    button: PropTypes.node,
    image: PropTypes.string.isRequired
  };

  static defaultProps = {
    button: null
  };

  render() {
    return (
      <div className="grid-item one-whole cover-wrapper">
        <div className={(this.props.image ==='cover' ? 'general-image cover-image' : 'department-image cover-image')}/>
        <div className="absolute-container grid-item one-whole">
          <div className="cover-phrase">
            {this.props.phrase}
          </div>
          {this.props.button}
        </div>
      </div>
    )
  }
}

export default Cover;
