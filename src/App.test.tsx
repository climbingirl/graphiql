import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders Header component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headerElement = getByTestId('header');
    expect(headerElement).toBeTruthy();
  });

  test('renders Footer component', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeTruthy();
  });
});
