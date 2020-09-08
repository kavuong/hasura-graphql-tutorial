import React, { useState } from "react";
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
  const classes = useStyles();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);

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
              <Typography variant="h5">{description}</Typography>
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
