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
  uri: " http://localhost:60000/simple/v1/cjly9erov000b01008ptsy7tk"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={hello}>
          {({ loading, error, data: { hello } }) => {
            if (loading) return "Loading...";
            if (error) return `Error: ${error.message}`;

            return <h1>{hello.message}</h1>;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
