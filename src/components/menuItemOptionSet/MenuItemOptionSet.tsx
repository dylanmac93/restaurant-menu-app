import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMenuItemOptionSetProps } from "./MenuItemOptionSetTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  name: {
    marginRight: "10px",
  },
  menuItemOptionSetItemDiv: {
    minWidth: "70px",
    marginRight: "5px",
    marginBottom: "5px",
  },
  price: {
    fontWeight: "bold",
  },
}));

function MenuItemOptionSet(props: IMenuItemOptionSetProps) {
  const classes = useStyles();

  const calculatePrice = (menuItemOptionSetItemPrice: number) => {
    // when true ignore price from MenuSectionItem - causes incorrect price for burgers
    if (props.isMasterOptionSet) {
      return menuItemOptionSetItemPrice;
    }

    return menuItemOptionSetItemPrice + props.price;
  };

  return (
    <div className={classes.root}>
      {props.menuItemOptionSetItems?.map((menuItemOptionSetItem) => (
        <div
          className={classes.menuItemOptionSetItemDiv}
          key={menuItemOptionSetItem.MenuItemOptionSetItemId}
        >
          <div className={classes.name}>{menuItemOptionSetItem.Name}</div>
          <div className={classes.price}>{`€${calculatePrice(
            menuItemOptionSetItem.Price
          ).toFixed(2)}`}</div>
        </div>
      ))}
    </div>
  );
}

export default memo(MenuItemOptionSet);
