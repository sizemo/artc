import React from 'react';
import {Route} from 'react-router-dom';

export default (props) => (
  <Route path={props.href} exact children={({match}) => (
    <li className="nav-item" className={match ? 'active' : ''}>
      <a className="nav-link" {...props} >
        { props.children }
      </a>
    </li>
  )}/>
);