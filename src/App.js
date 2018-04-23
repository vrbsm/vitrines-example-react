import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/routes';
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    );
  }
}

export default App;
