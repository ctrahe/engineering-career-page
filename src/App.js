import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import DepartmentPositions from './components/DepartmentPositionsPage';
import './index.css';
import EntryPage from './components/EntryPage';
import AllPositions from './components/AllPositionsPage';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {jobAds: []};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={EntryPage} />
          <Route path="/all-positions" component={AllPositions} />
          <Route path="/department-positions" component={DepartmentPositions} />
        </Switch>
      </Router>
    );
  }


}

export default App;
