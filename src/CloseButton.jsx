import React, { Component } from "react";

class CloseButton extends Component {
  state = {
    count: this.props.value
  };

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

export default CloseButton;
