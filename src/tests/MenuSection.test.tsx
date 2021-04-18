import { shallow, ShallowWrapper } from "enzyme";
import { IMenuItem, IMenuSection } from "../app/AppTypes";
import MenuSection from "../components/menuSection/MenuSection";
import { IMenuSectionProps } from "../components/menuSection/MenuSectionTypes";
import MenuSectionItem from "../components/menuSectionItem/MenuSectionItem";

describe("MenuSection", () => {
  let component: ShallowWrapper;
  let props: IMenuSectionProps;
  MenuSectionItem.displayName = "MenuSectionItem";

  beforeEach(() => {
    props = { name: "name", menuSectionItems: [{} as IMenuItem] };
    component = shallow(<MenuSection {...props} />);
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
