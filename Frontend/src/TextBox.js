import React from 'react';


export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input type={this.props.type} name={this.props.name} pattern={this.props.pattern} id={this.props.id} required />
    );
  }

}