import React, { Component } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import JobAdEntry from './JobAdEntry';

class JobList extends Component {

    render() {
        return (
            <div className="jobs-container">
                <h2 className="text-center">Job List</h2>
                <div className="job-info">
                    <strong>Name</strong>
                </div>
                <div className="job-info">
                    <strong>Department</strong>
                </div>
                <div className="job-info">
                    <strong>Location</strong>
                </div>
                <ul>
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
