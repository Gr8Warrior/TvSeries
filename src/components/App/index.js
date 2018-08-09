import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch'
import Main from '../Main'
//functional component
//custom component should be Capitalized
//Lowercase are built in components

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        
        <Main/>
      </div>
    );
  }
}

export default App;
