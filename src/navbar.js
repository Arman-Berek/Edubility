import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const NavBar = () => {
    return(
      <Menu>
        <Menu.Item name='edubility' >
          <b>Edubility</b>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='about' >
            <b>About Us</b>
          </Menu.Item>
          <Menu.Item name='login' >
            <Button style={{ background: '#0066FF' }}primary>Log In</Button>
          </Menu.Item>
          <Menu.Item name='signup'>
            <Button style={{ color: 'black'}}>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default NavBar
