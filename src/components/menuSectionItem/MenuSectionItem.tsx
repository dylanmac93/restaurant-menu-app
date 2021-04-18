import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMenuSectionItemProps } from "./MenuSectionItemTypes";
import { Card, CardHeader, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { display: "flex", flexDirection: "row" },
  image: {
    width: "130px",
    height: "100px",
  },
}));

function MenuSectionItem(props: IMenuSectionItemProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div>{props.name}</div>
        {props.image && <img src={props.image} className={classes.image} />}
        {props.description && <div>{props.description}</div>}
      </div>
      <div>
        {props.menuItemOptionSets?.map((menuItemOptionSet) => (
          <div key={menuItemOptionSet.MenuItemOptionSetId}>MenuSectionItem</div>
        ))}
      </div>
    </div>
  );
}

export default memo(MenuSectionItem);
