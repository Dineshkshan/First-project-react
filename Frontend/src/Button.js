import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log("Properties ", this.props)
  }
  render() {
    return (
      <button type="button" className="button" onClick={this.props.click}>
        OK
      </button>
    );
  }
}
