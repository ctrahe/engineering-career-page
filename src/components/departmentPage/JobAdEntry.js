import React  from 'react';
import './jobs.css'

const JobAdEntry = (props) =>
  <a className="job-link" href={props.jobAd.absolute_url}>
            <li className="job-entry" >
                <div className="job-info palm-one-whole">
                    <strong>{props.jobAd && props.jobAd.title}</strong>
                </div>
               <div className="job-info palm-one-whole">
                   <strong>{props.jobAd && props.jobAd.departments[0].name}</strong>
               </div>
               <div className="job-info palm-one-whole">
                   <i className="fa fa-map-marker" />
                   <strong>{props.jobAd && props.jobAd.location.name}</strong>
               </div>
               <div className="job-info palm-one-whole">
                 <i className="fa fa-building" />
                 <strong>{props.jobAd && props.jobAd.metadata[0].value}</strong>
               </div>
            </li>
  </a>;
export default JobAdEntry;
