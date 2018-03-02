import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './cover.css';
import video from './../../videos/CareerPageVideo-cover.mp4';
import VideoImage from './../../images/video-image.png';

class Cover extends Component {

  static propTypes = {
    phrase: PropTypes.object.isRequired,
    button: PropTypes.node,
    background: PropTypes.string.isRequired
  };

  static defaultProps = {
    button: null
  };

  render() {
    const background = this.renderCoverBackground()
    return (
      <div className="grid-item one-whole cover-wrapper">
        {background}
        <div className="absolute-container grid-item one-whole">
          <div className="cover-phrase">
            {this.props.phrase}
            {this.props.button}
          </div>
        </div>
      </div>
    )
  }

  renderCoverBackground(){
      if (this.props.background === 'video'){
        return  <div>
                  <img src={VideoImage} className="desk-hide lap-hide  video-image"/>
                  <video autoPlay loop muted className="palm-hide cover-video">
                    <source src={video}  type="video/mp4"/>
                  </video>
                </div>;
      }
      else{
        return  <div className={(this.props.background ==='cover' ? 'general-image cover-image' : 'department-image cover-image')}/>;

      }
  }
}

export default Cover;
