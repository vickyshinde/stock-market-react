import { appConstants } from '../appConstants';

const { API_END_POINT } = appConstants;

export const sendRequest = async (method, url, data = null) => {
  let responseData = {};
  // let isError;

  // Define the request options
  const requestOptions = {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: data
  };

  // Send the request and handle the response
  try {
    const response = await fetch(url, requestOptions);

    console.log('sendRequest func success', response);

    responseData = await response.json();

    console.log('sendRequest func json()', responseData);

    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
      throw {
        statusCode: response.status,
        response
      };
    }
  } catch (error) {
    console.log('sendRequest func error', error);
    // isError = console.error();
    throw error;
  }

  return responseData;
};

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
