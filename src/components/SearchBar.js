import React, { Component } from 'react';
import './SearchBar.css'
import { getEngineeringJobAds } from './../GreenhouseApi';

class SearchBar extends Component {
  // search:function(keyword, city) {
  //   getEngineeringJobAds().then(jobAds => {
  //     this.setState({jobAds: jobAds})
  //   });
  // },
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
                        <option selected value>Everywhere</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Munich">Munich</option>
                    </select>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third ">
                    <button className="field" >Search</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
