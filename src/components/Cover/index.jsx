import React from 'react';
import './cover.css';
import video from './../../videos/CareerPageVideo-cover.mp4';
import VideoImage from './../../images/video-image.png';

const Cover = () => (
    <div className="grid-item one-whole">
        <video autoPlay loop muted className="palm-hide cover-video">
          <source src={video}  type="video/mp4" />
        </video>
        <img src={VideoImage} className="desk-hide lap-hide  video-image" alt="Working at Scout24"/>
    </div>
);

export default Cover;
