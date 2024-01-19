import { render, screen } from '@testing-library/react';
import WelcomePage from './Welcome';
import { DeveloperCardProps } from '@src/components/DeveloperCard/DeveloperCard.interface';

jest.mock('@src/hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      welcomePage: {
        headerWelcomePage: 'Welcome Page',
        headerOurTeam: 'Our team',
      },
      developers: [
        { id: 1, name: 'John Doe', roles: ['Developer'] },
        { id: 2, name: 'Jane Doe', roles: ['Developer, Team Leader'] },
        { id: 3, name: 'Jack Doe', roles: ['Developer, Designer'] },
      ],
    },
  })),
}));

jest.mock('@src/components/EducationalProgram/EducationalProgram', () => () => (
  <div data-testid="mocked-educational-program">Mocked Educational Program</div>
));

jest.mock('@src/components/AboutProject/AboutProject', () => () => (
  <div data-testid="mocked-about-project">Mocked About Project</div>
));

jest.mock(
  '@src/components/DeveloperCard/DeveloperCard',
  () =>
    ({ developer }: DeveloperCardProps) => (
      <div data-testid={`mocked-developer-card-${developer.id}`}>
        Mocked Developer Card - {developer.name}
      </div>
    )
);

jest.mock('@src/constants/developers', () => ({
  DEVELOPERS: [
    { id: 1, name: 'John Doe', roles: ['Developer'] },
    { id: 2, name: 'Jane Doe', roles: ['Developer, Team Leader'] },
    { id: 3, name: 'Jack Doe', roles: ['Developer, Designer'] },
  ],
}));

describe('WelcomePage component', () => {
  it('renders without errors', () => {
    render(<WelcomePage />);
    expect(screen.getByText('Welcome Page')).toBeTruthy();
    expect(screen.getByTestId('mocked-educational-program')).toBeTruthy();
    expect(screen.getByTestId('mocked-about-project')).toBeTruthy();
  });

  it('renders the team section with developer cards', () => {
    render(<WelcomePage />);
    expect(screen.getByText('Our team')).toBeTruthy();

    const developerCards = screen.getAllByTestId(/^mocked-developer-card-/);
    expect(developerCards).toHaveLength(3);
  });
});
