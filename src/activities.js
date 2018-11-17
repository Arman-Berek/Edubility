import React from 'react';
import { Grid, Button} from 'semantic-ui-react';

const Activities = () => {
  return(
    <Grid columns={4} centered>
      <Grid.Row>
        <Grid.Column width={3}>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 1</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 2</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 3</a></Button></Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 4</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 5</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 6</a></Button></Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 7</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 8</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 9</a></Button></Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 10</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 11</a></Button></Grid.Row>
          <Grid.Row><Button size='massive' style={{margin: '20px', borderRadius: '30px', background: '#0066FF'}}><a href="">Activity 12</a></Button></Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Activities
