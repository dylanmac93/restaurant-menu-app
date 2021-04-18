import React from "react";
import App from "../app/App";
import { mount, ReactWrapper } from "enzyme";
import Menu from "../components/menu/Menu";

describe("App", () => {
  let component: ReactWrapper;
  Menu.displayName = "Menu";

  beforeEach(() => {
    component = mount(<App />);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders Menu", () => {
    expect(component.find("Menu").exists()).toBe(true);
  });
});
