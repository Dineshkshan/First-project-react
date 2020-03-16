import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "./style1.css";
import TextBox  from "./TextBox";
import Label from "./Label";
import Button from "./Button";
import axios from 'axios';

class App extends Component {

  register() {
    // e.preventDefault();
    console.log("I'm in Register ",document.getElementById("ename11").value);
    let request = {
      empname1: document.getElementById("ename11").value,
      email1: document.getElementById("email11").value,
      empid1: document.getElementById("eid11").value,
      phonenumber1: document.getElementById("num11").value,

    }
    console.log("Request send ",request);
    axios.post('http://localhost:5000/register', request)
      .then(resp => {
        console.log("Response received",resp);
        document.getElementById("empName").value = resp.data.Empname
        document.getElementById("Email").value = resp.data.Email
        document.getElementById("empId").value = resp.data.Empid
        document.getElementById("mobile").value = resp.data.phone
      })
  }

  render() {
    return (
      <div>
      <div className="container">
        <h1> My Atos </h1>
          <Label name="Employee name" />
          <TextBox type="text" name="empname" id="ename11" />
          <Label name="Email" />
          <TextBox type="email" name="email" id="email11" />
          <Label  name="Employee ID" />
          <TextBox type="text" pattern="[5]{1}[0-9]{6}" name="number" id="eid11" />
          <Label  name="Phone number" />
          <TextBox type="tel" pattern="[7-9]{1}[0-9]{4}[0-9]{5}" name="tel" id="num11" />
          <Button click={ ()=>this.register() } />

      </div>

      <div className="real">
        <b>Employee Name:</b><input type="text" id="empName" />
        <b>Employee Email:</b><input type="text" id="Email" />
        <b>Mobile Number:</b><input type="text" id="mobile" />
        <b>Employee Id:</b><input type="text" id="empId" />
      </div>
      </div>
);
  }
}

render(<App />, document.getElementById("root"));
