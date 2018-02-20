import React from 'react';

import Page from '../Page';
import './allPositions.css';

class AllPositions extends React.Component {

  render() {
    return (
      <Page>
        <h1 className="title font-h2 padding-vertical-l">Current Job Openings</h1>
        <div className="grid gutter-xl">
          <div className="grid-item palm-one-whole lap-one-half desk-one-third">
            <div className="positions-container border padding-horizontal-m padding-vertical-l">
              <p className="font-m">Business Development & Strategy</p>
              <span className="font-xxl font-light padding-right-s">3</span><span className="font-s font-lightgray">positions</span>
            </div>
          </div>
        </div>
      </Page>
    );
  }

}

export default AllPositions;

