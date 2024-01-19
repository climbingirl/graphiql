import { cleanup, render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const { location } = window;
const { reload } = location;

beforeEach(() => {
  jest.restoreAllMocks();
  cleanup();
  Object.defineProperty(window, 'location', { value: { reload: jest.fn() } });
});

afterEach(() => {
  window.location.reload = reload;
});

describe('errorBoundary', () => {
  it('logs error to the console using componentDidCatch', () => {
    const ComponentThatThrows = (): never => {
      throw new Error('Test error');
    };

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div>Error fallback</div>}>
        <ComponentThatThrows />
      </ErrorBoundary>
    );

    const expectedError = new Error('Test error');
    const expectedErrorInfo = expect.objectContaining({
      componentStack: expect.stringContaining('ComponentThatThrows'),
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Uncaught error:',
      expectedError,
      expectedErrorInfo
    );

    consoleErrorSpy.mockRestore();
  });
});
