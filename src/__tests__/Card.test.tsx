import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/ui/Card";
import cardData from "../__mocks__/card.json";
import "@testing-library/jest-dom";
import defaultImg from '../assets/thumbnail-default.jpg';

// Mock the handleClick function
const mockHandleClick = jest.fn();

describe("Card Component", () => {
  it("Card component renders correctly", () => {
    render(<Card cardData={cardData} handleClick={mockHandleClick} />);

    // Assert that the title and price elements are in the document
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByTestId("amountid")).toBeInTheDocument();

    // Assert that the image is rendered with the correct alt text
    const image = screen.getByAltText(""); // Alt text for the default image
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "http://books.google.com/books/content?id=J89cEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"); // Check image URL
  });

  it("Card component with missing image data", () => {
    const cardDataWithoutImage = {
      ...cardData,
			saleInfo: {country: "IN", isEbook: false, saleability: "NOT_FOR_SALE"},
      volumeInfo: { title: "Title Without Image" },
    };
    render(
      <Card cardData={cardDataWithoutImage} handleClick={mockHandleClick} />
    );

    // Assert that the title and "Not mentioned" element are in the document
    expect(screen.getByText("Not mentioned")).toBeInTheDocument();

    // Assert that the default image is rendered with the correct alt text
    const image = screen.getByAltText("No Image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultImg); // Check the default image URL
  });
});
