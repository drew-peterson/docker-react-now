import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import axios from "axios";

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
  click = async e => {
    e.preventDefault();
    console.log("click");
    const { data } = await axios.get(this.state.url);
    console.log("data:", data);
  };

  state = { url: "http://localhost:5000/api/hi" };

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
                <input
                  style={{ width: 200 }}
                  value={this.state.url}
                  onChange={e => this.setState({ url: e.target.value })}
                />
                <button onClick={this.click}>fetch api</button>
              </div>
            );
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
