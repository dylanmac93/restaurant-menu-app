import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return <div className={classes.root}>Menu</div>;
}

export default App;
