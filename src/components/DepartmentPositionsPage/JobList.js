import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import SocialMedia from '../SocialMedia'
import { getJobAds } from '../../utils/GreenhouseApi';
import JobAdEntry from './JobAdEntry/jobAdEntry';
import DropdownList from "./DropdownList";

import './jobList.css'

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAds: null,
            department: this.props.department,
            departments: null,
            city: 'All',
            company: 'All',
            employmentType: 'All'
        };
      this.setSelected = this.setSelected.bind(this);
    }

    setSelected(selectedItem, dropDown) {

      if (dropDown===1){
        this.props.setSelectedDepartment(selectedItem);
        this.setState({
          department: selectedItem
        });
      }
      if (dropDown===2){
        this.setState({
          company: selectedItem
        });
      }
      if (dropDown===3){
        this.setState({
          city: selectedItem
        });
      }
      if (dropDown===4){
        this.setState({
          employmentType: selectedItem
        });
      }
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

    renderJobAds() {
      if (!this.state.jobAds) {
          return <div className="spinner">
                      <div className="bounce1"> </div>
                      <div className="bounce2"> </div>
                      <div className="bounce3"> </div>
                  </div>;
      }
      else {
        return this.state.jobAds.jobs
          .filter(jobAd => (
            (
              (this.state.city === 'All' ? true : jobAd.location.name.includes(this.state.city)) ||
              (this.state.city === 'Munich' ? jobAd.location.name.includes('München') : false) ||
              (this.state.city === 'Vienna' ? jobAd.location.name.includes('Wien') : false)
            ) &&
              (this.state.employmentType === 'All' ? true :
                  (this.state.employmentType === 'Part-time' ?
                      //Filter Parttime
                      (
                        jobAd.title.toLowerCase().includes('intern') ||
                        jobAd.title.toLowerCase().includes('praktik') ||
                        jobAd.title.toLowerCase().includes('werkstudent')
                      ) :
                      //Filter Fulltime
                      (
                        !jobAd.title.toLowerCase().includes('intern') &&
                        !jobAd.title.toLowerCase().includes('praktik') &&
                        jobAd.title.toLowerCase().includes('werkstudent')
                      )
                  )
              )
            &&
            (this.state.department === 'All' ? true : jobAd.departments[0].name.includes(this.state.department)) &&
            (
              this.state.company === 'All' ? true :
                (this.state.company === 'ImmobilienScout24' ? jobAd.metadata[0].value.toLowerCase().includes('immobilien') : false) ||
                (this.state.company === 'AutoScout24' ? jobAd.metadata[0].value.toLowerCase().includes('auto') : false) ||
                (this.state.company === 'Scout24' ? jobAd.metadata[0].value.toLowerCase().startsWith(this.state.company.toLowerCase()) : false))))
          .map((jobAd) => (
            <JobAdEntry jobAd={jobAd} key={jobAd.id}/>));
      }
    }

    render() {
      const locationList = ["All", "Berlin", "Munich", "Vienna"];
      const employmentTypeList = ["All","Full-time", "Part-time"];
      const companyList = ["All","ImmobilienScout24", "AutoScout24", "Scout24"];
      const filteredJobAds = this.renderJobAds();
        return (
            <div className="jobs-container">
                <div className="job-info palm-one-whole">
                  <span className="filter-label">Team</span>
                  <DropdownList list={this.createListOfDepartmentNames()} selected={this.state.department} dropdownNumber={1} setSelected = {this.setSelected}/>
                </div>
               <div className="job-info palm-one-whole">
                 <span className="filter-label"><Translate value="filter.company.title"/></span>
                 <DropdownList list={companyList}  selected={this.state.company} dropdownNumber={2}  setSelected = {this.setSelected}/>
               </div>
              <div className="job-info palm-one-whole">
                <span className="filter-label"><Translate value="filter.cities.title"/></span>
                <DropdownList list={locationList} selected={this.state.city} dropdownNumber={3} setSelected = {this.setSelected}/>
              </div>
              <div className="job-info palm-one-whole">
                <span className="filter-label"><Translate value="filter.employmentType.title"/></span>
                <DropdownList list={employmentTypeList} selected={this.state.employmentType} dropdownNumber={4}  setSelected = {this.setSelected}/>
              </div>
                <ul className="jobs-list">
                    { filteredJobAds }
                </ul>
              <SocialMedia/>

            </div>
        );
    }

}

JobList.propTypes = {
    jobAds: PropTypes.array
};

export default JobList;
