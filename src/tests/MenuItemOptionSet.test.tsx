import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { IMenuItem } from "../app/AppTypes";
import MenuItemOptionSet from "../components/menuItemOptionSet/MenuItemOptionSet";
import { IMenuItemOptionSetProps } from "../components/menuItemOptionSet/MenuItemOptionSetTypes";
import { IMenuSectionProps } from "../components/menuSection/MenuSectionTypes";
import MenuSectionItem from "../components/menuSectionItem/MenuSectionItem";

describe("MenuItemOptionSet", () => {
  let component: ShallowWrapper;
  let props: IMenuItemOptionSetProps;

  beforeEach(() => {
    props = { name: "name", isMasterOptionSet: true, price: 5.0 };
    component = shallow(<MenuItemOptionSet {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });
});
