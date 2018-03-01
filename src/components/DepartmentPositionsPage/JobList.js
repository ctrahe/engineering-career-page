import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';

import { getJobAds } from '../../utils/GreenhouseApi';
import JobAdEntry from './JobAdEntry';
import './jobList.css'
import DropdownList from "./DropdownList";

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAds: null,
            department: this.props.department,
            departments:null,
            city: props.city ? props.city : 'all',
            company: 'all',
            position: 'all',
            jobField: props.city ? props.city : ''
        };
    }

    componentWillMount() {
        getJobAds().then(jobs => {
          this.setState({...this.state, jobAds: jobs});
        });
    }
    createListOfDepartmentNames() {
      const set = new Set();
      if (this.state.jobAds) {
        this.state.jobAds.jobs.forEach(item => set.add(item.departments[0].name));
      }
      return Array.from(set);
    }

    applyFilter(event)  {
        if (event.target.name === 'department') {
            this.setState({ department: event.target.value })
        }
        else if (event.target.name === 'city') {
            this.setState({ city: event.target.value })
        }
        else if (event.target.name === 'company') {
            this.setState({ company: event.target.value })
        }
        else if (event.target.name === 'position') {
            this.setState({ position: event.target.value })
        }
    }

    renderJobAds() {
      if (!this.state.jobAds) {
          return <div className="spinner">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                  </div>;
      }
      else {
        return this.state.jobAds.jobs
          .filter(jobAd => (
            (
              (this.state.city === 'all' ? true : jobAd.location.name.includes(this.state.city)) ||
              (this.state.city === 'Munich' ? jobAd.location.name.includes('München') : false) ||
              (this.state.city === 'Vienna' ? jobAd.location.name.includes('Wien') : false)
            ) &&
            (
              (this.state.position === 'all' ? true :
                  (this.state.position === 'parttime' ?
                      //Filter Parttime
                      (
                        (jobAd.title.toLowerCase().includes('intern')) ||
                        jobAd.title.toLowerCase().includes('praktik')
                      ) :
                      //Filter Fulltime
                      (
                        !(jobAd.title.toLowerCase().includes('intern')) &&
                        !jobAd.title.toLowerCase().includes('praktik')
                      )
                  )
              )
            ) &&
            (this.state.department === 'all' ? true : jobAd.departments[0].name.includes(this.state.department)) &&
            (
              this.state.company === 'all' ? true :
                this.state.company === 'Scout24' ? jobAd.metadata[0].value.toLowerCase() === this.state.company.toLowerCase() :
                  jobAd.metadata[0].value.toLowerCase().includes(this.state.company.toLowerCase()))))
          .map((jobAd) => (
            <JobAdEntry jobAd={jobAd} key={jobAd.id}/>));
      }
    }

    render() {
      const locationList = ["Berlin", "Munchen", "Vienna"];
      const employmentTypeList = ["Full-time", "Part-time"];
      const companyList = ["ImmobilienScout24", "AutoScout24", "Scout24"];
      const filteredJobAds = this.renderJobAds();
        return (
            <div className="jobs-container">
                <div className="job-info palm-one-whole">
                  <span className="filter-label">Team</span>
                  <DropdownList list={this.createListOfDepartmentNames()} selected={this.state.department}/>
                </div>
               <div className="job-info palm-one-whole">
                 <span className="filter-label"><Translate value="filter.company.title"/></span>
                 <DropdownList list={companyList} selected={companyList[0]}/>
               </div>
              <div className="job-info palm-one-whole">
                <span className="filter-label"><Translate value="filter.cities.title"/></span>
                <DropdownList list={locationList} selected={locationList[0]}/>
              </div>
              <div className="job-info palm-one-whole">
                <span className="filter-label"><Translate value="filter.position.title"/></span>
                <DropdownList list={employmentTypeList} selected={employmentTypeList[0]}/>
              </div>
                <ul className="jobs-list">
                    { filteredJobAds }
                </ul>
            </div>
        );
    }

}

JobList.propTypes = {
    jobAds: PropTypes.array
};

export default JobList;
