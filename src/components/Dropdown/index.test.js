import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./index";
import { useState } from "react";

const options = [
  { value: "test-1", name: "test 1" },
  { value: "test-2", name: "test 2" },
];

const Selector = () => {
  const [color, setColor] = useState(options[0].value);

  return (
    <>
      <h1>You selected: {color}</h1>
      <Dropdown
        options={options}
        value={color}
        onSelect={(value) => {
          setColor(value);
        }}
      />
    </>
  );
}
describe("Dropdown", () => {
  test("Should toggle visibility of dropdown items", () => {
    render(<Dropdown title="show me" options={options} />);

    const dropdownTrigger = screen.getByRole("button");
    expect(dropdownTrigger).toBeInTheDocument();
    fireEvent.click(dropdownTrigger);

    const dropdownMenuItems = screen.queryAllByRole("menuitem");
    expect(dropdownMenuItems.length).toBe(2);
    expect(screen.getByText(/test 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test 2/i)).toBeInTheDocument();
  });

  test("Should select options", async () => {
    render(<Selector />);

    expect(screen.getByText("You selected: test-1")).toBeInTheDocument();

    const dropdownTrigger = screen.getByRole("button");
    fireEvent.click(dropdownTrigger);

    fireEvent.click(screen.getByText(/test 2/i));
    expect(screen.getByText("You selected: test-2")).toBeInTheDocument();
  });
});
