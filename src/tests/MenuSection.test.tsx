import { mount, ReactWrapper } from "enzyme";
import { IMenuItem, IMenuSection } from "../app/AppTypes";
import MenuSection from "../components/menuSection/MenuSection";
import { IMenuSectionProps } from "../components/menuSection/MenuSectionTypes";
import MenuSectionItem from "../components/menuSectionItem/MenuSectionItem";

describe("MenuSection", () => {
  let component: ReactWrapper;
  let props: IMenuSectionProps;
  MenuSectionItem.displayName = "MenuSectionItem";

  beforeEach(() => {
    props = { name: "name", menuSectionItems: [{ Price: 2 } as IMenuItem] };
    component = mount(<MenuSection {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders correct number of MenuSection", () => {
    expect(component.find("MenuSectionItem").length).toBe(
      props.menuSectionItems?.length
    );
  });
});
