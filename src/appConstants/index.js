export const appConstants = {
  API_END_POINT: `${process.env.REACT_APP_API_END_POINT_TEST}`,
  API_KEY: `${process.env.REACT_APP_API_KEY}`,
  apiConst: {
    statusOk: 200,
    statusMultiChoice: 300,
    statusError: 400,
    internalServerError: 500,
    notFound: 404,
    unauthorized: 401,
    forbidden: 403
  },
  QUERY_STRING: {
    PAGE: '_page',
    LIMIT: '_limit',
    QUERY: 'q',
    SORT: '_sort',
    ORDER: '_order'
  }
};
