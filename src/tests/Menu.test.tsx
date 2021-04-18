import { mount, ReactWrapper } from "enzyme";
import { IMenuProps } from "../components/menu/MenuTypes";
import { IMenuSection } from "../app/AppTypes";
import Menu from "../components/menu/Menu";
import MenuSection from "../components/menuSection/MenuSection";

describe("Menu", () => {
  let component: ReactWrapper;
  let props: IMenuProps;
  MenuSection.displayName = "MenuSection";

  beforeEach(() => {
    props = {
      menu: {
        MenuId: 1,
        MenuVersionNumber: 1,
        MenuSections: [{} as IMenuSection],
      },
    };
    component = mount(<Menu {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders correct number of MenuSection", () => {
    expect(component.find("MenuSection").length).toBe(
      props.menu.MenuSections?.length
    );
  });
});
