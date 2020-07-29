import React from "react";
import { Route, Switch } from "react-router";
import { Login, Home, SignUp } from "./templates/index";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};
export default Router;
