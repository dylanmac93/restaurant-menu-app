import { mount, ReactWrapper } from "enzyme";
import { IMenuItemOptionSetItem } from "../app/AppTypes";
import MenuItemOptionSet from "../components/menuItemOptionSet/MenuItemOptionSet";
import { IMenuItemOptionSetProps } from "../components/menuItemOptionSet/MenuItemOptionSetTypes";

describe("MenuItemOptionSet", () => {
  let component: ReactWrapper;
  let props: IMenuItemOptionSetProps;

  beforeEach(() => {
    props = {
      isMasterOptionSet: true,
      price: 5.0,
      menuItemOptionSetItems: [
        {
          Name: "name",
          Price: 2,
          MenuItemOptionSetItemId: 1,
        } as IMenuItemOptionSetItem,
      ],
    };
    component = mount(<MenuItemOptionSet {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });
});
