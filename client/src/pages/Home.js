import React, { Component } from "react";
import axios from "axios";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import gql from "graphql-tag";

const hello = gql`
  {
    hello(name: "drew") {
      message
    }
  }
`;

class Home extends Component {
  click = async e => {
    e.preventDefault();
    const { data } = await axios.get(this.state.url);
    console.log("data", data);
  };

  state = { url: "/api/env" };

  render() {
    return (
      <Query query={hello}>
        {({ loading, error, data: { hello }, refetch }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;

          return (
            <div>
              <h1>{hello.message}</h1>
              <h3>sub header</h3>
              <Link to="/details">Details</Link>
              <br />
              <br />
              <form onSubmit={this.click}>
                <input
                  style={{ width: 400 }}
                  value={this.state.url}
                  onChange={e => this.setState({ url: e.target.value })}
                />
                <button type="submit">fetch api</button>
              </form>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Home;
