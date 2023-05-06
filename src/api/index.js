import API_ENDPOINT from '../config/api-endpoint';
import { sendRequest } from '../config/secureFetch';
import { appConstants } from '../appConstants';

const { API_END_POINT } = appConstants;

console.log(API_END_POINT);

// Function to get Stock numbers of users
export const getStockUsers = async () => {
  const { getUsersApiEndpoint } = API_ENDPOINT;

  let responseData = {};

  const apiUrl = API_ENDPOINT.setQueryParams(getUsersApiEndpoint);

  const config = {
    endpoint: apiUrl
  };

  console.log('test');
  try {
    responseData = await sendRequest('get', config.endpoint);
    console.warn('api-endpoint', config);
    console.warn('getPlaceholderUsers func success', responseData);
  } catch (error) {
    console.error('getPlaceholderUsers func error', error);
    console.error(error);
    responseData = error;
  }

  return responseData;
};
