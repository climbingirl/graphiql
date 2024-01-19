import { render } from '@testing-library/react';
import Section from './Section';

describe('Section component', () => {
  it('renders the component with the correct title', () => {
    const icon = 'path/to/icon.png';
    const title = 'Test Section';
    const { getByAltText, getByText } = render(
      <Section
        classNameHead="test-class"
        icon={icon}
        title={title}
        setActiveType={() => {}}
      >
        <div>Test content</div>
      </Section>
    );

    const iconElement = getByAltText(title);
    const titleElement = getByText(title);

    expect(iconElement).toBeTruthy();
    expect(titleElement).toBeTruthy();
  });

  it('renders the section content', () => {
    const { getByText } = render(
      <Section
        classNameHead="test-class"
        icon="path/to/icon.png"
        title="Test Section"
        setActiveType={() => {}}
      >
        <div>Test content</div>
      </Section>
    );

    const contentElement = getByText('Test content');

    expect(contentElement).toBeTruthy();
  });
});
