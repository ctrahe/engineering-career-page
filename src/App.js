import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import DepartmentPositions from './components/DepartmentPositionsPage';
import EntryPage from './components/EntryPage';
import AllPositions from './components/AllPositionsPage';
import ScrollToTop from './utils/ScrollToTop';
import './index.css';

class App extends Component {

  render() {
    return (
      <Router>
        <ScrollToTop>
        <Switch>
          <Route exact path="/" component={EntryPage} />
          <Route path="/all-positions" component={AllPositions} />
          <Route path="/department-positions" component={DepartmentPositions} />
        </Switch>
        </ScrollToTop>
      </Router>
    );
  }


}

export default App;
