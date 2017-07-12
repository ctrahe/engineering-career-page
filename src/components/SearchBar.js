import React, { Component } from 'react';
import './cover.css';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar grid gutter-m padding-vertical-m padding-horizontal-s">
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                    <input className="specialty" placeholder="I am searching for..."/>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                    <select>
                        <option>City</option>
                        <option>Berlin</option>
                        <option>Munich</option>
                    </select>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                    <button>Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
