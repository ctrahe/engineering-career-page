import React, {Component} from 'react';
import {getJobAds} from './utils/GreenhouseApi';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import DepartmentPositions from './components/DepartmentPositionsPage';
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
    localStorage.setItem('localstorageJobAds', JSON.stringify(jobAds));
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
        <Switch>
          <Route exact path="/" component={AllPositions} />
          <Route path="/department-positions" component={DepartmentPositions} />
        </Switch>
        </ScrollToTop>
      </Router>
    );
  }


}

export default App;
