import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
    labels: [
        'Men 88%',
        'Women 12%'
    ],
    datasets: [{
        data: [88, 12],
        backgroundColor: [
            '#FF7500',
            '#f7cb4d'
        ],
        hoverBackgroundColor: [
            '#FF7500',
            '#f7cb4d'
        ]
    }]
};

const config = {};

class GenderChart extends Component {


    render() {
        return (
            <div className="align-center padding-top-l">
              <h6 className="font-l font-light">Gender in Tech</h6>
              <Doughnut data={data} options={config} redraw/>
            </div>
        );
    }
}

export default GenderChart;
