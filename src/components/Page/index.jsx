import React from 'react';

import Header from '../Header';
import Cover from '../Cover';
import Footer from '../Footer';

class Page extends React.PureComponent {

  render() {
    return (
      <div>
        <div className="grid">
          <Header/>
          <Cover/>
          <div className="content-wrapper">
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Page;