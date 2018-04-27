import React, { Component } from "react";
import PropTypes from "prop-types";
import { Translate } from "react-i18nify";
import SocialMedia from "../SocialMedia"
import { getJobAds } from "../../utils/GreenhouseApi";
import JobAdEntry from "./JobAdEntry/jobAdEntry";
import DropdownList from "./DropdownList";

import "./jobList.css"

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAds: null,
            department: this.props.department,
            departments: null,
            city: "All",
            company: "All",
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
    }

    componentWillMount() {
        getJobAds().then(jobs => {
          this.setState({...this.state, jobAds: jobs});
        });
    }

    createDropdownList(type) {
      let names = `item.${type}.name`;
      const set = new Set();
      set.add("All");
      if (this.state.jobAds) {
        // eslint-disable-next-line
        this.state.jobAds.jobs.forEach(item => set.add(eval(names)));
      }
      if(type.includes("department")){
        set.delete("Technology");
        set.add("Working Students/Interns");
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
             (this.state.city === 'Berlin' ? jobAd.location.name.toLowerCase().includes('berlin') : false) ||
             (this.state.city === 'Berlin/München' ? (jobAd.location.name.toLowerCase().includes('berlin') || jobAd.location.name.toLowerCase().includes('münchen')|| jobAd.location.name.toLowerCase().includes('munich')): false) ||
             (this.state.city === 'Frankfurt am Main' ? jobAd.location.name.toLowerCase().includes('frankfurt') : false) ||
             (this.state.city === 'München' ? (jobAd.location.name.toLowerCase().includes('münchen')|| jobAd.location.name.toLowerCase().includes('munich')) : false) ||
             (this.state.city === 'Nordrhein-Westfalen' ? (jobAd.location.name.toLowerCase().includes('nrw') || jobAd.location.name.toLowerCase().includes('nordrhein')) : false) ||
             (this.state.city === 'Wien' ? (jobAd.location.name.toLowerCase().includes('wien') || jobAd.location.name.toLowerCase().includes('vienna') || jobAd.location.name.toLowerCase().includes('österreich')|| jobAd.location.name.toLowerCase().includes('austria')) : false)

            ) &&

            (
            this.state.department === "All" ? true :
            (this.state.department.toLowerCase().includes("software")? jobAd.departments[0].name.toLowerCase().includes("technology") : false) ||
            (this.state.department.toLowerCase().includes("intern") ?  (jobAd.title.toLowerCase().includes("intern") || jobAd.title.toLowerCase().includes("praktik") || jobAd.title.toLowerCase().includes("werkstudent")) : false)
            )
            &&
            (this.state.department === "All" ? true : jobAd.departments[0].name.includes(this.state.department) ||
             this.state.department.toLowerCase().includes("intern") ?  (jobAd.title.toLowerCase().includes("intern") || jobAd.title.toLowerCase().includes("praktik") || jobAd.title.toLowerCase().includes("werkstudent")) :
             (!jobAd.title.toLowerCase().includes("intern") && !jobAd.title.toLowerCase().includes("praktik") && !jobAd.title.toLowerCase().includes("werkstudent")))

            &&
            (
              this.state.company === "All" ? true :
              (this.state.company === "ImmobilienScout24" ? jobAd.metadata[0].value.toLowerCase().includes("immobilien") : false) ||
              (this.state.company === "AutoScout24" ? jobAd.metadata[0].value.toLowerCase().includes("auto") : false) ||
              (this.state.company === "classmarkets" ? jobAd.metadata[0].value.toLowerCase().includes("classmarkets") : false) ||
              (this.state.company === "Scout24" ? jobAd.metadata[0].value.toLowerCase().startsWith(this.state.company.toLowerCase()) : false))))
          .map((jobAd) => (
            <JobAdEntry jobAd={jobAd} key={jobAd.id}/>));
      }
    }

    render() {
      const companyList = ["All","ImmobilienScout24", "AutoScout24", "Scout24", "classmarkets"];
      const cityList = ["Berlin", "Berlin/München", "Frankfurt am Main", "München", "Nordrhein-Westfalen", "Wien"];
      const filteredJobAds = this.renderJobAds();
        return (
            <div className="jobs-container">
                <div className="job-info palm-one-whole">
                  <span className="filter-label">Team</span>
                  <DropdownList list={this.createDropdownList("departments[0]")} selected={this.state.department} dropdownNumber={1} setSelected = {this.setSelected}/>
                </div>
               <div className="job-info palm-one-whole">
                 <span className="filter-label"><Translate value="filter.company.title"/></span>
                 <DropdownList list={companyList}  selected={this.state.company} dropdownNumber={2}  setSelected = {this.setSelected}/>
               </div>
              <div className="job-info palm-one-whole">
                <span className="filter-label"><Translate value="filter.cities.title"/></span>
                <DropdownList list={cityList} selected={this.state.city} dropdownNumber={3} setSelected = {this.setSelected}/>
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
