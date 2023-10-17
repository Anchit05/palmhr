import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Use Router for routing context
import BooksList from "../components/BooksList";
import "@testing-library/jest-dom";
import mockBooksData from "../__mocks__/booksList.json";

const mockHandleClick = jest.fn();

describe("BooksList Component", () => {
  it("BooksList component renders correctly with books data", () => {
    render(
      <Router>
        <BooksList booksData={mockBooksData} handleLoadMore={mockHandleClick} />
      </Router>
    );

    // Check if the card components are present
    expect(screen.getAllByTestId("card")).toHaveLength(mockBooksData.length);
  });

  it('BooksList component handles "No results" when there is no data', () => {
    render(
      <Router>
        <BooksList booksData={[]} handleLoadMore={mockHandleClick} />
      </Router>
    );
    // Check if the "No results" text is present
    expect(screen.getByText("No results")).toBeInTheDocument();
  });
});
