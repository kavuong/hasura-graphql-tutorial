import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { Grid, Container } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Introduction from "./components/Introduction";
import Section from "./components/Section";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://hasura-graphql-hack-tutorial.herokuapp.com/v1/graphql",
  }),
});

const DESCRIPTION_TEXT = `I love talking about the Asian American Experience in a medical lens.
 Let's connect!`;

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
              <Container>
                <Introduction name="J Do" description={DESCRIPTION_TEXT} />

                <Section title="Organizations" />
              </Container>
            </Grid>
          </MuiThemeProvider>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
