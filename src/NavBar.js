import React from 'react';
import { NavLink } from 'react-router-dom';

/*<a href="#home" class="active">Home</a>*/

/*<NavLink> equivalent to <a> tag in css styles*/

export default class Navigation_bar extends React.Component {
    render() {
      return (
        <div className="NavBar">
            <NavLink className= "Link" exact to='/'>Home</NavLink>
            <NavLink className= "Link" exact to='/login'>Login</NavLink>
            <NavLink className= "Link" exact to='/register'>Register</NavLink>
        </div>
      );
    }
}