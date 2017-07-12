import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
    labels: [
        '% Men',
        '% Women'
    ],
    datasets: [{
        data: [88, 12],
        backgroundColor: [
            '#003468',
            '#FF7500'
        ],
        hoverBackgroundColor: [
            '#003468',
            '#FF7500'
        ]
    }]
};

class NationalitiesChart extends Component {


    render() {
        return (
            <div>
                <Doughnut data={data} redraw width="600" height="250"/>
            </div>
        );
    }
}

export default NationalitiesChart;