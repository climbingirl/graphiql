import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      errorBoundary: {
        header: 'Something went wrong',
        reloadButtonText: 'Reload',
      },
    },
  })),
}));

beforeEach(() => {
  jest.restoreAllMocks();
  cleanup();
  Object.defineProperty(window, 'location', { value: { reload: jest.fn() } });
});

describe('ErrorBoundary component', () => {
  it('Correct render of the ErrorBoundary component', async () => {
    render(<ErrorBoundaryFallback />);

    const titleText = screen.getByText('Something went wrong');
    const button = screen.getByRole('button');

    expect(titleText).toBeTruthy();
    expect(window.location.reload).toHaveBeenCalledTimes(0);

    waitFor(() => {
      fireEvent.click(button);
    });

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
