import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMenuSectionItemProps } from "./MenuSectionItemTypes";
import MenuItemOptionSet from "../menuItemOptionSet/MenuItemOptionSet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    alignItems: "center",
  },
  image: {
    width: "100px",
    height: "70px",
  },
  leftDiv: {
    flex: "0.3",
    marginRight: "5px",
  },
  rightDiv: {
    flex: "0.7",
  },
  price: {
    fontWeight: "bold",
  },
  name: { fontSize: "20px", marginBottom: "5px" },
}));

function MenuSectionItem(props: IMenuSectionItemProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftDiv}>
        <div className={classes.name}>{props.name}</div>
        {props.image && (
          <img src={props.image} className={classes.image} alt="" />
        )}
        {props.description && <div>{props.description}</div>}
      </div>
      <div className={classes.rightDiv}>
        {props.menuItemOptionSets && props.menuItemOptionSets.length > 0 ? (
          props.menuItemOptionSets?.map((menuItemOptionSet) => (
            <div key={menuItemOptionSet.MenuItemOptionSetId}>
              <MenuItemOptionSet
                isMasterOptionSet={menuItemOptionSet.IsMasterOptionSet}
                price={props.price}
                menuItemOptionSetItems={
                  menuItemOptionSet.MenuItemOptionSetItems
                }
              />
            </div>
          ))
        ) : (
          <div className={classes.price}>{`€${props.price.toFixed(2)}`}</div>
        )}
      </div>
    </div>
  );
}

export default memo(MenuSectionItem);
