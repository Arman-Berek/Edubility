import React, { Component } from 'react';
import NavBar from './navbar';
import HeaderContainer from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HeaderContainer />
      </div>
    );
  }
}

export default App;
