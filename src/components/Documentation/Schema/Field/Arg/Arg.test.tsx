import { render, screen, fireEvent } from '@testing-library/react';
import Arg from './Arg';

const mockSetActiveType = jest.fn();

const sampleArgProps = {
  name: 'argumentName',
  type: { name: 'typeName', kind: 'someKind' },
  index: 1,
  setActiveType: mockSetActiveType,
};

describe('Arg component', () => {
  it('renders with type name and calls setActiveType on link click', () => {
    render(<Arg {...sampleArgProps} />);

    expect(screen.getByText('argumentName:')).toBeTruthy();
    expect(screen.getByText('typeName')).toBeTruthy();

    fireEvent.click(screen.getByText('typeName'));

    expect(mockSetActiveType).toHaveBeenCalledWith('typeName');
  });

  it('renders with "No data" when type name is not provided', () => {
    const propsWithoutTypeName = {
      ...sampleArgProps,
      type: { name: '', kind: 'someKind' },
    };
    render(<Arg {...propsWithoutTypeName} />);

    expect(screen.getByText('argumentName:')).toBeTruthy();
    expect(screen.getByText('No data')).toBeTruthy();
  });
});
