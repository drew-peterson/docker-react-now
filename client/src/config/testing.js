import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import ErrorBoundary from "config/ErrorBoundary";
import { MemoryRouter } from "react-router-dom";
import { USER } from "graphql/query";

export const mockData = {
  USER: ({ data, query }) => {
    return [
      {
        request: {
          query: query || USER
        },
        result: {
          data: data || {
            user: {
              id: "1",
              email: "drew@test.com"
            }
          }
        }
      }
    ];
  }
};

export const TestApp = ({ children, mocks }) => (
  <ErrorBoundary>
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter>{children}</MemoryRouter>
    </MockedProvider>
  </ErrorBoundary>
);
