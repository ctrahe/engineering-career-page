import React from 'react';
import {Link} from 'react-router-dom';
import SocialMedia from '../SocialMedia'
import Page from '../Page';
import Cover from '../Cover';
import WorkingAtScout from '../sharedComponents/WorkingAtScout';
import {getJobAds} from '../../utils/GreenhouseApi';
import './allPositions.css';
import {Translate} from 'react-i18nify';

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

  removeWhitespaces(item) {
    return item.replace(/\s+/g, '');
  }

  renderJobs() {
    if (!this.state.jobAds) {
      return <div className="spinner">
        <div className="bounce1"> </div>
        <div className="bounce2"> </div>
        <div className="bounce3"> </div>
      </div>;
    }
    else {
      return this.createJobOpeningItem().map((item, index) => (
        <div className="grid-item palm-one-whole lap-one-half desk-one-third" key={index}>
          <Link to={{pathname:`/department-positions/${this.removeWhitespaces(item.name)}`, department:item.name} } className="positions-container">
            <div className="border padding-horizontal-m padding-vertical-l">
              <p className="font-m">{item.name}</p>
              <span className="font-xxl font-light padding-right-s">{item.count}</span>
              <span className="font-s font-lightgray"><Translate value="jobOpenings.positions"/></span>
            </div>
          </Link>
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
      const softwarePosition = items.map(obj => obj.name.toLowerCase()).indexOf("software engineering");
      const technologyPosition = items.map(obj => obj.name.toLowerCase()).indexOf("technology");
      items[softwarePosition].count += items[technologyPosition].count;
      items.splice(technologyPosition,1);
    }
    return items;
  }

  render() {
    return (
      <Page cover={<Cover background="cover" phrase={<p>Do you want to be part of our team?<br/>We are looking forward to hearing from you!</p>}/>}>
        <h1 className="grid-item one-whole title font-h2 margin-bottom-none padding-vertical-xl"><Translate value="jobOpenings.title"/></h1>
        <div className="grid gutter-xl">
          <div className="grid-item one-whole">
            <div className="grid gutter-xl">
              {this.renderJobs()}
            </div>
          </div>
          <div className="grid-item one-whole">
            <WorkingAtScout />
            <SocialMedia/>
          </div>
        </div>
      </Page>
    );
  }

}

export default AllPositions;

