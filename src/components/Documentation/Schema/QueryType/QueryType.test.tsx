import { render, screen, fireEvent } from '@testing-library/react';
import QueryType from './QueryType';

const mockSetActiveType = jest.fn();

const sampleQueryTypeProps = {
  name: 'QueryTypeName',
  setActiveType: mockSetActiveType,
};

describe('QueryType component', () => {
  it('renders with correct content and calls setActiveType on click', () => {
    render(<QueryType {...sampleQueryTypeProps} />);

    const queryTypeParagraph = screen.getByTestId('queryType');

    expect(queryTypeParagraph).toBeTruthy();

    fireEvent.click(screen.getByText('QueryTypeName'));

    expect(mockSetActiveType).toHaveBeenCalledWith('QueryTypeName');
  });
});
