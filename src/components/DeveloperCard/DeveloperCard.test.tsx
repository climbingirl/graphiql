import { render, screen, fireEvent } from '@testing-library/react';
import DeveloperCard from './DeveloperCard';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      developerCard: {
        showDetailsButton: 'Show details',
        hideDetailsButton: 'Hide details',
        headerBiography: 'Biography:',
        headerContribution: 'Contribution:',
        headerGithub: 'Github:',
      },
    },
  })),
}));

const mockDeveloper = {
  id: 1,
  name: 'John Doe',
  image: 'path/to/image.jpg',
  roles: ['Frontend Developer'],
  biography: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  contribution: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
  github: 'john_doe',
};

describe('DeveloperCard component', () => {
  it('displays developer information correctly', () => {
    render(<DeveloperCard developer={mockDeveloper} />);
    expect(screen.getByAltText(mockDeveloper.name)).toBeTruthy();
    expect(screen.getByText(mockDeveloper.name)).toBeTruthy();
    expect(screen.getByText('Frontend Developer')).toBeTruthy();
  });

  it('toggles details visibility on button click', () => {
    render(<DeveloperCard developer={mockDeveloper} />);
    const showDetailsButton = screen.getByText('Show details');

    fireEvent.click(showDetailsButton);
    expect(screen.getByText('Hide details')).toBeTruthy();

    fireEvent.click(showDetailsButton);
    expect(screen.getByText('Show details')).toBeTruthy();
  });

  it('displays developer details correctly when toggled', () => {
    render(<DeveloperCard developer={mockDeveloper} />);
    const showDetailsButton = screen.getByText('Show details');

    fireEvent.click(showDetailsButton);

    expect(screen.getByText('Biography:')).toBeTruthy();
    expect(screen.getByText(mockDeveloper.biography)).toBeTruthy();
    expect(screen.getByText('Contribution:')).toBeTruthy();
    expect(screen.getByText(mockDeveloper.contribution)).toBeTruthy();
    expect(screen.getByText('Github:')).toBeTruthy();
    expect(screen.getByText(mockDeveloper.github)).toBeTruthy();
  });
});
