import { render, screen } from '@testing-library/react';
import AboutProject from './AboutProject';

jest.mock('../../hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    activeLang: 'en',
    setActiveLang: jest.fn(),
    localizationData: {
      aboutProject: {
        header: 'About project',
        paragraphs: [
          'Paragraph 1',
          'Paragraph 2',
          'Paragraph 3',
          'Paragraph 4',
        ],
        taskLink:
          'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md',
      },
    },
  })),
}));

describe('AboutProject component', () => {
  it('renders component without errors', () => {
    render(<AboutProject />);
    expect(screen.getByText('About project')).toBeTruthy();
  });

  it('renders a link with the correct href attribute', () => {
    render(<AboutProject />);
    const link = screen.getByRole('link');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe(
      'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
    );
  });
});
