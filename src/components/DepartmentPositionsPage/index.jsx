import React from 'react';
import Page from '../Page';
import Cover from '../Cover';
import JobList from "./JobList";

class DepartmentPositions extends React.Component {
  constructor(props) {
    super(props);
    let department = this.props.location.pathname.split("/");
    this.state = {
      department: department[department.length-1]
    };
  }

  render() {
   return (
     <Page cover={<Cover  image="department" phrase={this.state.department} />}>
       <div className="grid-item one-whole">
         <JobList department={this.state.department}/>
       </div>
     </Page>

   );
  }

}

export default DepartmentPositions;

