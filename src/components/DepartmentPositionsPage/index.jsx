import React from 'react';
import Page from '../Page';
import Cover from '../Cover';
import JobList from "./JobList";

class DepartmentPositions extends React.Component {
  render() {
   return (
     <Page cover={<Cover  image="department" phrase={this.props.location.department || "All Departments"} />}>
       <div className="grid-item one-whole">
         <JobList department={this.props.location.department || "All"}/>
       </div>
     </Page>
   );
  }
}

export default DepartmentPositions;

