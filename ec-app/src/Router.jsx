import React from "react";
import { Route, Switch } from "react-router";
import { Home, SignUp, SignIn } from "./templates/index";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Auth>
        <Route exact path="(/)?" component={Home} />
      </Auth>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
};
export default Router;
