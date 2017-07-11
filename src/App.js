import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';
import { getEngineeringJobAds } from './GreenhouseApi';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {jobAds: []};
  }

  componentDidMount() {
    getEngineeringJobAds().then(jobAds => {
        console.log(jobAds);
        this.setState({jobAds: jobAds})
    });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Cover/>
        <Footer />

        {this.state.jobAds.length && this.state.jobAds[0].title}

      </div>
    );
  }
}

export default App;
