import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SignUp from './pages/SignUp'

import SignIn from './pages/SignIn'

import App from './pages/App/index'

import { isAuthenticated } from "./services/auth";

debugger

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest} //passa todas as propriedades do component
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    } //redefine o render
  />
);
//para não deixar mais de uma rota ser chamada ao mesmo tempo --> Switch
//exact só chama se for exatamente /
//só exibe se o usuário tiver autenticado
const Routes = () => (
  <BrowserRouter>
    <Switch> 
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={App} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;