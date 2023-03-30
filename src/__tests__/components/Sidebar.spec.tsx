import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "",
      push: jest.fn(),
    };
  },
}));

describe("Navbar", () => {
  test("nav items rendering", () => {});

  test("active nav item has highlighted div", () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/outlets",
    }));

    render(<Navbar />);

    const activeMenuItem = screen.getByRole("link", { name: "Outlets" });
    expect(activeMenuItem.childNodes.length).toBe(2);
  });

  test("inactive nav items do not have highlighted div", () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/outlets",
    }));

    render(<Navbar />);

    const menuItems = screen.getAllByRole("menuitem");

    const inActiveMenuItems = menuItems.filter(
      (item) => item.firstChild?.childNodes.length === 1
    );

    expect(inActiveMenuItems.length).toBe(menuItems.length - 1);
  });
});
