import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './homepage';
import Login from './Login';
import Register from './Register';
import Recover from './Recover';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/Recover' component={Recover}></Route>
    </Switch>
  );
}

export default Main;