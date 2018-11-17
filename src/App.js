import React, { Component } from 'react';
import NavBar from './navbar';
import Grades from './grades';
import Footer from './footer';
import HeaderContainer from './Header';
import Activities from './activities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HeaderContainer />
        <Activities />
        <Grades/>
        <Footer/>
      </div>
    );
  }
}

export default App;
