import React, { Component } from 'react';
import NavBar from './navbar';
import Grades from './grades';
import Footer from './footer';
import HeaderContainer from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HeaderContainer />
        <Grades/>
        <Footer/>
      </div>
    );
  }
}

export default App;
