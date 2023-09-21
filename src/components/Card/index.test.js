import Card from "./index";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Card", () => {
  test("Should render and image", async () => {
    render(
      <Card
        src="https://images.unsplash.com/photo-1604085572343-f0…xhY2t8MTY5NTI0MDk3OHww&ixlib=rb-4.0.3&q=80&w=1080"
        alt="random image"
      />
    );

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });
});
