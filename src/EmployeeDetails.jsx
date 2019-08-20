import React, { Component } from "react";

//is a child component of Customers component
class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //is called when the component loads for the first time
  componentDidMount() {
    this.getEmployeeDetails(this.props.val);
  }

  // is called whenever the component is rerendered/updated
  componentDidUpdate(prevProps) {
    //get Customer Details only if props has changed
    //(props is the input)
    if (this.props.val !== prevProps.val) {
      // this.props.val in turn, gets its value from Customers Component
      //( selectedCustomer was passed as an input to this )
      this.getEmployeeDetails(this.props.val);
    }
  }

  // to load the customers data from json
  getEmployeeDetails(id) {
    // The id parameter is used to know which customers details are required
    // id is nothing but this.props.val
    //fetch + API call
    fetch("https://randomuser.me/api/?results=60")
      // how the data is formated
      .then(response => response.json())

      .then(data => {
        let empDetails = data.results.map(pic => {
          return (
            // The key attribute is used by react to ensure
            // that dom elements correspond with data objects
            <div className="popup-modal">
              <div className="nav">
                <img
                  onClick={() => alert("Bingo")}
                  className="closeBtn"
                  src="./close.png"
                />
                {/* <img className="prev" src="icons/prev.png">
          <img className="next" src="icons/next.png"> */}
              </div>
              <img
                className="picture"
                src={employee.picture.large}
                alt={employee.name.first}
              />
              <div className="employee-card">
                <div className="name">
                  {employee.name.first} {employee.name.last}{" "}
                </div>
                <div className="email">{employee.email}</div>
                <div className="city">{employee.location.city}</div>
              </div>
              <div className="extra-info">
                <div className="cell">{employee.phone}</div>
                <div className="address">
                  {employee.location.street} {employee.location.state}{" "}
                  {employee.location.postcode}
                </div>
              </div>
            </div>
          );
        });

        {
          /* // here is changed the state of the "pictures" array that i defined in constructor earlier
        // to the array of pictures i pulled from the API */
        }
        this.setState({ pictures: empDetails });
      });
  }

  render() {
    return (
      <div>
        {/* here it is used the new state of that it was defined in the
         componentWillMount lifecycle method */}
        {this.state.pictures}
      </div>
    );
  }
}

export default EmployeeDetails;
