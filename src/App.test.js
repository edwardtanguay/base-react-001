import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as qstr from '../src/qtools/qstr';

test('site loads', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/to this site/i);
	expect(linkElement).toBeInTheDocument();
});

test('qstr.capitalizeFirstLetter() with lowercase works', () => {
	expect(qstr.capitalizeFirstLetter('this')).toBe('This');
});

test('qstr.capitalizeFirstLetter() with uppercase works', () => {
	expect(qstr.capitalizeFirstLetter('This')).toBe('This');
});

test('qstr.replaceAll() replacing all characters works', () => {
	expect(qstr.replaceAll('xxxxx', 'x', 'a')).toBe('aaaaa');
});

test('qstr.replaceAll() replacing some characters works', () => {
	expect(qstr.replaceAll('This is a test.', 'i', 'x')).toBe('Thxs xs a test.');
});

test('qstr.contains() positive-find works', () => {
	expect(qstr.contains('This is a test.', 'is a')).toBeTruthy();
});

test('qstr.contains() negative-find works', () => {
	expect(qstr.contains('This is a test.', 'nnn')).toBeFalsy();
});

test('qstr.endsWith() positive-find works', () => {
	expect(qstr.endsWith('This is a test.', 'test.')).toBeTruthy();
});

test('qstr.endsWith() negative-find works', () => {
	expect(qstr.endsWith('This is a test.', 'nnn')).toBeFalsy();
});
