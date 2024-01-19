import { render, screen } from '@testing-library/react';
import Enum from './Enum';

describe('Enum component', () => {
  it('renders with the correct name', () => {
    const enumProps = {
      name: 'EnumValue',
    };

    render(<Enum {...enumProps} />);

    expect(screen.getByText('EnumValue')).toBeTruthy();
  });

  it('renders with a different name', () => {
    const enumProps = {
      name: 'AnotherEnumValue',
    };

    render(<Enum {...enumProps} />);

    expect(screen.getByText('AnotherEnumValue')).toBeTruthy();
  });
});
