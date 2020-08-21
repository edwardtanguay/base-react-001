import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('site loads', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/to this site/i);
	expect(linkElement).toBeInTheDocument();
});
