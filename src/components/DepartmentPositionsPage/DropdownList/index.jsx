import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './dropdownList.css'


class DropdownList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listVisible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.select = this.select.bind(this);
  }
  select(item) {
    this.props.selected = item;
  };

  show() {
    this.setState({...this.state, listVisible: true})
    document.addEventListener("click", this.hide);
  };

  hide() {
    this.setState({...this.state, listVisible: false})
    document.removeEventListener("click", this.hide);
  };


  render() {
    return (
      <div className="dropdown-container">
        <div className={"dropdown-display"} onClick={this.show}>
          <div className="dropdown-selected">{this.props.selected}</div>
          <div className="fa fa-angle-down"></div>
        </div>
        <div className={"dropdown-list" + (this.state.listVisible ? "-open": "")}>
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    )
  }
  renderListItems() {
    var items = [];
    for (var i = 0; i < this.props.list.length; i++) {
      var item = this.props.list[i];
      items.push(<div onClick={this.select.bind(null, item)}>
        <span className={"list-item"}>{item}</span>
      </div>);
    }
    return items;
  }
}

DropdownList.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.string
};
export default DropdownList;
