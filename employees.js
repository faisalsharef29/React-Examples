import React, { Component } from 'react';
import axios from 'axios'
import Employee from './employee';

export class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            newEmployee: null
        };
        this.getEmployees();
    } getEmployees = () => {
        axios.get("https://localhost:44436/api/Employees").then(res => {
            this.setState({
                employees: res.data
            });
        })
    }
    insertEmployees = () => {
        let emp = this.state.newEmployee
        axios.post("/api/employees", emp).then(
            res => {
                let emps = [...this.state.employees, res.data]
                this.setState({
                    employees: emps
                })
            },
            err => {
                console.log(err)
            })
    }
    onChange = (evt) => {
        let emp = { ...this.state.newEmployee };
        emp[evt.target.name] = evt.target.value
        this.setState({
            newEmployee: emp
        })
    }
    render = () => {
        let emps = (
            this.state.employees.map(emp => {
                return (
                    <Employee key={emp.empId} emp={emp} />
                )
            })
        )
        return (
            <div>
                <div>{emps}</div>                 <hr />
                Name: <input type="text" name="name" onChange={this.onChange} />
                Salary: <input type="text" name="salary" onChange={this.onChange} />
                <button onClick={this.insertEmployees}>Insert</button>
            </div>)
    }
} 
export default Employees;