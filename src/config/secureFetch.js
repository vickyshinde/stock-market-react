import { appConstants } from '../appConstants';

const {
  apiConst: { notFound, internalServerError, unauthorized, forbidden }
} = appConstants;

export const sendRequest = async (method, url, postData = null) => {
  let responseData = {};

  // Define the request options
  const requestOptions = {
    method,
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: postData
  };

  // Send the request and handle the response
  try {
    const response = await fetch(url, requestOptions);

    console.warn('sendRequest func success', response);

    const data = await response.json();

    responseData = { data, statusCode: response.status };

    console.warn('sendRequest func json()', responseData);

    if (!response.ok) {
      const getMsg = (errorCode) => {
        switch (errorCode) {
          case notFound:
            return {
              message: 'page not found vicky',
              statusCode: errorCode,
              response
            };
          case internalServerError:
            return {
              message: 'Internal server error',
              statusCode: errorCode,
              response
            };
          case unauthorized:
            return {
              message: 'unauthorized',
              statusCode: errorCode,
              response
            };
          case forbidden:
            return {
              message: 'forbidden',
              statusCode: errorCode,
              response
            };
          default:
            return {
              message: 'Some went wrong',
              statusCode: errorCode,
              response
            };
        }
      };
      throw getMsg(response.status);
    }
  } catch (error) {
    console.error('sendRequest func error', error);
    throw error;
  }

  return responseData;
};
