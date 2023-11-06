import { inlineRef } from 'ajv/dist/compile/resolve';
import React from 'react' 
//The following import will be used to identify the JSX markup import React from 'react' 
//This is the react component in ES6 syntax 
const Employee = (obj) => {    
  return (  
    <div>
      <div onClick={obj.empClick} style={{border: "1px solid grey", padding:"5px", width:"300px", display: "inline-block"}}>
       EmpID: {obj.EmpId}, Name: {obj.EmpName}, Salary: {obj.EmpSalary}
    <br></br>
    {obj.children}
    {obj.title}
    </div>
    <input type ="text" value ={obj.EmpName} onChange={obj.nameChanged}/>
    <input type="button" onClick={obj.delete} value="Delete"></input> 
    </div>
  )
} 
    //will export the created component with this syntax 
export default Employee;