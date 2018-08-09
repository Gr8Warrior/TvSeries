import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro'
//functional component
//custom component should be Capitalized
//Lowercase are built in components


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Series List</h1>
        </header>
        <Intro />
      </div>
    );
  }
}

export default App;
