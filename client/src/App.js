import React, { Component } from 'react';
import ToDoTitle from './components/ToDoTitle/index.js'
import ToDoContent from './components/ToDoContent'
import './App.css';

class App extends Component {
    render() {
    return (
      <div className="App">
          <ToDoTitle title="Do everything with heart"/>
          <ToDoContent/>
      </div>
    );
  }
}

export default App;
