import React from 'react';
import './Cover.css';
import video from './../videos/CareerPageVideo-cover.mp4';
import SearchBar from "./SearchBar";

const Cover = () => (
    <div className="grid-item one-whole">
        <video autoPlay loop muted className="palm-hide cover-video">
          <source src={video}  type="video/mp4" />
        </video>
        <SearchBar/>
    </div>
);

export default Cover;
