import React, { Component } from 'react';
import { Translate } from 'react-i18nify';

class Filters extends Component {
  render() {
    return (
        <div className="detail-filters gutter-m">
          <span className="padding-m">Sector</span>
          <span className="detail-filters-select">
            <select>
              <option selected value="all"><Translate value="all"/></option>
              <option value="IT"><Translate value="IT"/></option>
              <option value="UX"><Translate value="UX"/></option>
            </select>
          </span>
          <span className="padding-m">Contract</span>
          <span className="detail-filters-select">
            <select>
              <option selected value="all"><Translate value="all"/></option>
              <option value="Fulltime"><Translate value="Fulltime"/></option>
              <option value="Part time"><Translate value="Part time"/></option>
            </select>
          </span>
          <span className="padding-m">Qualifications</span>
          <span className="detail-filters-select">
            <select>
              <option selected value="all"><Translate value="all"/></option>
              <option value="Master"><Translate value="Master"/></option>
              <option value="Bachelor"><Translate value="Bachelor"/></option>
            </select>
          </span>
        </div>
    );
  }
}

export default Filters;
