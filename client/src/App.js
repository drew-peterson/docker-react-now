import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const hello = gql`
  {
    hello(name: "drew") {
      message
    }
  }
`;

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCOOL_URI
});

console.log("ENV:", process.env.REACT_APP_GRAPHCOOL_URI);
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={hello}>
          {({ loading, error, data: { hello }, refetch }) => {
            if (loading) return "Loading...";
            if (error) return `Error: ${error.message}`;

            return (
              <div>
                <h1>{hello.message}</h1>
                <h4>sub header</h4>
                <button onclick={refetch}>refetch</button>
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
