import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './instance';

describe('axiosInstance', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should have the correct Content-Type header', async () => {
    const expectedContentType = 'application/json';
    const url = '/example-url';
    mock.onGet(url).reply((config) => {
      if (config.headers) {
        expect(config.headers['Content-Type']).toBe(expectedContentType);
      } else {
        expect(config.headers).toBeDefined();
      }
      return [200];
    });

    await axiosInstance.get(url);
  });

  it('should make a successful GET request', async () => {
    const url = '/example-url';
    const responseData = { message: 'Success' };
    mock.onGet(url).reply(200, responseData);

    const response = await axiosInstance.get(url);

    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });
});
