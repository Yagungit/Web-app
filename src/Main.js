import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './containers/homepage';
import Login from './containers/Login';
import Register from './containers/Register';
import Recover from './containers/Recover';
import Welcome from './containers/welcomepage';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Welcome}></Route>
            <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/Recover' component={Recover}></Route>
        </Switch>
    );
}

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default Main;
