import React, { Component } from 'react';
import logo from './logo.svg';
import {Link, withRouter} from 'react-router-dom';
import './App.css';
import artcbrand from './artcbrand.png';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import strava from './img/icon-strava.svg';

class App extends Component {

  handleNavClick = (event) => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  }

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
            <Link to="/" className="navbar-brand"><img src={artcbrand} height="30px"/></Link>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <RouteNavItem onClick={this.handleNavClick} href="/about">About</RouteNavItem>
              <RouteNavItem onClick={this.handleNavClick} href="/calendar">Calendar</RouteNavItem>
              <RouteNavItem onClick={this.handleNavClick} href="/shop">Shop</RouteNavItem>
              <RouteNavItem onClick={this.handleNavClick} href="/resources">Resources</RouteNavItem> 
            </ul>
          </div> 
        </nav>
        <Routes/>


        <nav className="navbar navbar-inverse navbar-toggleable-xl fixed-bottom bg-inverse justify-content-center hidden-xs-down">
          <div className="navbar-nav">
              <a className="nav-item nav-link footer-link" href="https://www.instagram.com/artrackclub/" target="_blank" title="Instagram"><span className="fa fa-instagram"></span></a>
              <a className="nav-item nav-link footer-link" href="https://www.reddit.com/r/artc" target="_blank" title="reddit"><span className="fa fa-reddit"></span></a>
              <a className="nav-item nav-link footer-link" href="https://twitter.com/artrackclub" target="_blank" title="twitter"><span className="fa fa-twitter"></span></a>
              <a className="nav-item nav-link footer-link" href="https://www.strava.com/clubs/artc" target="_blank" title="Strava"><img height="18" src={strava} class="fa-fw fa-lg" /></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(App);
