import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="background">
          <h1><i>#RUNTHEMOOSE</i></h1>
        </div>
        <div className="container">
          <h3>AR TRACK CLUB - IT'S A MINDSET.</h3>
          <div className="intro">
            We're not based in a single location. We have no dues and we have no membership requirements. We don't get to work out on the same tracks often, but when we work out together, it's pretty fantastic.
            <br/><br/>
            The Advanced Running Track Club is born of the internet and is open to anyone who shares out love of the sport of running, regardless of where in the world you live. Advanced doesn't have a minimum pace or weekly mileage goal. It doesn't discriminate between tracks and trails and roads. Advanced is a minset. 
          </div>
        </div>
      </div>
    );
  }
}

export default Home;