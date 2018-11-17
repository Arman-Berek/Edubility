import React, { Component } from 'react';
import NavBar from './navbar';
import Grades from './grades';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Grades/>
        <Footer/>
      </div>
    );
  }
}

export default App;
