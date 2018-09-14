import React from "react";
import Loadable from "config/Loadable";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Home = Loadable({ loader: () => import("pages/Home") });
const Details = Loadable({ loader: () => import("pages/Details") });

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
);
