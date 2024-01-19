import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import Schema from './Schema';
import { SchemaData, Type, QueryType } from './Schema.interface';

jest.mock('../../../hooks/useLocalization', () => ({
  useLocalization: jest.fn(() => ({
    localizationData: {
      documentationSchema: {
        rootTypesTitle: 'Root Types',
        allTypesTitle: 'All Types',
        implementsTitle: 'Implements',
        enumValuesTitle: 'Enum Values',
        fieldsTitle: 'Fields',
        implementationsTitle: 'Implementations',
        docs: 'Docs',
        noDescription: 'No description available',
      },
    },
  })),
}));

const mockType: Type = {
  name: 'MockType',
  description: 'This is a mock type.',
  interfaces: [{ name: 'MockInterface', kind: 'Mock' }],
  enumValues: [
    {
      name: 'ENUM_VALUE_1',
      deprecationReason: '',
      description: '',
      isDeprecated: true,
    },
    {
      name: 'ENUM_VALUE_2',
      deprecationReason: '',
      description: '',
      isDeprecated: true,
    },
  ],
  fields: [
    {
      name: 'field1',
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
      ],
      type: {
        name: 'String',
        kind: 'SCALAR',
      },
      description: 'This is a mock field.',
    },
  ],
  kind: '',
  possibleTypes: null,
};

const mockQueryType: QueryType = {
  name: 'Query',
};

const mockSchemaData: SchemaData = {
  data: {
    __schema: {
      types: [mockType],
      queryType: mockQueryType,
    },
  },
};

describe('Schema component', () => {
  it('renders root types correctly', () => {
    render(<Schema data={mockSchemaData.data} />);
    expect(screen.getByText('Root Types')).toBeTruthy();
    expect(screen.getByText('Query')).toBeTruthy();
  });

  it('renders type details correctly when there are no enum values and fields', () => {
    const mockTypeWithoutEnumAndFields: Type = {
      name: 'MockTypeWithoutEnumAndFields',
      description: 'This is another mock type.',
      interfaces: [{ name: 'MockInterface', kind: 'Mock' }],
      enumValues: null,
      fields: null,
      kind: '',
      possibleTypes: null,
    };

    const mockSchemaDataWithoutEnumAndFields: SchemaData = {
      data: {
        __schema: {
          types: [mockTypeWithoutEnumAndFields],
          queryType: mockQueryType,
        },
      },
    };

    render(<Schema data={mockSchemaDataWithoutEnumAndFields.data} />);

    waitFor(() => {
      fireEvent.click(screen.getByText('MockTypeWithoutEnumAndFields'));

      expect(screen.getByText('No Enum Values')).toBeTruthy();
      expect(screen.getByText('No Fields')).toBeTruthy();
    });
  });

  it('renders type details correctly when there are enum values', () => {
    render(<Schema data={mockSchemaData.data} />);

    waitFor(() => {
      fireEvent.click(screen.getByText('MockType'));

      expect(screen.getByText('ENUM_VALUE_1')).toBeTruthy();
      expect(screen.getByText('ENUM_VALUE_2')).toBeTruthy();
    });
  });

  it('renders type details correctly when there are fields', () => {
    render(<Schema data={mockSchemaData.data} />);

    waitFor(() => {
      fireEvent.click(screen.getByText('MockType'));

      expect(screen.getByText('field1')).toBeTruthy();
    });
  });

  it('renders nothing when schema or types are not available', () => {
    const mockSchemaDataWithoutTypes: SchemaData = {
      data: {
        __schema: {
          types: undefined,
          queryType: mockQueryType,
        },
      },
    };

    render(<Schema data={mockSchemaDataWithoutTypes.data} />);

    expect(screen.queryByText('Root Types')).toBeNull();
    expect(screen.queryByText('Query')).toBeNull();
  });

  it('renders nothing when types array is empty', () => {
    const mockSchemaDataEmptyTypes: SchemaData = {
      data: {
        __schema: {
          types: [],
          queryType: mockQueryType,
        },
      },
    };

    render(<Schema data={mockSchemaDataEmptyTypes.data} />);

    expect(screen.queryByText('Root Types')).toBeNull();
    expect(screen.queryByText('Query')).toBeNull();
  });

  it('updates activeTypeStack correctly when goBack is called', () => {
    render(<Schema data={mockSchemaData.data} />);

    act(() => {
      fireEvent.click(screen.getByText('MockType'));
    });

    act(() => {
      fireEvent.click(screen.getByTestId('go-back-button'));
    });

    expect(screen.queryByTestId('go-back-button')).toBeNull();
  });
});
