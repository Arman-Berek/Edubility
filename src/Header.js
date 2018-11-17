import React from 'react'
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react';

const HeaderContainer = () => {
  return(
    <Segment vertical padded>
      <Grid centered padded>
        <Grid.Row>
          <Header as='h1'>
          You can learn anything
          <Header.Subheader>For free. For everyone. Forever.</Header.Subheader>
          </Header>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={4}>
            <Button content='Leaners start here' primary fluid/>
            <Button content='Teachers, start here' fluid basic/>
            <Button content='Parents, start here' fluid basic/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default HeaderContainer
