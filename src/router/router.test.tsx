import { act, render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

jest.mock('cm6-graphql', () => ({
  graphql: jest.fn(),
}));

describe('router', () => {
  it('renders WelcomePage when navigating to the root path', () => {
    act(() => {
      render(<RouterProvider router={router} />);
    });

    const welcomeTextExample = screen.getByText(
      /RS School is an educational program organized by The Rolling Scopes/i
    );

    expect(welcomeTextExample).toBeTruthy();
  });
});
