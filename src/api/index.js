import API_ENDPOINT, { sendRequest } from '../config/api-endpoint';
import { appConstants } from '../appConstants';

const { API_END_POINT } = appConstants;

console.log(API_END_POINT);
export const getStock = () => {
  // const url = `${API_END_POINT}?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${API_KEY}`;
  const url = `${API_END_POINT}/users`;
  console.log(url);
  return fetch(url);
};

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
