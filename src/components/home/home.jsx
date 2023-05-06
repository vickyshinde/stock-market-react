import { useState, useEffect } from 'react';
import { getStockUsers } from '../../api';
import { appConstants } from '../../appConstants';
import ErrorMessage from '../shared/apiError/apiError';

const Home = () => {
  const {
    apiConst: { statusOk }
  } = appConstants;
  const [stock, setStock] = useState();
  const [loader, setLoader] = useState(false);
  const [apiError, setApiError] = useState(null);

  const fetchStockData = async () => {
    setLoader(true);

    const response = await getStockUsers();

    if (response && response.statusCode === statusOk) {
      setApiError(null);
      console.log('users', response.data);
      console.log('statuscode', response.statusCode, '===', statusOk);
      setStock(response.data);
    } else {
      setApiError(response);
      console.log('response vicky', response);
    }

    setLoader(false);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  console.log('stock', stock);
  return (
    <>
      Home {apiError && <ErrorMessage statusCode={apiError.statusCode} message={apiError.message} />}
      {loader && <h2 style={{ color: 'red' }}>loading....</h2>}
    </>
  );
};

export default Home;
