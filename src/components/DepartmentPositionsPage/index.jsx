import React from 'react';
import Page from '../Page';
import Cover from '../Cover';
import JobList from './JobList';
import './jobList.css';

class DepartmentPositions extends React.Component {
  constructor(props) {
    super(props);
    this.setSelectedDepartment = this.setSelectedDepartment.bind(this);
  }

  setSelectedDepartment(department) {
    this.setState({
      department: department
    });
  }

  componentWillMount() {
    this.setState({
      department: this.props.location.department
    });
  }

  reformatText = (department) => {
    if (department) {
      return department.toLowerCase().replace(/\s/g, '').replace('&', '-');
    } else return 'department-placeholder';
  };

  render() {
    return (
      <Page cover={<Cover background="department" departmentImage={this.reformatText(this.props.location.department)}
                          phrase={
                            <p>{this.state.department === 'All' ? 'All Teams' : this.state.department || "All Teams"}</p>}/>}>
        <div className="grid-item one-whole">
          <JobList department={this.state.department || "All"} setSelectedDepartment={this.setSelectedDepartment}/>
        </div>
      </Page>
    );
  }
}

export default DepartmentPositions;

