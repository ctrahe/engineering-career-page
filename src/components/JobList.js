import React, { Component } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import JobAdEntry from './JobAdEntry';

class JobList extends Component {

    render() {
        return (
            <div className="jobs-container">
                <div className="job-info">
                    <p>Position</p>
                </div>
                <div className="job-info">
                  <select>
                    <option selected value="all"><Translate value="all"/></option>
                    <option value="Technology"><Translate value="Technology"/></option>
                    <option value="Infrastructure & Operations"><Translate value="Infrastructure & Operations"/></option>
                    <option value="Software Engineering"><Translate value="Software Engineering"/></option>
                    <option value="Data Science & Analytics"><Translate value="Data Science & Analytics"/></option>
                    <option value="Product Management & UX"><Translate value="Product Management & UX"/></option>
                  </select>
                </div>
                <div className="job-info">
                  <select>
                    <option selected value="all"><Translate value="searchBar.cities.all"/></option>
                    <option value="Berlin"><Translate value="searchBar.cities.berlin"/></option>
                    <option value="Munich"><Translate value="searchBar.cities.munich"/></option>
                    <option value="Vienna"><Translate value="searchBar.cities.vienna"/></option>
                  </select>
                </div>
               <div className="job-info">
                 <select>
                   <option selected value="all"><Translate value="All"/></option>
                   <option value="AutoScout24"><Translate value="AutoScout24"/></option>
                   <option value="ImmobilienScout24"><Translate value="ImmobilienScout24"/></option>
                 </select>
              </div>
                <ul className="jobs-list">
                    {this.props.jobAds.map(function(jobAd, index){
                        return <JobAdEntry jobAd={jobAd} key={index}/>;
                    })}
                </ul>
            </div>

        );
    }

}

JobList.propTypes = {
    jobAds: PropTypes.array
}

export default JobList;
