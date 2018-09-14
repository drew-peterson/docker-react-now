import React from "react";
import Router from "routes";
import keys from "config/keys";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: keys().REACT_APP_GRAPHCOOL_URI });

export default () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
);
