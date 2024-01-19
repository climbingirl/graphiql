import { render, screen } from '@testing-library/react';
import EducationalProgram from './EducationalProgram';

jest.mock('../../hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      educationalProgram: {
        header: 'Our educational program',
        paragraphs: [
          'RS School is an educational program...',
          'Openness and Passing Knowledge Forward...',
          'RS School offers a variety of courses...',
        ],
      },
    },
  })),
}));

describe('EducationalProgram component', () => {
  it('renders component without errors', () => {
    render(<EducationalProgram />);
    expect(screen.getByText('Our educational program')).toBeTruthy();
  });

  it('renders the correct text content', () => {
    render(<EducationalProgram />);
    expect(
      screen.getByText(/RS School is an educational program/i)
    ).toBeTruthy();
    expect(
      screen.getByText(/Openness and Passing Knowledge Forward/i)
    ).toBeTruthy();
    expect(
      screen.getByText(/RS School offers a variety of courses/i)
    ).toBeTruthy();
  });

  it('renders images with the correct alt attributes', () => {
    render(<EducationalProgram />);
    expect(screen.getByAltText('Rolling Scopes School logo')).toBeTruthy();
    expect(screen.getByAltText('Sloth')).toBeTruthy();
  });

  it('renders a link with the correct href attribute', () => {
    render(<EducationalProgram />);
    const link = screen.getByRole('link', { name: /rolling scopes school/i });

    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('https://rs.school/react/');
  });
});
