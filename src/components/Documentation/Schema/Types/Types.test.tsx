import { render, screen, fireEvent } from '@testing-library/react';
import Types from './Types';

const sampleTypes = [
  { name: 'Type1', description: 'Description1', kind: 'OBJECT' },
  { name: 'Type2', description: 'Description2', kind: 'OBJECT' },
  { name: '_InternalType', description: 'Internal Type', kind: 'OBJECT' },
  { name: 'Query', description: 'Query Type', kind: 'OBJECT' },
];

const mockSetActiveType = jest.fn();

const sampleTypesProps = {
  types: sampleTypes,
  setActiveType: mockSetActiveType,
};

describe('Types component', () => {
  it('renders with correct types and calls setActiveType on click', () => {
    render(<Types {...sampleTypesProps} />);

    for (const type of sampleTypes) {
      if (!type.name.startsWith('_') && type.name !== 'Query') {
        const typeLink = screen.getByText(type.name);
        expect(typeLink).toBeTruthy();

        fireEvent.click(typeLink);

        expect(mockSetActiveType).toHaveBeenCalledWith(type.name);
      }
    }
  });

  it('does not render internal types and Query type', () => {
    render(<Types {...sampleTypesProps} />);

    const internalTypeLink = screen.queryByText('_InternalType');
    const queryTypeLink = screen.queryByText('Query');

    expect(internalTypeLink).toBeNull();
    expect(queryTypeLink).toBeNull();
  });
});
