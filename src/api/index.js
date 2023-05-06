import API_ENDPOINT, { sendRequest } from '../config/api-endpoint';
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
    console.log('api-endpoint', config);
    console.log('getPlaceholderUsers func success', responseData);
  } catch (error) {
    console.log('getPlaceholderUsers func error', error);
    console.log(error);
  }

  return responseData;
};
