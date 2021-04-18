import React, { memo } from "react";
import { IMenuProps } from "./MenuTypes";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "white",
    marginTop: "20px",
  },
}));

function Menu(props: IMenuProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.menu.MenuSections?.map((menuSection) => (
        <div key={menuSection.MenuSectionId}>Menu Section</div>
      ))}
    </div>
  );
}

export default memo(Menu);
