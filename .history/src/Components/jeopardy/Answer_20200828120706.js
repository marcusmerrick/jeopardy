import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert("Your answer was: " + this.state.value);
}

render() {
  return (
  <form onSubmit={this.handleSubmit}>
    <label>
      Answer:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
}
  }
