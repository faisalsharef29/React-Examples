import React from 'react';
let Employee = (props) => {
    return (
        <div key={props.emp.empId}>
            Id={props.emp.empId},
            Name={props.emp.name},
            Salary={props.emp.salary}
        </ div>);
}
export default Employee; 