import React from 'react';
import Page from '../Page';
import Cover from '../Cover';
import JobList from "./JobList";

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
  render() {
   return (
     <Page cover={<Cover  background="department" phrase={<p>{this.state.department || "All Departments"}</p>} />}>
       <div className="grid-item one-whole">
         <JobList department={this.state.department || "All"} setSelectedDepartment = {this.setSelectedDepartment}/>
       </div>
     </Page>
   );
  }
}

export default DepartmentPositions;

