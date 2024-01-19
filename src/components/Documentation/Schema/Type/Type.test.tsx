import { render, screen } from '@testing-library/react';
import Type from './Type';

const sampleTypeProps = {
  name: 'TypeName',
  description: 'Type description',
};

describe('Type component', () => {
  it('renders with correct name and description', () => {
    render(<Type {...sampleTypeProps} />);

    const typeName = screen.getByText('TypeName');
    const typeDescription = screen.getByText('Type description');

    expect(typeName).toBeTruthy();
    expect(typeDescription).toBeTruthy();
  });
});
