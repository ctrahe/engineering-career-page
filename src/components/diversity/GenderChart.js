import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Translate } from 'react-i18nify';
import { I18n } from 'react-i18nify';

const data = {
    labels: [
        I18n.t('diversity.men') + ' 88%',
        I18n.t('diversity.women') + ' 12%'
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
              <h6 className="font-l font-light"><Translate value="diversity.genderChart"/></h6>
              <Doughnut data={data} options={config} redraw/>
            </div>
        );
    }
}

export default GenderChart;
