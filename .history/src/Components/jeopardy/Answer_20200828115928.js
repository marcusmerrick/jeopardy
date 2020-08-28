import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this)
}
  }
}