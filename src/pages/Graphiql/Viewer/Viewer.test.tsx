import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Viewer from './Viewer';
import configureStore from 'redux-mock-store';

jest.mock('@uiw/react-codemirror', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../../store/hooks', () => ({
  useAppSelector: jest.fn(),
}));

jest.mock('../../../store/playgroundSlice/playgroundSelectors', () => ({
  loadingStatusSelector: jest.fn(),
  responseDataSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Viewer component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loader while data is loading', () => {
    jest
      .spyOn(require('../../../store/hooks'), 'useAppSelector')
      .mockReturnValue(true);
    jest
      .spyOn(
        require('../../../store/playgroundSlice/playgroundSelectors'),
        'loadingStatusSelector'
      )
      .mockReturnValue(true);

    render(
      <Provider store={mockStore({})}>
        <Viewer />
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeTruthy();
  });

  it('renders CodeMirror editor with correct content when data is available', () => {
    const responseDataMock = {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      },
      posts: [
        { id: 1, title: 'Post 1', content: 'Content 1' },
        { id: 2, title: 'Post 2', content: 'Content 2' },
      ],
    };

    jest
      .spyOn(require('../../../store/hooks'), 'useAppSelector')
      .mockReturnValue(false);
    jest
      .spyOn(
        require('../../../store/playgroundSlice/playgroundSelectors'),
        'loadingStatusSelector'
      )
      .mockReturnValue(false);
    jest
      .spyOn(
        require('../../../store/playgroundSlice/playgroundSelectors'),
        'responseDataSelector'
      )
      .mockReturnValue(responseDataMock);

    render(
      <Provider store={mockStore({})}>
        <Viewer />
      </Provider>
    );

    waitFor(() => {
      const codeMirrorTextbox = screen.getByTestId('code-mirror');
      expect(codeMirrorTextbox).toContain(JSON.stringify(responseDataMock));
    });
  });
});
