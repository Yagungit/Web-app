import React, { useContext, createContext, useState } from "react";
import { BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation } from 'react-router-dom';
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
export default Main;

const authentificate = {
    isAuthenticated: false,
    signin(cb) {
      authentificate.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      authentificate.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}


function useAuth() {
    return useContext(authContext);
  }  

function useProvideAuth(username) {
    const [user, setUser] = useState(null);
  
    const signin = cb => {
        return authentificate.signin(() => {
            setUser(username);
            cb();
        });
    };
  
    const signout = cb => {
        return authentificate.signout(() => {
            setUser(null);
            cb();
        });
    };
  
    return {
        user,
        signin,
        signout
    };
}
  
function AuthButton() {
    let history = useHistory();
    let auth = useContext(createContext());
  
    return auth.user ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    );
}
  
  // A wrapper for <Route> that redirects to the login
  // screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {

    return (
      <Route
        {...rest}
        render={({ location }) =>
          localStorage.getItem('user') ? (
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


  
function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
      auth.signin(() => {
        history.replace(from);
      });
};
  
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    );
}
