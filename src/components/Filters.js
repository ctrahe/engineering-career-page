import React, { Component } from 'react';
import { Translate } from 'react-i18nify';

class Filters extends Component {
  render() {
    return (
        <div className="detail-filters gutter-m">
          <span className="padding-m">Department</span>
          <span className="detail-filters-select">
            <select>
              <option selected value="all"><Translate value="all"/></option>
              <option value="Technology"><Translate value="Technology"/></option>
              <option value="Infrastructure & Operations"><Translate value="Infrastructure & Operations"/></option>
              <option value="Software Engineering"><Translate value="Software Engineering"/></option>
              <option value="Data Science & Analytics"><Translate value="Data Science & Analytics"/></option>
              <option value="Product Management & UX"><Translate value="Product Management & UX"/></option>
            </select>
          </span>
          <span className="padding-m">City</span>
          <span className="detail-filters-select">
            <select>
              <option selected value="all"><Translate value="searchBar.cities.all"/></option>
              <option value="Berlin"><Translate value="searchBar.cities.berlin"/></option>
              <option value="Munich"><Translate value="searchBar.cities.munich"/></option>
              <option value="Vienna"><Translate value="searchBar.cities.vienna"/></option>
            </select>
          </span>
          <span className="padding-m">Company</span>
          <span className="detail-filters-select">
           <select>
              <option selected value="all"><Translate value="All"/></option>
              <option value="AutoScout24"><Translate value="AutoScout24"/></option>
              <option value="ImmobilienScout24"><Translate value="ImmobilienScout24"/></option>
            </select>
          </span>
        </div>
    );
  }
}

export default Filters;
