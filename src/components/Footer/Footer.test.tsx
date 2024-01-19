import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      developers: [
        { github: 'mockedUser1' },
        { github: 'mockedUser2' },
        { github: 'mockedUser3' },
        { github: 'mockedUser4' },
      ],
    },
  })),
}));

jest.mock('@src/constants/developers', () => ({
  GITHUB_USERS: ['mockedUser1', 'mockedUser2', 'mockedUser3', 'mockedUser4'],
}));

describe('Footer component', () => {
  it('contains a link to the Rolling Scopes School website', () => {
    render(<Footer />);
    const rssSchoolLink = screen.getByRole('link', {
      name: 'Rolling Scopes School logo',
    });

    expect(rssSchoolLink).toBeTruthy();
    expect(rssSchoolLink.getAttribute('href')).toBe('https://rs.school/react/');
    expect(rssSchoolLink.getAttribute('target')).toBe('_blank');
    expect(rssSchoolLink.getAttribute('rel')).toBe('noreferrer');
  });

  it('renders year', () => {
    render(<Footer />);
    expect(screen.getByText('2024')).toBeTruthy();
  });

  it('renders GitHub links for each developer', () => {
    render(<Footer />);
    const githubLinks = screen.getAllByRole('link', { name: 'Github icon' });

    expect(githubLinks).toHaveLength(4);

    githubLinks.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(
        `https://github.com/mockedUser${index + 1}`
      );
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noreferrer');
    });
  });
});
