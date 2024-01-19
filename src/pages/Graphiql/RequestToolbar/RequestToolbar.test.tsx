import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RequestToolbar from './RequestToolbar';
import { RootState } from '@src/store/store';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      requestToolbar: {
        sections: ['variables', 'headers'],
      },
    },
  })),
}));

jest.mock('../../../store/playgroundSlice/playgroundSlice', () => ({
  setVariables: jest.fn(),
  setHeaders: jest.fn(),
}));

const mockUseAppSelector = jest.fn();
jest.mock('../../../store/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: (selector: (state: RootState) => string) =>
    mockUseAppSelector(selector),
}));

beforeEach(() => {
  mockUseAppSelector.mockReset();
  mockUseAppSelector.mockReturnValue('');
});

describe('RequestToolbar component', () => {
  it('renders without errors', () => {
    render(<RequestToolbar isToolbarOpen={true} onOpenToolbar={() => {}} />);
    expect(screen.getByTestId('request-toolbar')).toBeTruthy();
  });

  it('calls onOpenToolbar with the correct value on handleOpen', () => {
    const onOpenToolbarMock = jest.fn();
    render(
      <RequestToolbar isToolbarOpen={true} onOpenToolbar={onOpenToolbarMock} />
    );
    const toggleButton = screen.getByTestId('toggle-button');

    waitFor(() => {
      fireEvent.click(toggleButton);
    });

    expect(onOpenToolbarMock).toHaveBeenCalledWith(false);
  });
});
