import React, { Component } from "react";

class DeleteEmployee extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="delBtn"
        >
          X
        </button>
      </div>
    );
  }
}

export default DeleteEmployee;
