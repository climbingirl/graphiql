import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './instance';
import requestInstance from './axiosRequest';

const mock = new MockAdapter(axiosInstance);

describe('Request instance', () => {
  afterEach(() => {
    mock.reset();
  });

  it('should return the correct AxiosInstance', () => {
    const instance = requestInstance;

    expect(instance).toBe(axiosInstance);
  });

  it('should make a successful GET request using the instance', async () => {
    const url = '/example-url';
    const responseData = { message: 'Success' };
    mock.onGet(url).reply(200, responseData);

    const response = await requestInstance.get(url);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });
});
