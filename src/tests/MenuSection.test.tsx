import { shallow, ShallowWrapper } from "enzyme";
import MenuSection from "../components/menuSection/MenuSection";
import { IMenuSectionProps } from "../components/menuSection/MenuSectionTypes";

describe("MenuSection", () => {
  let component: ShallowWrapper;
  let props: IMenuSectionProps;

  beforeEach(() => {
    props = { name: "name" };
    component = shallow(<MenuSection {...props} />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });
});
