import React, { Component } from 'react'
import TopicCard from './TopicCard'
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button } from 'reactstrap'

class Topics extends Component {
  constructor(props) {
		super(props);
		this.state = {
      content: "",
      topics: [],
    };
  }

  handleChange = (e) => {
    this.setState({content: e.target.value});
  }

  addTopic = (e) => {
    this.setState(state => {
      const newTopic = {
        content: this.state.content, 
        votes: 0
      };
      
      state.topics.push(newTopic);
      const topics = state.topics;

      return {
        topics,
        content: ""
      };
    });

    console.log(this.state.topics);
  }
  
  render() {
    const topics = this.state.topics.map((topic, key) => {
      return (
        <ListGroupItem key={key}>
          <TopicCard topic={topic.content} />
        </ListGroupItem>
        );
    })

    return (
      <ListGroup>
        <ListGroupItem>
          <Form>
            <FormGroup>
              <Label for="topicConent">Add New Topic</Label>
              <Input type="textarea" name="text" id="topicConent" onChange={this.handleChange} value={this.state.content}/>
            </FormGroup>
            <Button color="primary" onClick={this.addTopic}>Submit Topic</Button>
          </Form>
        </ListGroupItem>
        {topics}
      </ListGroup>
    )
  }
}

export default Topics