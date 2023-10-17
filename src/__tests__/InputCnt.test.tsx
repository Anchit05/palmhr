import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InputCnt from '../components/ui/InputCnt';
import "@testing-library/jest-dom";

describe("Input Component", () => {
  
	it('InputCnt component renders correctly', () => {
		const handleBooksSearch = jest.fn();
		render(<InputCnt handleBooksSearch={handleBooksSearch} isLoading={false} />);
	
		// Check if the input field is present
		expect(screen.getByPlaceholderText('search a book')).toBeInTheDocument();
	
		// Check if the search icon is present
		expect(screen.getByTestId('search-icon')).toBeInTheDocument();
	});
	
	it('InputCnt component handles input change', () => {
		const handleBooksSearch = jest.fn();
		render(<InputCnt handleBooksSearch={handleBooksSearch} isLoading={false} />);
	
		const inputElement = screen.getByPlaceholderText('search a book');
		fireEvent.change(inputElement, { target: { value: 'React' } });
	
		// Check if the input value is updated
		expect(inputElement).toHaveValue('React');
	});
	
	it('InputCnt component handles Enter key press', () => {
		const handleBooksSearch = jest.fn();
		render(<InputCnt handleBooksSearch={handleBooksSearch} isLoading={false} />);
	
		const inputElement = screen.getByPlaceholderText('search a book');
		fireEvent.change(inputElement, { target: { value: 'React' } });
	
		// Simulate pressing the Enter key
		fireEvent.keyDown(inputElement, { key: 'Enter' });
	
		// Check if the handleBooksSearch function is called with the input value
		expect(handleBooksSearch).toHaveBeenCalledWith('React');
	});
	
	it('InputCnt component handles search icon click', () => {
		const handleBooksSearch = jest.fn();
		render(<InputCnt handleBooksSearch={handleBooksSearch} isLoading={false} />);
	
		const inputElement = screen.getByPlaceholderText('search a book');
		fireEvent.change(inputElement, { target: { value: 'React' } });
	
		// Simulate clicking the search icon
		const searchIcon = screen.getByTestId('search-icon');
		fireEvent.click(searchIcon);
	
		// Check if the handleBooksSearch function is called with the input value
		expect(handleBooksSearch).toHaveBeenCalledWith('React');
	});
	
	it('InputCnt component shows loading icon when isLoading is true', () => {
		render(<InputCnt handleBooksSearch={() => {}} isLoading={true} />);
	
		// Check if the loading icon is present
		expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
	});
});

