import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Segment
} from 'semantic-ui-react';

class Activities extends Component {
  constructor(props) {
    super();
    this.state = {}
  }

  render() {
    return(
      <Segment vertical padded>
        <Grid divided>
          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column><Link to='/activity/writing-activity'>Writing Activity</Link></Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
          </Grid.Row>

          <Grid.Row textAlign='center' columns={4}>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
            <Grid.Column>Blandit</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Activities
