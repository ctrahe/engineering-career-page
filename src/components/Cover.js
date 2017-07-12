import React from 'react';
import './cover.css';
import cover from './../images/cover_image.jpg';
import SearchBar from "./SearchBar";

const Cover = () => (
    <div className="grid one-whole">
        <img  src={cover} className="cover-image" ></img>
        <SearchBar/>
    </div>
);

export default Cover;
