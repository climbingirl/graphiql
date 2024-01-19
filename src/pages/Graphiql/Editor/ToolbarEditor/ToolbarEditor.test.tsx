import { render, screen } from '@testing-library/react';
import ToolbarEditor from './ToolbarEditor';

describe('ToolbarEditor component', () => {
  it('renders without errors', () => {
    render(<ToolbarEditor value="" onChange={() => {}} />);
    expect(screen.getByTestId('toolbar-editor')).toBeTruthy();
  });
});
