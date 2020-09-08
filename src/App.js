import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import Introduction from "./components/Introduction";
import Section from "./components/Section";

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
            <Introduction name="James Do" description={DESCRIPTION_TEXT} />

            <Section title="Organizations" />
          </Grid>
        </MuiThemeProvider>
      </header>
    </div>
  );
}

export default App;
