import React  from 'react';
import { Translate } from 'react-i18nify';
import './jobs.css'
import PropTypes from 'prop-types';

const JobAdEntry = (props) =>
            <li className="job-entry" >
               <a href={props.jobAd.absolute_url}>
                <div className="job-info">
                    <strong>{props.jobAd && props.jobAd.title}</strong>
                </div>
               <div className="job-info">
                   <strong>{props.jobAd && props.jobAd.departments[0].name}</strong>
               </div>
               <div className="job-info">
                   <i className="fa fa-map-marker"></i>
                   <strong>{props.jobAd && props.jobAd.location.name}</strong>
               </div>
               </a>
            </li>


export default JobAdEntry;
