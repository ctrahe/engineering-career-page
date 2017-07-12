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
            <div>
                <h2>Job List</h2>
                {/*{this.state.jobAds && this.state.jobAds.forEach(jobAd => {*/}
                    {/*<span>{jobAd.title}</span>*/}
                {/*})}*/}
                {this.state.jobAds.map(function(jobAd, index){
                    return <JobAdEntry jobAd={jobAd} />;
                })}
            </div>

        );
    }

}

JobList.propTypes = {
    jobAds: PropTypes.array
}

export default JobList;