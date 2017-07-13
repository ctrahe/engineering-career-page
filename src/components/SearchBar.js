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
            jobAds: [],
            jobField: 'Software Engineer',
            city: 'all'

        }
        this.displayAllJobs = this.displayAllJobs.bind(this)
        this.handleJobFieldChange = this.handleJobFieldChange.bind(this)
        this.handleCityChange = this.handleCityChange.bind(this)
        this.displayJobIn = this.displayJobIn.bind(this)
    }

    displayAllJobs() {
        getEngineeringJobAds().then(jobs => {
                this.setState({...this.state, showJobList: true, jobAds: jobs});
            }
        );
    }

    handleJobFieldChange(event) {
        this.setState({...this.state, jobField: event.target.value})
    }

    handleCityChange(event) {
        console.log(event.target.value);
        this.setState({...this.state, city: event.target.value})
    }

    displayJobIn(jobField, city) {
        getEngineeringJobAds().then(jobs => {



            const jobAds = [...jobs].filter((job) => {
                    var matchesCity = job.location.name.includes(city);
                    if(city == 'Munich') {
                        matchesCity = (matchesCity || job.location.name.includes('München'));
                    }
                    var matchesTitle = job.title.includes(jobField);
                    var matchesDescription = job.content.includes(jobField);
                    var matchesDepartment = job.departments[0].name.includes(jobField);
                    return matchesCity && (matchesTitle || matchesDescription || matchesDepartment);
                }
            );

            this.setState({
                showJobList: true,
                jobAds
            });
        });
    }

    render() {
        return (
            <div>
                <div className="search-bar grid gutter-m padding-vertical-m padding-horizontal-s">
                    <div className="grid-item palm-one-whole lap-one-half desk-one-sixth padding-top-s align-center">
                        <span className="font-m font-white"><Translate value="searchBar.iSearchFor"/></span>
                    </div>
                    <div className="grid-item palm-one-whole lap-one-half desk-one-fourth">
                      <span>
                        <input className="field" placeholder="Software developer" onChange={(event) => this.handleJobFieldChange(event)}/>
                      </span>
                    </div>
                    <div className="grid-item palm-one-whole lap-one-half desk-one-tenth padding-top-s align-center">
                        <span className="font-m font-white"><Translate value="searchBar.jobsIn"/></span>
                    </div>
                    <div className="grid-item palm-one-whole lap-one-half desk-one-fifth">
                      <select className="field" onChange={(event) => this.handleCityChange(event)} value={this.state.city}>
                            <option selected value="all"><Translate value="searchBar.cities.all"/></option>
                            <option value="Berlin"><Translate value="searchBar.cities.berlin"/></option>
                            <option value="Munich"><Translate value="searchBar.cities.munich"/></option>
                      </select>
                    </div>
                    <div className="grid-item palm-one-whole lap-one-whole desk-one-fourth ">
                        <button className="field" onClick={() => this.displayJobIn(this.state.jobField, this.state.city)}><Translate value="searchBar.search"/></button>
                    </div>
                    <div className="grid-item one-whole align-center">
                        <button className="field align-center one-half" onClick={() => this.displayAllJobs()} ><Translate value="searchBar.searchAllJobs"/></button>
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
