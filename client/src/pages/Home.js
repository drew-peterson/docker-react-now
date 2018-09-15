import React, { Component } from "react";
import axios from "axios";
import { Query } from "react-apollo";
import { Loader, Form, Button } from "semantic-ui-react";
import { HELLO } from "graphql/query";
import { Margin } from "components/common";
class Home extends Component {
  fetchApi = async e => {
    e.preventDefault();
    const { data } = await axios.get(this.state.url);
    console.log("data", data);
  };

  state = { url: "/api/env" };

  renderHeader = () => (
    <Query query={HELLO}>
      {({ loading, error, data: { hello }, refetch }) => {
        if (loading) return <Loader active inline="centered" />;
        if (error) return `Error: ${error.message}`;
        return <h1>{hello.message}</h1>;
      }}
    </Query>
  );

  render() {
    return (
      <div>
        {this.renderHeader()}
        <h3>sub header</h3>
        <Margin top="2" />
        <Form onSubmit={this.fetchApi}>
          <Form.Field>
            <label>Api Url</label>
            <input
              value={this.state.url}
              onChange={e => this.setState({ url: e.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <Button type="submit">fetch api</Button>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default Home;
