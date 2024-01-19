import { setEditorValue } from '@src/store/playgroundSlice/playgroundSlice';
import { Dispatch } from 'react';
import prettifyEditorValue from './prettifyEditorValue';

const mockDispatch: Dispatch<ReturnType<typeof setEditorValue>> = jest.fn();

beforeEach(() => {
  jest.spyOn(
    require('@src/store/playgroundSlice/playgroundSlice'),
    'setEditorValue'
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('prettifyEditorValue function', () => {
  it('should format the value correctly', () => {
    const inputValue = `
      query {
        name
        age
      }
    `;

    const expectedOutput = /query\s*{\s*name\s*age\s*}/;

    prettifyEditorValue(inputValue, mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'playground/setEditorValue',
      payload: expect.stringMatching(expectedOutput),
    });
  });

  it('should handle brackets and indentation correctly', () => {
    const inputValue = `
      query {
        name {
          first
          last
        }
        age
      }
    `;

    const expectedOutput = /query\s*{\s*name\s*{\s*first\s*last\s*}\s*age\s*}/;

    prettifyEditorValue(inputValue, mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'playground/setEditorValue',
      payload: expect.stringMatching(expectedOutput),
    });
  });
});
