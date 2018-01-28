import React, { Component } from 'react';
import './JobList.css'
import PropTypes from 'prop-types';
import { Translate } from 'react-i18nify';
import JobAdEntry from './JobAdEntry';
import { getEngineeringJobAds } from '../../GreenhouseApi';

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAds: null,
            department: 'all',
            city: props.city ? props.city : 'all',
            company: 'all',
            position: 'all',
            jobField: props.city ? props.city : ''
        };
    }

    componentWillMount() {
        getEngineeringJobAds().then(jobs => {
            console.log(jobs);
                this.setState({...this.state, jobAds: jobs});
            }
        );
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
        const jobs = this.state.jobAds
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
                <JobAdEntry jobAd={jobAd} key={jobAd.id}/>)
            );
        return jobs;
    }

    render() {

        const filteredJobAds = this.renderJobAds();

        return (
            <div className="jobs-container">
                <div className="job-info font-m palm-one-whole">
                    <select className="filterField" onChange={ (event) => this.applyFilter(event) } name="position">
                        <option selected value="all"><Translate value="filter.position.all"/></option>
                        <option value="fulltime"><Translate value="filter.position.fullTime"/></option>
                        <option value="parttime"><Translate value="filter.position.partTime"/></option>
                    </select>
                </div>
                <div className="job-info palm-one-whole">
                  <select className="filterField" onChange={ (event) => this.applyFilter(event) } name="department">
                    <option selected value="all"><Translate value="filter.department.all"/></option>
                    <option value="Technology"><Translate value="Technology"/></option>
                    <option value="Infrastructure & Operations"><Translate value="Infrastructure & Operations"/></option>
                    <option value="Software Engineering"><Translate value="Software Engineering"/></option>
                    <option value="Data Science & Analytics"><Translate value="Data Science & Analytics"/></option>
                    <option value="Product Management & UX"><Translate value="Product Management & UX"/></option>
                  </select>
                </div>
                <div className="job-info palm-one-whole">
                  <select className="filterField" name="city"  onChange={ (event) => this.applyFilter(event) } value={this.state.city}>
                    <option selected value="all"><Translate value="filter.cities.all"/></option>
                    <option value="Berlin"><Translate value="filter.cities.berlin"/></option>
                    <option value="Munich"><Translate value="filter.cities.munich"/></option>
                    <option value="Vienna"><Translate value="filter.cities.vienna"/></option>
                  </select>
                </div>
               <div className="job-info palm-one-whole">
                 <select className="filterField" name="company"  onChange={ (event) => this.applyFilter(event) }>
                   <option selected value="all"><Translate value="filter.company.all"/></option>
                   <option value="AutoScout24"><Translate value="filter.company.as24"/></option>
                   <option value="ImmobilienScout24"><Translate value="filter.company.is24"/></option>
                   <option value="Scout24"><Translate value="filter.company.s24"/></option>
                 </select>
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
