import React, { Component } from 'react';
import './SearchBar.css'
import { Translate } from 'react-i18nify';
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
                        <option selected value><Translate value="searchBar.cities.all"/></option>
                        <option value="Berlin"><Translate value="searchBar.cities.berlin"/></option>
                        <option value="Munich"><Translate value="searchBar.cities.munich"/></option>
                    </select>
                </div>
                <div className="grid-item palm-one-whole lap-one-third desk-one-third ">
                    <button className="field" ><Translate value="searchBar.search"/></button>
                </div>
                <div className="grid-item one-whole align-center">
                    <button className="field align-center one-half" ><Translate value="searchBar.searchAllJobs"/></button>
                </div>
            </div>
        );
    }
}

export default SearchBar;
