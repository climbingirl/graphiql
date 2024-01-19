import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Field, { getTypeName } from './Field';
import { FieldProps } from './Field.interface';
import { FieldType, ofType } from '../Schema.interface';

const mockSetActiveType: jest.Mock<void, [string]> = jest.fn();

const sampleFieldProps: FieldProps = {
  name: 'fieldName',
  args: [
    {
      name: 'arg1',
      type: {
        name: 'String',
        kind: 'SCALAR',
        description: '',
        fields: null,
        enumValues: null,
        interfaces: null,
        possibleTypes: null,
      },
    },
    {
      name: 'arg2',
      type: {
        name: 'Int',
        kind: 'SCALAR',
        description: '',
        fields: null,
        enumValues: null,
        interfaces: null,
        possibleTypes: null,
      },
    },
  ],
  type: { kind: 'SCALAR', name: 'String' },
  description: 'Field description',
  setActiveType: mockSetActiveType,
};

describe('Field component', () => {
  it('renders with correct content and calls setActiveType on type link click', () => {
    render(<Field {...sampleFieldProps} />);

    expect(screen.getByTestId('field-fieldName')).toBeTruthy();
    expect(screen.getByText('arg1:')).toBeTruthy();
    expect(screen.getByText('arg2:')).toBeTruthy();

    waitFor(() => {
      fireEvent.click(screen.getByTestId('field-fieldName'));
      expect(sampleFieldProps.setActiveType).toHaveBeenCalledWith('String');
    });

    expect(screen.getByText('Field description')).toBeTruthy();

    waitFor(() => {
      fireEvent.click(screen.getByText('String'));
      expect(sampleFieldProps.setActiveType).toHaveBeenCalledWith('String');
    });
  });

  it('renders without arguments when args is an empty array', () => {
    const propsWithoutArgs = { ...sampleFieldProps, args: [] };
    render(<Field {...propsWithoutArgs} />);

    expect(screen.queryByText('arg1:')).toBeNull();
    expect(screen.queryByText('arg2:')).toBeNull();
  });
});

describe('getTypeName function', () => {
  it('renders a link for SCALAR type and calls setActiveType on link click', () => {
    const type: FieldType = { kind: 'SCALAR', name: 'String' };

    render(getTypeName(type, mockSetActiveType));

    waitFor(() => {
      fireEvent.click(screen.getByText('String'));
      expect(mockSetActiveType).toHaveBeenCalledWith('String');
    });
  });

  it('renders a link for LIST type and calls setActiveType on link click', () => {
    const type: FieldType = {
      kind: 'LIST',
      ofType: { kind: 'SCALAR', name: 'Int' },
      name: '',
    };

    render(getTypeName(type, mockSetActiveType));

    waitFor(() => {
      fireEvent.click(screen.getByText('Int'));
      expect(mockSetActiveType).toHaveBeenCalledWith('Int');
    });
  });

  it('renders a link for NON_NULL LIST type and calls setActiveType on link click', () => {
    const type: FieldType = {
      kind: 'NON_NULL',
      ofType: {
        kind: 'LIST',
        ofType: { kind: 'SCALAR', name: 'Boolean' },
      } as ofType,
      name: '',
    };

    render(getTypeName(type, mockSetActiveType));

    waitFor(() => {
      fireEvent.click(screen.getByText('Boolean'));
      expect(mockSetActiveType).toHaveBeenCalledWith('Boolean');
    });
  });

  it('renders correctly for other types', () => {
    const type: FieldType = { kind: 'OTHER', name: 'CustomType' };

    render(getTypeName(type, mockSetActiveType));

    expect(screen.getByText('CustomType')).toBeTruthy();
  });

  it('renders a link for NON_NULL type and calls setActiveType on link click', () => {
    const type: FieldType = {
      kind: 'NON_NULL',
      ofType: { kind: 'SCALAR', name: 'ID' },
      name: '',
    };

    render(getTypeName(type, mockSetActiveType));

    waitFor(() => {
      fireEvent.click(screen.getByText('ID'));
      expect(mockSetActiveType).toHaveBeenCalledWith('ID');
    });
  });

  it('renders a link for NON_NULL LIST type with additional symbols and calls setActiveType on link click', () => {
    const type: FieldType = {
      kind: 'NON_NULL',
      ofType: {
        kind: 'LIST',
        ofType: { kind: 'SCALAR', name: 'Float' },
        name: '',
      },
      name: '',
    };

    render(getTypeName(type, mockSetActiveType, '!!'));

    waitFor(() => {
      fireEvent.click(screen.getByText('Float'));
      expect(mockSetActiveType).toHaveBeenCalledWith('Float');
    });
  });
});
