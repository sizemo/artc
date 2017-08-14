import React, {Component} from 'react';
import './Home.css';
import calendarbackground from '../img/calendar-background.jpg';
import resourcesbackground from '../img/resources-background.jpg';
import shopbackground from '../img/shop-background.jpg';
import {Link, withRouter} from 'react-router-dom';

class Home extends Component {

  handleSectionClick = (evt) => {
    evt.preventDefault();
    this.props.history.push(evt.currentTarget.getAttribute('href'));
  }

  render() {
    return (
      <div className="Home">
        <div className="background">
          <h1><i>#RUNTHEMOOSE</i></h1>
        </div>
        <div className="container-fluid Home-container">
          <h3>AR Track Club - It's a mindset.</h3>
          
          <div className="intro">
            <p className="tight">We're not based in a single location. We have no dues and we have no membership requirements. We don't get to work out on the same tracks often, but when we work out together, it's pretty fantastic.</p>
            <br/><br/>
            <p className="tight">The Advanced Running Track Club is born of the internet and is open to anyone who shares out love of the sport of running, regardless of where in the world you live. Advanced doesn't have a minimum pace or weekly mileage goal. It doesn't discriminate between tracks and trails and roads. Advanced is a mindset.</p>
          </div>

          <div className="container">
            <div className="sections row justify-content-around">
              
                <div className="col-md section" href="/calendar" onClick={this.handleSectionClick}>
                  <img src={calendarbackground} className="section-link" />
                  <h4>Calendar</h4>
                </div>
              
              
                <div className="col-md section" href="/shop" onClick={this.handleSectionClick}>
                  <img src={shopbackground} className="section-link"/>
                  <h4>Shop</h4>
                </div>
            
                <div className="col-md section" href="/resources" onClick={this.handleSectionClick}>
                  <img src={resourcesbackground} className="section-link"/>
                  <h4>Resources</h4>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);