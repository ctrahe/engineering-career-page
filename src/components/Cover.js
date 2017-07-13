import React from 'react';
import './Cover.css';
import video from './../videos/CareerPageVideo-cover.mp4';
import SearchBar from "./SearchBar";
import VideoImage from './../images/video-image.png';
const Cover = () => (
    <div className="grid-item one-whole">
        <video autoPlay loop muted className="palm-hide cover-video">
          <source src={video}  type="video/mp4" />
        </video>
        <img src={VideoImage} className="desk-hide lap-hide  video-image"/>
        <SearchBar/>
    </div>
);

export default Cover;
