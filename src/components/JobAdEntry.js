import React, { Component } from 'react';
import { Translate } from 'react-i18nify';
import './jobs.css'
class JobAdEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAd: this.props.jobAd,
            key: this.props.key
        }
    }

    render() {
        return (
            <li className="job-entry" >
               <a href={this.state.jobAd.absolute_url}>
                <div className="job-info">
                    <strong>{this.state.jobAd && this.state.jobAd.title}</strong>
                </div>
               <div className="job-info">
                   <strong>{this.state.jobAd && this.state.jobAd.departments[0].name}</strong>
               </div>
               <div className="job-info">
                   <strong>{this.state.jobAd && this.state.jobAd.location.name}</strong>
               </div>
               </a>
            </li>
        );
    }
}

export default JobAdEntry;
