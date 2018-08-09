import React, { Component } from 'react';
import './App.css';

//functional component
//custom component should be Capitalized
//Lowercase are built in components
const Intro = (props) => (
        <p className="App-intro">
          Our first functional Component
        </p>

)

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
