import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

let uri;
if (process.env.REACT_APP_HOST_ENV === "stage") {
  uri = process.env.REACT_APP_GRAPHCOOL_STAGE_URI;
} else {
  uri = process.env.REACT_APP_GRAPHCOOL_URI;
}

const client = new ApolloClient({ uri });

console.log("ENV:", process.env);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
);

const App = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);

export default App;
