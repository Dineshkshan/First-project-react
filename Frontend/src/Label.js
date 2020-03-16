import React from "react";

export default class  Label extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <label > <b>{this.props.name}</b>
      </label>

    );
  }
}
