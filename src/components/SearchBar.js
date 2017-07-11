import React, { Component } from 'react';
import './cover.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <select>
                    <option>Bitte auswählen</option>
                </select>
            </div>
        );
    }
}

export default SearchBar;