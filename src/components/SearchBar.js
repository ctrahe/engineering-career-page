import React, { Component } from 'react';
import './cover.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar grid gutter-m padding-vertical-m padding-horizontal-s">
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                    <select>
                        <option>Job Title</option>
                    </select>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                    <select>
                        <option>Job Level</option>
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
