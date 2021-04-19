import { Card, CardHeader, CardMedia } from "@material-ui/core";
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
    props = {
      name: "name",
      menuSectionItems: [{ Price: 2 } as IMenuItem],
      image: "image",
    };
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

  it("renders Card", () => {
    expect(component.find(Card).exists()).toBe(true);
  });

  it("renders CardHeader", () => {
    expect(component.find(CardHeader).exists()).toBe(true);
  });

  it("renders CardMedia if image prop exists", () => {
    expect(component.find(CardMedia).exists()).toBe(true);
  });

  it("does not render CardMedia if image prop is undefined", () => {
    component = mount(<MenuSection {...props} image={undefined} />);
    expect(component.find(CardMedia).exists()).toBe(false);
  });
});
