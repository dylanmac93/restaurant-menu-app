import React, { memo } from "react";
import { IMenuSectionProps } from "./MenuSectionTypes";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardMedia } from "@material-ui/core";
import MenuSectionItem from "../menuSectionItem/MenuSectionItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: "12%",
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
        <div key={menuSectionItem.MenuItemId}>
          <MenuSectionItem
            name={menuSectionItem.Name}
            image={menuSectionItem.ImageUrl}
            price={menuSectionItem.Price}
            description={menuSectionItem.Description}
            menuItemOptionSets={menuSectionItem.MenuItemOptionSets}
          />
        </div>
      ))}
    </Card>
  );
}

export default memo(MenuSection);
