import { appConstants } from '../appConstants';

const { API_END_POINT } = appConstants;

const API_ENDPOINT = {
  getUsersApiEndpoint: `${API_END_POINT}/users`,

  setQueryParams(url, params) {
    if (params) {
      const paramArr = Object.keys(params).map((key) => `${key}=${params[key]}`);
      const queryParams = paramArr.join('&');

      if (url.indexOf('?') === -1) {
        return `${url}?${queryParams}`;
      }
      return `${url}&${queryParams}`;
    }
    return url;
  }
};

export default API_ENDPOINT;
