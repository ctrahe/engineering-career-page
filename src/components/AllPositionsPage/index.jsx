import React from 'react';

import Page from '../Page';
import {getJobAds} from '../../GreenhouseApi';
import './allPositions.css';

class AllPositions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobAds: null
    };
  }

  componentWillMount() {
    getJobAds().then(jobs => {
        this.setState({...this.state, jobAds: jobs});
      }
    );
  };

  renderJobs() {
    if (this.state.jobAds) {
      return this.createJobOpeningItem().map((item, index) => (
        <div className="grid-item palm-one-whole lap-one-half desk-one-third" key={index}>
          <div className="positions-container border padding-horizontal-m padding-vertical-l">
            <p className="font-m">{item.name}</p>
            <span className="font-xxl font-light padding-right-s">{item.count}</span>
            <span className="font-s font-lightgray">positions</span>
          </div>
        </div>
      ));
    }
  }

  createListOfDepartmentNames() {
    const set = new Set();
    if (this.state.jobAds) {
      this.state.jobAds.jobs.forEach(item => set.add(item.departments[0].name));
    }
    return Array.from(set);
  }

  calculateCount(name) {
    return this.state.jobAds.jobs.filter(job => {
      return job.departments[0].name === name
    }).length;
  }

  createJobOpeningItem() {
    const items = [];
    if (this.state.jobAds) {
      const names = this.createListOfDepartmentNames();
      names.forEach(name => {
        items.push({
          name: name,
          count: this.calculateCount(name)
        })
      });
    }
    return items;
  }

  render() {

    return (
      <Page>
        <h1 className="title font-h2 margin-bottom-none padding-vertical-xl">Current Job Openings</h1>
        <div className="grid gutter-xl">
          {this.renderJobs()}
        </div>
      </Page>
    );
  }

}

export default AllPositions;

