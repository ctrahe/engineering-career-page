import React, { Component } from 'react';
import './index.css';
import Header from './components/headerAndCover/Header';
import Footer from './components/Footer';
import Cover from './components/headerAndCover/Cover';
import IconCockpit from './components/entryPage/icons/IconCockpit';
import Diversity from './components/entryPage/diversity/Diversity';


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
