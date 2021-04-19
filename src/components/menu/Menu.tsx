import React, { memo } from "react";
import { IMenuProps } from "./MenuTypes";
import { makeStyles } from "@material-ui/core/styles";
import MenuSection from "../menuSection/MenuSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  menuSectionDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (max-width: 1000px)": {
    root: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));

function Menu(props: IMenuProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.menu.MenuSections?.map(
        (menuSection) =>
          //exclude test MenuSection
          menuSection.MenuSectionId !== 296734 && (
            <div
              className={classes.menuSectionDiv}
              key={menuSection.MenuSectionId}
            >
              <MenuSection
                name={menuSection.Name}
                image={menuSection.ImageUrl}
                menuSectionItems={menuSection.MenuItems}
              />
            </div>
          )
      )}
    </div>
  );
}

export default memo(Menu);
