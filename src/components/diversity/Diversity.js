import React, { Component } from 'react';
import GenderChart from './GenderChart';
import diversityMap from './../../images/diversity.png'

class Diversity extends Component {
    render() {
        return (
          <div className="grid one-whole margin-top-xl">
            <h3 className="font-xxl font-light">A look at our current diversity numbers</h3>
            <div className="grid one-half" >
              <GenderChart/>
            </div>
            <div className="grid one-half" >
              <h6 className="font-l font-light">Diversity</h6>
              <img className="diversity-map" src={diversityMap}/>
            </div>
          </div>
        );
    }
}

export default Diversity;
