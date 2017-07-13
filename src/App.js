import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';
import IconCockpit from './components/IconCockpit';
import Diversity from './components/diversity/Diversity';


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {jobAds: []};
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Cover/>
        <IconCockpit/>
        <Diversity/>
        <Footer />

        {/*{this.state.jobAds.length && this.state.jobAds[0].title}*/}

      </div>
    );
  }
}

export default App;
