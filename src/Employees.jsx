import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.results.map(employee => ({
          // create object for individual employees
          name: `${employee.name.first} ${employee.name.last}`,
          id: `${employee.login.username}`,
          picture: `${employee.picture.large}`
        }))
      )
      .then(contacts =>
        this.setState({
          employees: contacts
        })
      )
      .catch(error => console.log("parsing failed", error));
  }

  handleDelete = employeeId => {
    const employees = this.state.employees.filter(
      employee => employee.id !== employeeId
    );
    this.setState({ employees: employees });
  };

  render() {
    const { employees } = this.state;

    return (
      <div className="container">
        <h4>Employee Directory</h4>
        <div className="grid">
          {employees.map(employee => (
            <div key={employee.id}>
              <div className="image-container">
                <DeleteButton
                  key={employee.id}
                  onDelete={this.handleDelete}
                  id={employee.id}
                />
                <img
                  className="large-img"
                  src={employee.picture}
                  alt={employee.name}
                />
                <div className="name">{employee.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Employees;
