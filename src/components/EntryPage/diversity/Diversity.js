import React, { Component } from 'react';

import Claim from './Claim';

class Diversity extends Component {
    render() {
        return (
          <div>
              <div className="grid-item one-whole margin-top-xxl">
                <Claim/>
                <div className="grid-item palm-one-whole one-half padding-top-l" >
                  <div className="grid-item one-whole">
                  </div>
                </div>
              </div>
          </div>
        );
    }
}

export default Diversity;
