import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro'
//functional component
//custom component should be Capitalized
//Lowercase are built in components


class App extends Component {

  state = {
    series: []
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tv Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
        The length of the series array  = {this.state.series.length}
      </div>
    );
  }
}

export default App;
