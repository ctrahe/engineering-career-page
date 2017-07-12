import React, { Component } from 'react';
import GenderChart from './GenderChart';

class Diversity extends Component {
    render() {
        return (
            <div className="grid gutter-m margin-top-xl">
                <h3 className="font-xxl font-light">A look at our current diversity numbers</h3>
                <div className="grid-item one-half">
                    <GenderChart />
                </div>
            </div>
        );
    }
}

export default Diversity;