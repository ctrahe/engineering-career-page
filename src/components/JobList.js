import React, { Component } from 'react';
import './SearchBar.css'
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import JobAdEntry from './JobAdEntry';

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            department: 'all',
            city: 'all',
            company: 'all',
        };
    }

    applyFilter(event)  {
        console.log(event.target.name, event.target.value);
        if (event.target.name === 'department') {
            this.setState({ department: event.target.value })
        }
        else if (event.target.name === 'city') {
            this.setState({ city: event.target.value })
        }
        else if (event.target.name === 'company') {
            this.setState({ company: event.target.value })
        }
    }

    renderJobAds() {
        console.log('renderJobAds');
        const jobs = this.props.jobAds
            .filter(jobAd => (
                (this.state.city === 'all' ? true : jobAd.location.name.includes(this.state.city)) &&
                (this.state.department === 'all' ? true : jobAd.departments[0].name.includes(this.state.department)) &&
                (this.state.company === 'all' ? true : jobAd.metadata[0].value.toLocaleLowerCase().includes(this.state.company.toLocaleLowerCase()))))
            .map((jobAd) => (
                <JobAdEntry jobAd={jobAd} key={jobAd.id}/>)
            );
        console.log(jobs);
        return jobs;
    }
    render() {

        const filteredJobAds = this.renderJobAds();

        return (
            <div className="jobs-container">
                <div className="job-info">
                    <p>Position</p>
                </div>
                <div className="job-info">
                  <select onChange={ (event) => this.applyFilter(event) } name="department">
                    <option selected value="all"><Translate value="all"/></option>
                    <option value="Technology"><Translate value="Technology"/></option>
                    <option value="Infrastructure & Operations"><Translate value="Infrastructure & Operations"/></option>
                    <option value="Software Engineering"><Translate value="Software Engineering"/></option>
                    <option value="Data Science & Analytics"><Translate value="Data Science & Analytics"/></option>
                    <option value="Product Management & UX"><Translate value="Product Management & UX"/></option>
                  </select>
                </div>
                <div className="job-info">
                  <select name="city"  onChange={ (event) => this.applyFilter(event) }>
                    <option selected value="all"><Translate value="searchBar.cities.all"/></option>
                    <option value="Berlin"><Translate value="searchBar.cities.berlin"/></option>
                    <option value="Munich"><Translate value="searchBar.cities.munich"/></option>
                    <option value="Vienna"><Translate value="searchBar.cities.vienna"/></option>
                  </select>
                </div>
               <div className="job-info">
                 <select name="company"  onChange={ (event) => this.applyFilter(event) }>
                   <option selected value="all"><Translate value="All"/></option>
                   <option value="AutoScout24"><Translate value="AutoScout24"/></option>
                   <option value="ImmobilienScout24"><Translate value="ImmobilienScout24"/></option>
                 </select>
              </div>
                <ul className="jobs-list">

                    { filteredJobAds }

                    {/*{filteredJobAds.map(function(jobAd, index){*/}
                        {/*return <JobAdEntry jobAd={jobAd} key={index}/>;*/}
                    {/*})}*/}
                </ul>
            </div>

        );
    }

}

JobList.propTypes = {
    jobAds: PropTypes.array
}

export default JobList;
