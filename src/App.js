import React from "react";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
import { Grid } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import MainContainer from "./components/MainContainer";

const GRAPHQL_ENDPOINT =
  "hasura-graphql-hack-tutorial.herokuapp.com/v1/graphql";

const httpLink = new HttpLink({
  uri: `https://${GRAPHQL_ENDPOINT}`,
});

const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_ENDPOINT}`,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Nunito Sans",
      h4: {
        fontWeight: "bold",
      },
      h6: {
        fontWeight: "bold",
      },
    },
  });
  return (
    <ApolloProvider client={client}>
      <div>
        <header>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <MuiThemeProvider theme={theme}>
            <Grid container justify="center" alignItems="center">
              <MainContainer />
            </Grid>
          </MuiThemeProvider>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
