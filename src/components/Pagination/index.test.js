import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./index";
import { useState } from "react";

const TOTAL = 32

const PageContent = () => {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      total={TOTAL}
      page={page}
      onNext={() => setPage(page + 1)}
      onPrev={() => setPage(page - 1)}
    />
  );
};

describe("Pagination", () => {
  test("Should render pagination component", () => {
    render(<PageContent />);

    expect(screen.getByText(/Prev/i)).toBeDisabled();
    expect(screen.getByText(/Next/i)).not.toBeDisabled();
  });
  test("Should navigate to the 2 page", () => {
    render(<PageContent />);
  });
  test("Should not be able to navigate", () => {
    render(<PageContent />);
  });
});
