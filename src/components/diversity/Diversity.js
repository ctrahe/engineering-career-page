import React, { Component } from 'react';
import GenderChart from './GenderChart';
import { Translate } from 'react-i18nify';
import diversityMap from './../../images/diversity.png'
import Claim from './Claim';

class Diversity extends Component {
    render() {
        return (
          <div>
              <div className="grid-item one-whole margin-top-xl">
                <h3 className="font-xxl font-light text-center"><Translate value="diversity.headline"/></h3>
                <Claim/>
                <div className="grid-item one-half" >
                  <GenderChart/>
                </div>
                <div className="grid-item one-half padding-top-l" >
                  <h6 className="font-l font-light four-fifths text-center"><Translate value="diversity.origin"/></h6>
                  <img className="four-fifths padding-top-s" src={diversityMap}/>
                </div>
              </div>
          </div>
        );
    }
}

export default Diversity;
