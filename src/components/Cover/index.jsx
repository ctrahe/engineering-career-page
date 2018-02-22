import React from 'react';
import PropTypes from 'prop-types';

import './cover.css';
// import video from './../../videos/CareerPageVideo-cover.mp4';
// import VideoImagePalm from './../../images/video-image.png';
// import ImageDesk from './../../images/social_media_header.jpg';

class Cover extends React.PureComponent {

  static propTypes = {
    phrase: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="grid-item one-whole">
        {/*<video autoPlay loop muted className="palm-hide cover-video">*/}
        {/*<source src={video}  type="video/mp4" />*/}
        {/*</video>*/}
        <div className="cover-image"/>
        <div className="cover-phrase">{ this.props.phrase }</div>
      </div>
    )
  }
}

export default Cover;
