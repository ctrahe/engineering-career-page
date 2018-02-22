import React from 'react';
import Link from 'react-router-dom/es/Link';

import './entryPage.css';

class Button extends React.Component {

  render() {
    return (
      <Link to={'/all-positions'} className="button-primary font-m positions-btn">Open positions</Link>
    );
  }
}

export default Button;
