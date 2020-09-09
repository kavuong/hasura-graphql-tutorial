import React from "react";
import { Button, Grid, Container } from "@material-ui/core";

import Introduction from "./Introduction";
import Section from "./Section";

const DESCRIPTION_TEXT = `I love talking about the Asian American Experience in a medical lens.
 Let's connect!`;

export default function MainContainer() {
  //   const [submit, setSubmit] = useState(false);

  return (
    <Container>
      <Introduction name="J Do" description={DESCRIPTION_TEXT} />

      <Section title="Organizations" />

      <Container style={{ marginTop: 20 }}>
        <Grid container direction="row" justify="space-around">
          <Button variant="contained">Submit</Button>
        </Grid>
      </Container>
    </Container>
  );
}
