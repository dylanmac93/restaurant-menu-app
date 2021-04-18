import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMenuSectionItemProps } from "./MenuSectionItemTypes";
import MenuItemOptionSet from "../menuItemOptionSet/MenuItemOptionSet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    alignItems: "center",
  },
  image: {
    width: "130px",
    height: "100px",
  },
  leftDiv: {
    width: "30%",
    marginRight: "5px",
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
      <div>
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
