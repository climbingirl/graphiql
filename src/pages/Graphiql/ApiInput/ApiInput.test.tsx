import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ApiInput from './ApiInput';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { setGraphiqlApiUrl } from '../../../store/playgroundSlice/playgroundSlice';
import { getApiShema } from '../../../store/playgroundSlice/playgroundThunks';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      apiInput: {
        yourEndpoint: 'Your Endpoint',
        sendButtonText: 'Send',
      },
      toastMessages: {
        invalidEndpoint: 'Invalid Endpoint',
      },
    },
  })),
}));

jest.mock('../../../store/store', () => ({
  ...jest.requireActual('../../../store/store'),
  store: {
    ...jest.requireActual('../../../store/store').store,
    dispatch: jest.fn(),
  },
}));

jest.mock('react-toastify', () => ({
  ToastContainer: jest.fn(),
  toast: {
    error: jest.fn(),
  },
}));

describe('ApiInput', () => {
  it('should render without errors', () => {
    render(
      <Provider store={store}>
        <ApiInput />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Your Endpoint')).toBeTruthy();
    expect(screen.getByText('Send')).toBeTruthy();
  });

  it('should update input value on change', () => {
    render(
      <Provider store={store}>
        <ApiInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      'Your Endpoint'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'https://example.com/api' } });

    expect(input.value).toBe('https://example.com/api');
  });

  it('should dispatch setGraphiqlApiUrl and getApiShema on form submission', () => {
    render(
      <Provider store={store}>
        <ApiInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Your Endpoint');
    const submitButton = screen.getByText('Send');

    waitFor(() => {
      fireEvent.change(input, { target: { value: 'https://example.com/api' } });
      fireEvent.click(submitButton);
    });

    waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        setGraphiqlApiUrl('https://example.com/api')
      );
      expect(store.dispatch).toHaveBeenCalledWith(
        getApiShema('https://example.com/api')
      );
    });
  });
});
