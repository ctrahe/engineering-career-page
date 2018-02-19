import React from 'react';
import './cover.css';
// import video from './../../videos/CareerPageVideo-cover.mp4';
// import VideoImagePalm from './../../images/video-image.png';
// import ImageDesk from './../../images/social_media_header.jpg';

const Cover = () => (
    <div className="grid-item one-whole">
        {/*<video autoPlay loop muted className="palm-hide cover-video">*/}
          {/*<source src={video}  type="video/mp4" />*/}
        {/*</video>*/}
      <div className="cover-image" />
      <div className="cover-phrase">
        <p>Do you want to be part of our team?</p>
        <p>We are looking forward to hearing from you!</p>
      </div>
        {/*<img src={VideoImagePalm} className="desk-hide lap-hide video-image" alt="Working at Scout24"/>*/}
    </div>
);

export default Cover;
