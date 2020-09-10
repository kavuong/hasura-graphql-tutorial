import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Typography, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import IndivCard from "./IndivCard";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import { ORG_QUERY, ORG_SUBSCRIPTION } from "../graphql/queries";

const useStyles = makeStyles({
  icon: {
    backgroundColor: "#FC7753",
    flex: 1,
    height: 37,
    width: 37,
    padding: 5,
    borderRadius: 30,
    fill: "white",
  },
});

export default function Section(props) {
  const { loading, error, data } = useQuery(ORG_QUERY);
  const classes = useStyles();
  const [editing, setEditing] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { organizations } = data;

  return (
    <Container>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography variant="h6">{props.title}</Typography>
        <IconButton onClick={() => setEditing(!editing)}>
          <EditOutlinedIcon className={classes.icon} />
        </IconButton>
      </div>
      <Grid container direction="row" justify="space-around">
        {organizations.map((org, index) => {
          console.log(organizations);
          return (
            <IndivCard
              image={require(`../assets/${org.picture_url}`)}
              title={org.name}
              involvement={org.involvement}
              editing={editing}
              key={index}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
