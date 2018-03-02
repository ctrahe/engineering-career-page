import React  from 'react';
import './jobAdEntry.css'

const JobAdEntry = (props) =>
  <a className="job-link" href={props.jobAd.absolute_url}  target="_blank">
            <li className="job-entry" >
                <div className="job-info one-whole job-title">
                  {props.jobAd && props.jobAd.title}
                </div>
               <div className="job-info one-whole job-city">
                 {props.jobAd && props.jobAd.location.name}
               </div>
            </li>
  </a>;
export default JobAdEntry;
