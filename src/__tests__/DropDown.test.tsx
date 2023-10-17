import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DropDown from '../components/ui/DropDown';
import "@testing-library/jest-dom";

describe("DropDown Component", () => {
	it('DropDown component renders correctly', () => {
		const updateFilter = jest.fn();
		render(<DropDown updateFilter={updateFilter} />);
	
		// Check if the "Select Filter" option is present
		expect(screen.getByText('Select Filter')).toBeInTheDocument();
	
		// Simulate a user selecting an option
		const selectElement = screen.getByRole('combobox');
		fireEvent.change(selectElement, { target: { value: 'intitle' } });
	
		// Check if the selected value is updated
		expect(selectElement).toHaveValue('intitle');
	
		// Check if the updateFilter function is called with the selected value
		expect(updateFilter).toHaveBeenCalledWith('intitle');
	});
});

