import React, { useState, useEffect, useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  Grid,
  Typography,
  Container,
  IconButton,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ShareIcon from "@material-ui/icons/ShareRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import { INTRO_QUERY, MUTATE_QUERY } from "../graphql/queries";

const useStyles = makeStyles({
  start: {
    justifyContent: "flex-start",
    marginTop: 100,
  },
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

export default function Introduction(props) {
  const { loading, error, data } = useQuery(INTRO_QUERY);
  const [editIntro] = useMutation(MUTATE_QUERY);
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // needed to ensure useEffect is not triggered on initial render
  const didMountRef = useRef(false);

  useEffect(() => {
    if (data) {
      setName(data.person[0].name);
      setDescription(data.person[0].biography);
    }
  }, [data]);

  useEffect(() => {
    // if we are not in editing state and the name is not null
    if (!editing && didMountRef.current) {
      console.log(name);
      editIntro({ variables: { biography: description, name: name } });
    } else {
      didMountRef.current = true;
    }
  }, [editing]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Container>
      <Grid container className={classes.start}>
        <Grid item xs={12} sm={6}>
          <Grid item xs={12} sm={9}>
            {editing ? (
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
              ></Input>
            ) : (
              <Typography variant="h4">{name}</Typography>
            )}

            {editing ? (
              <Input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></Input>
            ) : (
              <Typography variant="h5">{data.person[0].biography}</Typography>
            )}
            <div>
              <IconButton>
                <ShareIcon className={classes.icon} />
              </IconButton>
              <IconButton onClick={() => setEditing(!editing)}>
                <EditOutlinedIcon className={classes.icon} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="https://dawn-advocacy.s3-us-west-1.amazonaws.com/sample-images/Rectangle+64.png"></img>
        </Grid>
      </Grid>
    </Container>
  );
}
