import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar grid gutter-m padding-vertical-m padding-horizontal-s">
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                  {/*<span>I am searching for:</span>*/}
                  <span>
                    <input className="field" placeholder="Software developer"/>
                  </span>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third">
                  {/*<span>in:</span>*/}
                  <select className="field">
                        <option>City</option>
                        <option>Berlin</option>
                        <option>Munich</option>
                    </select>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third ">
                    <button className="field">Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
