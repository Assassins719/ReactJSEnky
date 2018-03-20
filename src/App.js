// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'

// import LoginUser from './routers/loginuser/loginuser';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path='/login' component={LoginUser} />
//         <Route exact path='/logincos' component={LoginUser} />
//       </Switch>
//     );
//   }
// }
// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import LoginUser from './routers/loginuser/loginuser';
import LoginCos from './routers/logincos/logincos';
import Home from './routers/home/home';
import fakeAuth from './config/checkAuth';
import './App.css';


////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const App = () => (
  <Router>
    <div>
      <Route path="/logincos" component={LoginCos} />
      <Route path="/login" component={LoginUser} />
      <PrivateRoute path="/home" component={Home} />
    </div>
  </Router>
);


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


export default App;