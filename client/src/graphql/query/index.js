import gql from "graphql-tag";
export const HELLO = gql`
  {
    hello(name: "drew") {
      message
    }
  }
`;
