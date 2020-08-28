import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data:   {
        "id": null,
        "answer": "",
        "question": "",
        "value": null,
        "airdate": "1997-09-29T12:00:00.000Z",
        "created_at": "2014-02-11T23:01:57.371Z",
        "updated_at": "2014-02-11T23:01:57.371Z",
        "category_id": 2994,
        "game_id": null,
        "invalid_count": null,
        "category": {
          "id": 2994,
          "title": "tv vehicles",
          "created_at": "2014-02-11T23:01:57.180Z",
          "updated_at": "2014-02-11T23:01:57.180Z",
          "clues_count": 5
        }
      },
      score: 0
    }
    
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {

    let category = 'loading'

    if (this.state.data.category && this.state.data.category.title){ category = this.state.data.category.title}
    return (
      <div>
        <strong>Question:</strong> {this.state.data.question} <br/>
       <strong>Value:</strong> {this.state.data.value}
       <br/>
       <strong>Category:</strong> {category}
       <br/>
       <strong>User's Score:</strong> {this.state.data.score}
      </div>
    );
  }
}
export default Jeopardy;