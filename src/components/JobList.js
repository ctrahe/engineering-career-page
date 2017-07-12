import React, { Component } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import JobAdEntry from './JobAdEntry';
import Filters from './Filters';

class JobList extends Component {

    render() {
        return (
            <div className="jobs-container">
                <Filters />
                <div className="job-info">
                    <h3>Name</h3>
                </div>
                <div className="job-info">
                    <h3>Department</h3>
                </div>
                <div className="job-info">
                  <h3>Location</h3>
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
