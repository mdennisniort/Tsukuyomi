import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect} from 'react-router-dom';
import {Login} from "./pages/ConnexionPage";
import {PrincipalPage} from "./pages/PrincipalPage";

export class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/Login" component={props => <Login {...props}/>}/>
              <Route exact path="/" component={props => <Login {...props}/>}/>
              <Route exact path="/PrincipalPage" component={props => <PrincipalPage {...props}/>}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

const AppRouter = withRouter(App);

export class RoutedApp extends Component {
  render() {
    return (
      <Router basename={"/"}>
        <AppRouter {...this.props}/>
      </Router>
    );
  }
}