import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader component', () => {
  describe('Loader component', () => {
    it('renders Loader component correctly', () => {
      const { getByTestId } = render(<Loader />);

      expect(getByTestId('loader-container')).toBeTruthy();
      expect(getByTestId('loader')).toBeTruthy();
    });
  });
});
