import React from 'react';
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
    return(
      <Menu>
        <Menu.Item name='edubility' >
          Edubility
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item name='about' >
            About us
          </Menu.Item>
          <Menu.Item name='login' >
            Log In
          </Menu.Item>
          <Menu.Item name='signup'>
            Sign Up
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default NavBar
