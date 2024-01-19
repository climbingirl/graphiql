import { RootState } from '../store';

export const editorValueSelector = (state: RootState) =>
  state.playground.editorValue;

export const responseDataSelector = (state: RootState) =>
  state.playground.responseData;

export const loadingStatusSelector = (state: RootState) =>
  state.playground.isLoading;

export const graphiqlApiUrlSelector = (state: RootState) =>
  state.playground.graphiqlApiUrl;

export const apiSchemaSelector = (state: RootState) =>
  state.playground.apiSchema;

export const invalidApiSelector = (state: RootState) =>
  state.playground.invalidApi;

export const headersSelector = (state: RootState) => state.playground.headers;

export const variablesSelector = (state: RootState) =>
  state.playground.variables;
