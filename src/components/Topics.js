import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input, Button, Card, CardText, CardBody,
  CardTitle, ButtonGroup } from 'reactstrap'

const TopicCard = ({index, topic, upVote, downVote}) => (
  <Card>
    <CardBody className="card-layout">
      <CardTitle>Votes: {topic.votes}</CardTitle>
      <CardText>{topic.content}</CardText>
      <ButtonGroup>
        <Button color="success" onClick={upVote} index={index}>👍</Button>
        <Button color="danger" onClick={downVote} index={index}>👎</Button>
      </ButtonGroup>
    </CardBody>
  </Card>
);
class Topics extends Component {
  constructor(props) {
		super(props);
		this.state = {
      content: "",
      topics: [],
      showAll: false
    };
  }

  handleChange = (e) => {
    this.setState({content: e.target.value});
  }

  descendingSort = (a, b) => {
    if (a.votes > b.votes) {
      return -1;
    }
    if (b.votes > a.votes) {
      return 1;
    }
    return 0;
  }

  addTopic = () => {
    this.setState(state => {
      const newTopic = {
        content: this.state.content, 
        votes: 0
      };
      
      state.topics.push(newTopic);
      const topics = state.topics.sort(this.descendingSort);;

      return {
        topics,
        content: ""
      };
    });
  }

  upVote = (e) => {
    const topic = e.target.getAttribute("index");
    let topics = this.state.topics;
    topics[topic].votes += 1;
    topics.sort(this.descendingSort);
    this.setState({topics: topics});
  }

  downVote = (e) => {
    const topic = e.target.getAttribute("index");
    let topics = this.state.topics;
    topics[topic].votes -= 1;
    topics.sort(this.descendingSort);
    this.setState({topics: topics});
  }
  
  showAll = () => {
    this.setState({ showAll: !this.state.showAll });
  }

  render() {
    const topics = this.state.showAll ? 
    this.state.topics.map((topic, key) => {
      return (
        <ListGroupItem key={key}>
          <TopicCard index={key} topic={topic} upVote={this.upVote} downVote={this.downVote}/>
        </ListGroupItem>
        );
    }) : 
    this.state.topics.slice(0,20).map((topic, key) => {
      return (
        <ListGroupItem key={key}>
          <TopicCard index={key} topic={topic} upVote={this.upVote} downVote={this.downVote}/>
        </ListGroupItem>
        );
    })

    return (
      <ListGroup>
        <ListGroupItem>
          <Form>
            <FormGroup>
              <Label for="topicConent">Add New Topic</Label>
              <Input type="textarea" name="text" id="topicConent" maxlength="255" placeholder="Enter your topic. (Max 255 Characters)" onChange={this.handleChange} value={this.state.content}/>
            </FormGroup>
            <Button className="add-topic-btn" color="primary" onClick={this.addTopic}>Submit Topic</Button>
          </Form>
        </ListGroupItem>
          <Button className="show-all" color="info" onClick={this.showAll}>
            {this.state.showAll ? "Showing All" : "Showing Top 20"}
          </Button>
        {topics}
      </ListGroup>
    )
  }
}

export default Topics