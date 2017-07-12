import React, { Component } from 'react';
import './SearchBar.css';
import JobList from './JobList';
import { Translate } from 'react-i18nify';
import { getEngineeringJobAds } from './../GreenhouseApi';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showJobList: false,
            jobAds: []

        }
        this.searchAllJobs = this.searchAllJobs.bind(this)
    }

    searchAllJobs () {
        getEngineeringJobAds().then(jobs => {
                this.setState({jobAds: jobs, showJobList: true});
            }
        );
    }

    render() {
        return (
            <div>
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
                        <button className="field" oncl ><Translate value="searchBar.search"/></button>
                    </div>
                    <div className="grid-item one-whole align-center">
                        <button className="field align-center one-half" onClick={this.searchAllJobs} ><Translate value="searchBar.searchAllJobs"/></button>
                    </div>
                </div>
                {this.state.showJobList && this.state.jobAds &&
                    <JobList jobAds={this.state.jobAds}/>
                }
            </div>
        );
    }
}

export default SearchBar;
