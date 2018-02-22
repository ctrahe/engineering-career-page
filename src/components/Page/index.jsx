import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

class Page extends React.PureComponent {

  static propTypes = {
    cover: PropTypes.node.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  render() {
    return (
      <div>
        <div className="grid">
          <Header/>
            { this.props.cover }
            <div className="content-wrapper">
            <div className="grid">{ this.props.children }</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Page;
