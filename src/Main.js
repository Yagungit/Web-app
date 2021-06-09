import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/homepage';
import Login from './containers/Login';
import Register from './containers/Register';
import Recover from './containers/Recover';
import Welcome from './containers/welcomepage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Welcome}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/Recover' component={Recover}></Route>
    </Switch>
  );
}

export default Main;