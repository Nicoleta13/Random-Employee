import React, { Component } from "react";

class Customers extends Component {
  // The Constructor is used only to set props and state
  constructor(props) {
    super(props);
    // to keep track which customer is selected
    this.state = {
      hits: []
    };
  } //gata

  // getting JSON from API
  //this method is the best place to fetch data
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=12&nat=us")
      .then(response => response.json())

      //when the data is fetched successfully
      //it will be stored in the local state with (this.setState()) method
      .then(data => {
        this.setState({ hits: data.hits }));
      }
  } //gata

  // returns what elements have to be rendered on screen
  render() {
    return (
      <div>
        {
          this.state.hits.map((personRecord) => {
            return (
              <div key={personRecord.id.value}> 
              {personRecord.name.first} </div>);
            })
        }
      </div>
    );
  }
}

export default Customers;
