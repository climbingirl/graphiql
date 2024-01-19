import { act, render, waitFor, screen } from '@testing-library/react';
import Documentation from './Documentation';

jest.mock('@src/services/graphiqlApi/graphiqlApi', () => ({
  baseQuery: jest.fn(),
}));

describe('Documentation component', () => {
  const mockData = {
    data: {
      __schema: {
        types: [
          {
            kind: 'OBJECT',
            name: 'Query',
            fields: [
              {
                name: 'exampleField',
                type: { name: 'String' },
              },
            ],
          },
        ],
      },
    },
  };

  it('renders without errors', async () => {
    const originalFetch = global.fetch;

    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    } as unknown as Response);

    act(() => {
      render(<Documentation url="some-url" />);
    });

    await waitFor(() => {
      expect(screen.findByText('exampleField')).toBeTruthy();
    });

    global.fetch = originalFetch;
  });
});
