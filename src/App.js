import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderContainer from './Header';
import Activities from './activities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HeaderContainer />
        <Activities />
      </div>
    );
  }
}

export default App;
