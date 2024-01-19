import axios from 'axios';
import axiosRequest from '../../axios/axiosRequest';

const graphiqlApi = {
  baseQuery: async ({
    url,
    data,
    headers,
    variables,
  }: {
    url: string;
    data: string;
    headers?: object;
    variables?: object;
  }) => {
    try {
      const result = axiosRequest({
        url: url,
        method: 'post',
        data: JSON.stringify({
          query: data,
          variables: variables,
        }),
        headers: headers,
      });
      return (await result).data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return err.response?.data;
      }
    }
  },
};

export default graphiqlApi;
