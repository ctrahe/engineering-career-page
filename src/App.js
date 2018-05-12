import React, {Component} from 'react';
import {getJobAds} from './utils/GreenhouseApi';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import DepartmentPositions from './components/DepartmentPositionsPage';
import EntryPage from './components/EntryPage';
import AllPositions from './components/AllPositionsPage';
import ScrollToTop from './utils/ScrollToTop';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {jobAds: []}
  }

  async componentWillMount() {
    const jobAds = await getJobAds();
    this.setState({jobAds: jobAds});
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={EntryPage}/>
            <Route path="/all-positions" render={(props)=>{
              return <AllPositions {...props} jobAds={this.state.jobAds}/>
            }}/>
            <Route path="/department-positions" render={(props)=>{
             return <DepartmentPositions {...props} jobAds={this.state.jobAds}/>
            }}/>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }


}

export default App;
