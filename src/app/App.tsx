import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../components/menu/Menu";
import { IMenu } from "./AppTypes";
import menuData from "./menuData.json";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#2a2a2a;",
  },
  menuDiv: {
    width: "90%",
  },
}));

function App() {
  const classes = useStyles();
  const menu: IMenu = menuData;

  return (
    <div className={classes.root}>
      <div className={classes.menuDiv}>
        <Menu menu={menu} />
      </div>
    </div>
  );
}

export default App;
