import React, { memo } from "react";
import { IMenuSectionProps } from "./MenuSectionTypes";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "20%",
  },
}));

function MenuSection(props: IMenuSectionProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={props.name} />
      {props.image && (
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Paella dish"
        />
      )}

      {props.menuSectionItems?.map((menuSectionItem) => (
        <div>Menu Section Item</div>
      ))}
    </Card>
  );
}

export default memo(MenuSection);
