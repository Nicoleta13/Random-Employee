import React, { Component } from "react";
import CloseButton from "./CloseButton";

class Employees extends Component {
  constructor() {
    //we use super to pass any props
    //from the parent to the child component
    super();

    //set the initial state, you want to set it
    //as empty (array, string or whatever)

    //later i will set the new state
    //to the data that i have retrieved with fetch
    this.state = {
      users: []
    };
  }

  handleDelete = userId => {
    const employees = this.state.users.filter(user => user.id !== userId);
    this.setState({ users: employees });
  };

  //lifecycle methods including “Will” are called before something happens and then pull the data
  //Lifecycle methods including “Did” are called after something happens
  componentWillMount() {
    //fetch + API call
    fetch("https://randomuser.me/api/?results=10")
      // how the data is formated
      .then(response => response.json())

      .then(data => {
        let employees = data.results.map(user => {
          return (
            // The key attribute is used by react to ensure
            // that dom elements correspond with data objects
            <div key={user.results}>
              <div
                // onClick={() => this.handleClick(i)}
                className="image-container"
              >
                {/* <button className="delBtn">X</button> */}
                <CloseButton
                  // key={user.id}
                  // value={user.value}
                  onDelete={this.handleDelete}
                />
                <img
                  className="large-img"
                  src={user.picture.large}
                  alt={user.name.first}
                />
                <div className="name">
                  {user.name.first} {user.name.last}
                </div>

                <button
                  className="myBtn"
                  onClick={() => alert("Employee's details are displayed!")}
                >
                  Details
                </button>
              </div>
            </div>
          );
        });

        {
          /* // here is changed the state of the "pictures" array that i defined in constructor earlier
        // to the array of pictures i pulled from the API */
        }
        this.setState({ users: employees });
      });
  }

  render() {
    return (
      <div className="container">
        <h4>Employee Directory</h4>
        <div className="grid">{this.state.users}</div>
      </div>
    );
  }
}

export default Employees;
