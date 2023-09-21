import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

window.scrollTo = jest.fn()

test('renders Search for Images link', () => {
  render(<App />);
  const headingElement = screen.getByText(/Search for Images/i);
  expect(headingElement).toBeInTheDocument();
});
