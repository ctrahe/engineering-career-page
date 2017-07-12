import React, { Component } from 'react';
import { Translate } from 'react-i18nify';

class JobAdEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobAd: this.props.jobAd,
            key: this.props.key
        }
    }

    render() {
        return (
            <div>
                <strong>{this.state.jobAd && this.state.jobAd.title}</strong>
            </div>
        );
    }
}

export default JobAdEntry;