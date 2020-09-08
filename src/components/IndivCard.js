import React, { useState } from "react";

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    width: 210,
    // height: flex,
  },
  image: {
    height: 150,
  },
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tag: {
    marginTop: 5,
    backgroundColor: "#7B82BE",
    width: "70%",
    borderRadius: 20,
    color: "white",
  },
});

export default function IndivCard(props) {
  const classes = useStyles();
  const [title, setTitle] = useState(props.title);
  const [involvement, setInvolvement] = useState(props.involvement);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.image} image={props.image} />
        <CardContent className={classes.content}>
          {props.editing ? (
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></Input>
          ) : (
            <Typography variant="subtitle1">{title}</Typography>
          )}
          {props.editing ? (
            <Input
              onChange={(e) => setInvolvement(e.target.value)}
              value={involvement}
            ></Input>
          ) : (
            <Typography className={classes.tag} variant="subtitle1">
              {involvement}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
