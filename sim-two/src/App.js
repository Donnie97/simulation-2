import React, { Component } from 'react';
import './App.css';
import router from './components/router';

class App extends Component {
  render() {
    return (
      <div className="bg">
      {router}        
      </div>
    );
  }
}

export default App;
