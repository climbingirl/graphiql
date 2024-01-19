import { createAsyncThunk } from '@reduxjs/toolkit';
import graphiqlApi from '../../services/graphiqlApi/graphiqlApi';
import { RootState } from '../store';
import {
  GraphQLSchema,
  buildClientSchema,
  getIntrospectionQuery,
} from 'graphql';

export const getGraphiqlData = createAsyncThunk<
  object,
  null,
  { state: RootState }
>('playground/getGraphiqlData', async (_arg, { getState }) => {
  const state = getState();
  let headers;
  let variables;

  try {
    const variblesValue = state.playground.variables.trim();
    if (variblesValue) {
      variables = JSON.parse(variblesValue);
    }
  } catch (error) {
    if (error instanceof Error)
      return { 'Variables are invalid JSON': error.message };
  }

  try {
    const hesdersValue = state.playground.headers.trim();
    if (hesdersValue) {
      headers = JSON.parse(hesdersValue);
    }
  } catch (error) {
    if (error instanceof Error)
      return { 'Headers are invalid JSON': error.message };
  }

  try {
    const response = await graphiqlApi.baseQuery({
      url: state.playground.graphiqlApiUrl,
      data: state.playground.editorValue,
      headers: headers,
      variables: variables,
    });
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return { 'Graphiql API request failed': error.message };
    }
  }
});

export const getApiShema = createAsyncThunk<GraphQLSchema, string>(
  'playground/getApiShema',
  async (url) => {
    const response = await graphiqlApi.baseQuery({
      url: url,
      data: getIntrospectionQuery(),
    });
    return buildClientSchema(await response.data);
  }
);
