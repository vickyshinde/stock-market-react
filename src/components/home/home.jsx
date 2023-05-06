import { useState, useEffect } from 'react';
import { getStockUsers } from '../../api';
import { appConstants } from '../../appConstants';

const Home = () => {
  const {
    apiConst: { statusOk }
  } = appConstants;
  const [stock, setStock] = useState();
  const [loader, setLoader] = useState(false);

  const fetchStockData = async () => {
    setLoader(true);

    const response = await getStockUsers();
    console.log('tessss', response);
    console.log('tesssstest', response.status);

    setStock(response);
    if (response && response.message === statusOk) {
      console.log('tessss');
    }

    setLoader(false);
  };

  useEffect(() => {
    fetchStockData();
    // setStock('hi');
  }, []);

  console.log('stock', stock);
  return <>Home {loader && <h2 style={{ color: 'red' }}>loading....</h2>}</>;
};

export default Home;
