import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './home/Home';
import Calendar from './calendar/Calendar';
import Shop from './shop/Shop';
import Resources from './resources/Resources';
import About from './about/About';

export default () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/calendar" exact component={Calendar}/>
    <Route path="/shop" exact component={Shop}/>
    <Route path="/resources" exact component={Resources}/>
    <Route path="/about" exact component={About}/>
  </Switch>
);