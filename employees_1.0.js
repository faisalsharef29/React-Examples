import React from 'react';
import Employee from './employee_1.0';
import { Component } from 'react';

class Employees extends Component {
    state ={
        employees:[ 
             {EmpId:"1" ,EmpName:"E1", EmpSalary:"10000", Description: "This is some information about E1"},
             {EmpId:"2" ,EmpName:"E2", EmpSalary:"20000", Description: "This is some information about E2"},
             {EmpId:"3" ,EmpName:"E3", EmpSalary:"30000", Description: "This is some information about E3"}
        ]
    }
    changeUserName  = () =>{

     //Optimized syntax
     let newState = this.state;
     newState.title = "This is new title";
     newState.employees[0].EmpName = "New Name";
     this.setState(newState);



     //new syntax  
    //  let emps = [...this.state.employees];
    //  emps[0].EmpName = "Name passed through new syntax";
    //  this.setState({
    //  employees : emps   
    //  })
       
        

     
        // old Syntax
        // employees:   [
        //     {EmpId:"1" ,EmpName:"New Name", EmpSalary:"10000", Description: "This is some information about E1"},
        //     {EmpId:"2" ,EmpName:"E2", EmpSalary:"20000", Description: "This is some information about E2"},
        //     {EmpId:"3" ,EmpName:"E3", EmpSalary:"30000", Description: "This is some information about E3"}
        // ]
        // })
    }

    showEmployee() 
    {
        alert('Hello...');
    }

    deleteEmployee = (ind) => { 
                let emps = [...this.state.employees];    
                     emps.splice(ind,1);       
                       this.setState({        
                             employees: emps    
                            
                             })     
                        }
    onNameChanged = (event,ind) => {
       // alert(event.target.value+ " "+ind)
       let emp = this.state.employees
       this.state.employees[ind].EmpName = event.target.value
       this.setState({
            employees: emp
       })
    }    



    render(){
       // let emps = null  
       const styles = {     
          borderColor: 'blue',    
          backgroundColor: 'green',      
           color: 'white'    
         } 
        return(
            <div>
             <div>{this.state.title}</div>
            <div>
              <Employee nameChanged={(event) => this.onNameChanged(event,0)} empClick ={()=>{this.showEmployee.bind()}} delete={()=>{this.deleteEmployee(0)}} EmpId={this.state.employees[0].EmpId} EmpName={this.state.employees[0].EmpName} EmpSalary={this.state.employees[0].EmpSalary} >This is Description about Emp1</Employee> 
              <Employee nameChanged={(event) => this.onNameChanged(event,1)} click={this.showEmployee} delete={()=>{this.deleteEmployee(0)}} EmpId={this.state.employees[1].EmpId} EmpName={this.state.employees[1].EmpName} EmpSalary={this.state.employees[1].EmpSalary} >This is Description about Emp1</Employee> 
              <Employee nameChanged={(event) => this.onNameChanged(event,2)} click={this.showEmployee} delete={()=>{this.deleteEmployee(0)}} EmpId={this.state.employees[2].EmpId} EmpName={this.state.employees[2].EmpName} EmpSalary={this.state.employees[2].EmpSalary} >This is Description about Emp2</Employee> 
            </div>
            < input type="button" onClick={this.changeUserName} value="Update Name of First Employee"></input>
             </div>
        )
    }
}
export default Employees;