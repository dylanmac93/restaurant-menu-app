import { shallow, ShallowWrapper } from "enzyme";
import { IMenuItemOptionSet } from "../app/AppTypes";
import MenuItemOptionSet from "../components/menuItemOptionSet/MenuItemOptionSet";
import MenuSectionItem from "../components/menuSectionItem/MenuSectionItem";
import { IMenuSectionItemProps } from "../components/menuSectionItem/MenuSectionItemTypes";

describe("MenuSectionItem", () => {
  let component: ShallowWrapper;
  let props: IMenuSectionItemProps;
  MenuItemOptionSet.displayName = "MenuItemOptionSet";

  beforeEach(() => {
    props = {
      name: "name",
      price: 5,
      menuItemOptionSets: [{} as IMenuItemOptionSet],
    };
    component = shallow(<MenuSectionItem {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders correct number of MenuSection", () => {
    expect(component.find("MenuItemOptionSet").length).toBe(
      props.menuItemOptionSets?.length
    );
  });
});
