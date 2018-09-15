import React from "react";
import keys from "config/keys";
import ApolloClient from "apollo-boost";
import ErrorBoundary from "config/ErrorBoundary";
import Router from "config/Router";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: keys().REACT_APP_GRAPHCOOL_URI });

export default () => (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </ErrorBoundary>
);
