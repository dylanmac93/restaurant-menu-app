import React from "react";
import App from "../app/App";
import { shallow, ShallowWrapper } from "enzyme";
import Menu from "../components/menu/Menu";

describe("App", () => {
  let component: ShallowWrapper;
  Menu.displayName = "Menu";

  beforeEach(() => {
    component = shallow(<App />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders Menu", () => {
    expect(component.find("Menu").exists()).toBe(true);
  });
});
