import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import artcbrand from './artcbrand.png';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
          <button className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand">
            <Link to="/"><img src={artcbrand} height="30px"/></Link>
          </div>
        </nav>
        <Routes/>
      </div>
    );
  }
}

export default App;
