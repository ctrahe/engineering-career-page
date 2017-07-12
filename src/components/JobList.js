import React, { Component } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import JobAdEntry from './JobAdEntry';

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAds: this.props.jobAds
        }
        this.state.jobAds.forEach(jobAd => {
            console.log(jobAd.title);
        });
    }

    render() {
        return (
            <div className="jobs-container">
                <h2 className="text-center">Job List</h2>
                <ul>
                    {this.state.jobAds.map(function(jobAd, index){
                        return <JobAdEntry jobAd={jobAd} />;
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
