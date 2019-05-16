import React, { Component } from 'react'
import { Card, CardText, CardBody,
  CardTitle, Button, ButtonGroup } from 'reactstrap'; 

class TopicCard extends Component {
  render() {
    const { content, votes } = this.props.topic;
    console.log(this.props, content, votes)
    return (
      <Card>
        <CardBody className="card-layout">
          <CardTitle>Votes: {votes}</CardTitle>
          <CardText>{content}</CardText>
          <ButtonGroup>
            <Button color="success">👍</Button>
            <Button color="danger">👎</Button>
          </ButtonGroup>
        </CardBody>
      </Card>
    )
  }
}

export default TopicCard
