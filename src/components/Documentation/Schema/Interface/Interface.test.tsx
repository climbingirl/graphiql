import { render, screen, fireEvent } from '@testing-library/react';
import Interface from './Interface';

const mockSetActiveType = jest.fn();

const sampleInterfaceProps = {
  name: 'InterfaceName',
  setActiveType: mockSetActiveType,
};

describe('Interface component', () => {
  it('renders with correct content and calls setActiveType on click', () => {
    render(<Interface {...sampleInterfaceProps} />);

    const interfaceLink = screen.getByText('InterfaceName');
    expect(interfaceLink).toBeTruthy();

    fireEvent.click(interfaceLink);

    expect(mockSetActiveType).toHaveBeenCalledWith('InterfaceName');
  });
});
