import React from 'react';
//import Roters from 'components/RouterComponent';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  employees = () => {
    if (this.props.selectEmployeesDetails.length==0) return;
    return this.props.selectEmployeesDetails.map(item=>{
      return(
          <tr>
            <td>{item.id}</td>
            <td>{item.employee_name}</td>
          </tr>
        )
    })
  };
  render() {
    return (
     
      <div className="row no-gutters">
        <div className="col-sm-12 ">
          <table className="table table-border">
            <tr>
              <th>Employees Id</th>
              <th>Employess Name</th>
            </tr>
            {this.employees()}
          </table>
        </div>
      </div>
      
    );
  }
}
