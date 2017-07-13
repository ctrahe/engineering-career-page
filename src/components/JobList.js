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
                    <p>Position</p>
                </div>
                <div className="job-info">
                    <p>Department</p>
                </div>
                <div className="job-info">
                  <p>Location</p>
                </div>
               <div className="job-info">
                <p>Company</p>
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
