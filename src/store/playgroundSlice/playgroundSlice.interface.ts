export interface PlaygroundState {
  editorValue: string;
  graphiqlApiUrl: string;
  isLoading: boolean;
  responseData: object | null;
  apiSchema: object | undefined;
  invalidApi: boolean;
  headers: string;
  variables: string;
  isDocsExists: boolean;
}
