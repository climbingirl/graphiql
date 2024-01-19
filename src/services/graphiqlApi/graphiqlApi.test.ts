import axiosRequest from '../../axios/axiosRequest';
import MockAdapter from 'axios-mock-adapter';
import graphiqlApi from './graphiqlApi';
import { waitFor } from '@testing-library/react';

const mockAxios = new MockAdapter(axiosRequest);

describe('graphiqlApi', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should make a successful baseQuery', async () => {
    mockAxios.onPost('/example-url').reply(200, { data: 'Mocked data' });

    const result = await graphiqlApi.baseQuery({
      url: '/example-url',
      data: 'example-query',
      variables: { key: 'value' },
      headers: { Authorization: 'Bearer token' },
    });

    waitFor(() => {
      expect(mockAxios.history.post.length).toBe(1);
      expect(result).toEqual({ data: 'Mocked data' });
    });
  });

  it('should handle a failed baseQuery', async () => {
    mockAxios
      .onPost('/example-url')
      .reply(500, { error: 'Internal Server Error' });

    const result = await graphiqlApi.baseQuery({
      url: '/example-url',
      data: 'example-query',
      variables: { key: 'value' },
      headers: { Authorization: 'Bearer token' },
    });

    waitFor(() => {
      expect(mockAxios.history.post.length).toBe(1);
      expect(result).toEqual({ error: 'Internal Server Error' });
    });
  });

  it('should handle different parameters', async () => {
    mockAxios.onPost('/different-url').reply(200, { data: 'Mocked data' });

    const result = await graphiqlApi.baseQuery({
      url: '/different-url',
      data: 'different-query',
      variables: { key: 'value' },
      headers: { Authorization: 'Bearer token' },
    });

    waitFor(() => {
      expect(mockAxios.history.post.length).toBe(1);
      expect(result).toEqual({ data: 'Mocked data' });
    });
  });
});
