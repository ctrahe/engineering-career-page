import React from 'react';
import Page from '../Page';
import Cover from '../Cover';
import JobList from "./JobList";

class DepartmentPositions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "Technology"
    };
  }

  render() {
    console.log(this.props);
   return (
     <Page cover={<Cover phrase={this.state.department} />}>
       <div className="grid-item one-whole">
         <JobList department={this.state.department}/>
       </div>
     </Page>

   );
  }

}

export default DepartmentPositions;

