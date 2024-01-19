import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NotFoundPage from './NotFound';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      notFoundPage: {
        message: 'There are no playground for graphQL requests here',
        linkToWelcome: 'Go to welcome page',
      },
    },
  })),
}));

describe('NotFoundPage component', () => {
  it('renders the not found page correctly', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText('There are no playground for graphQL requests here')
    ).toBeTruthy();
    expect(screen.getByText('Go to welcome page')).toBeTruthy();
  });

  it('should navigate to the welcome page on button click', () => {
    render(
      <MemoryRouter initialEntries={['/incorrect-route']}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: mockNavigate,
    }));

    fireEvent.click(screen.getByText('Go to welcome page'));

    waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
