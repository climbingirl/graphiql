import { RootState } from '../store';
import {
  editorValueSelector,
  responseDataSelector,
  loadingStatusSelector,
  graphiqlApiUrlSelector,
  apiSchemaSelector,
  invalidApiSelector,
  headersSelector,
  variablesSelector,
} from './playgroundSelectors';

describe('Selectors', () => {
  const initialState: RootState = {
    playground: {
      editorValue: 'test editor value',
      responseData: { key: 'value' },
      isLoading: true,
      graphiqlApiUrl: 'test graphiql api url',
      apiSchema: { key1: 'value1' },
      invalidApi: true,
      headers: 'Content-Type',
      variables: 'value',
      isDocsExists: false,
    },
  };

  it('should select editorValue from state', () => {
    const selectedValue = editorValueSelector(initialState);
    expect(selectedValue).toEqual('test editor value');
  });

  it('should select responseData from state', () => {
    const selectedValue = responseDataSelector(initialState);
    expect(selectedValue).toEqual({ key: 'value' });
  });

  it('should select loadingStatus from state', () => {
    const selectedValue = loadingStatusSelector(initialState);
    expect(selectedValue).toEqual(true);
  });

  it('should select apiSchema from state', () => {
    const selectedValue = apiSchemaSelector(initialState);
    expect(selectedValue).toEqual({ key1: 'value1' });
  });

  it('should select invalidApi from state', () => {
    const selectedValue = invalidApiSelector(initialState);
    expect(selectedValue).toEqual(true);
  });

  it('should select graphiqlApiUrl from state', () => {
    const selectedValue = graphiqlApiUrlSelector(initialState);
    expect(selectedValue).toEqual('test graphiql api url');
  });

  it('should select headers from state', () => {
    const selectedValue = headersSelector(initialState);
    expect(selectedValue).toEqual('Content-Type');
  });

  it('should select variables from state', () => {
    const selectedValue = variablesSelector(initialState);
    expect(selectedValue).toEqual('value');
  });
});
