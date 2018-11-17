import React, { Component } from 'react';
import { Grid, Button} from 'semantic-ui-react';

class Activities extends Component {
  constructor(props) {
    super();
    this.state = {
      hovered_state: false
    }
  }

  render() {
    return(
      <Grid columns={4} centered>
        <Grid.Row>
          <Grid.Column width={3}>
            <Grid.Row>
            <Button
            basic
            color='blue'
            size='massive'
            style={{margin: '20px', borderRadius: '30px', fontColor: '#0066FF'}}
            >
            <a href="">Activity 1</a>
            </Button>
            </Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 2</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 3</a></Button></Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 4</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 5</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 6</a></Button></Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 7</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 8</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 9</a></Button></Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 10</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 11</a></Button></Grid.Row>
            <Grid.Row><Button basic color= 'blue' size='massive' style={{margin: '20px', borderRadius: '30px'}}><a href="">Activity 12</a></Button></Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Activities
