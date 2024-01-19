import { RootState } from '../store';
import playgroundReducer, {
  setEditorValue,
  setGraphiqlApiUrl,
  setHeaders,
  setVariables,
} from './playgroundSlice';
import { getGraphiqlData, getApiShema } from './playgroundThunks';
import { buildSchema } from 'graphql';

describe('playgroundSlice', () => {
  const initialState: RootState['playground'] = {
    editorValue: '',
    graphiqlApiUrl: '',
    isLoading: false,
    responseData: null,
    apiSchema: undefined,
    invalidApi: false,
    headers: '',
    variables: '',
    isDocsExists: false,
  };

  it('should handle setEditorValue', () => {
    const nextState = playgroundReducer(
      initialState,
      setEditorValue('new editor value')
    );
    expect(nextState.editorValue).toEqual('new editor value');
    expect(nextState.isDocsExists).toEqual(initialState.isDocsExists);
  });

  it('should handle setGraphiqlApiUrl', () => {
    const nextState = playgroundReducer(
      initialState,
      setGraphiqlApiUrl('new api url')
    );
    expect(nextState.graphiqlApiUrl).toEqual('new api url');
    expect(nextState.responseData).toBeNull();
    expect(nextState.apiSchema).toBeUndefined();
    expect(nextState.invalidApi).toBeFalsy();
    expect(nextState.isDocsExists).toEqual(initialState.isDocsExists);
  });

  it('should handle setHeaders', () => {
    const nextState = playgroundReducer(
      initialState,
      setHeaders('new headers')
    );
    expect(nextState.headers).toEqual('new headers');
    expect(nextState.isDocsExists).toEqual(initialState.isDocsExists);
  });

  it('should handle setVariables', () => {
    const nextState = playgroundReducer(
      initialState,
      setVariables('new variables')
    );
    expect(nextState.variables).toEqual('new variables');
    expect(nextState.isDocsExists).toEqual(initialState.isDocsExists);
  });

  it('should handle getGraphiqlData.pending', () => {
    const nextState = playgroundReducer(initialState, getGraphiqlData.pending);
    expect(nextState.isLoading).toBeTruthy();
    expect(nextState.isDocsExists).toEqual(initialState.isDocsExists);
  });

  it('should handle getGraphiqlData.fulfilled', () => {
    const payload: {
      key: string;
      someOtherKey: string;
    } = {
      key: 'value',
      someOtherKey: 'someOtherValue',
    };

    const nextState = playgroundReducer(
      initialState,
      getGraphiqlData.fulfilled(payload, 'requestId', null, 'arg')
    );

    expect(nextState.isLoading).toBeFalsy();
    expect(nextState.responseData).toEqual(payload);
  });

  it('should handle getApiShema.fulfilled', () => {
    const testSchema = buildSchema(`
      type Post {
        id: ID!
        title: String!
        content: String!
      }

      type Query {
        posts: [Post]
        post(id: ID!): Post
      }

      type Mutation {
        createPost(title: String!, content: String!): Post
        updatePost(id: ID!, title: String, content: String): Post
        deletePost(id: ID!): Post
      }
    `);

    const nextState = playgroundReducer(
      initialState,
      getApiShema.fulfilled(testSchema, 'requestId', 'null', 'arg')
    );

    expect(nextState.apiSchema).toEqual(testSchema);
    expect(nextState.invalidApi).toBeFalsy();
    expect(nextState.isDocsExists).toBeTruthy();
  });

  it('should handle getApiShema.rejected', () => {
    const nextState = playgroundReducer(initialState, getApiShema.rejected);
    expect(nextState.apiSchema).toBeUndefined();
    expect(nextState.invalidApi).toBeTruthy();
    expect(nextState.isDocsExists).toBeFalsy();
  });
});
