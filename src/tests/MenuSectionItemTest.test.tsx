import { mount, ReactWrapper } from "enzyme";
import { IMenuItemOptionSet } from "../app/AppTypes";
import MenuItemOptionSet from "../components/menuItemOptionSet/MenuItemOptionSet";
import MenuSectionItem from "../components/menuSectionItem/MenuSectionItem";
import { IMenuSectionItemProps } from "../components/menuSectionItem/MenuSectionItemTypes";

describe("MenuSectionItem", () => {
  let component: ReactWrapper;
  let props: IMenuSectionItemProps;
  MenuItemOptionSet.displayName = "MenuItemOptionSet";

  beforeEach(() => {
    props = {
      name: "name",
      price: 5,
      menuItemOptionSets: [{} as IMenuItemOptionSet],
      image: "image",
    };
    component = mount(<MenuSectionItem {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders correct number of MenuSection", () => {
    expect(component.find("MenuItemOptionSet").length).toBe(
      props.menuItemOptionSets?.length
    );
  });

  it("does not render img if image prop is undefined", () => {
    component = mount(<MenuSectionItem {...props} image={undefined} />);
    expect(component.find("img").exists()).toBe(false);
  });
});
