import { useState, useEffect } from 'react';
import { getStock, getStockUsers } from '../../api';
import { appConstants } from '../../appConstants';

const Home = () => {
  const {
    apiConst: { statusOk }
  } = appConstants;
  const [stock, setStock] = useState();
  const [stockAA, setStockAA] = useState();
  const [loader, setLoader] = useState(false);

  const getStockData = async () => {
    try {
      setLoader(true);
      const response = await getStock();
      // console.log(response);
      if (!response.ok) throw new Error(`${response.status} Problem with getting data`);
      const data = await response.json();
      // console.log('data', data);

      setStock(data);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      console.error(`${err.message} 💥`);
    }
  };

  const fetchStockData = async () => {
    setLoader(true);

    const response = await getStockUsers();
    console.log('tessss', response);
    console.log('tesssstest', response.status);

    setStockAA(response);
    if (response && response.message === statusOk) {
      console.log('tessss');
    }

    setLoader(false);
  };

  useEffect(() => {
    getStockData();
    fetchStockData();
    // setStock('hi');
  }, []);

  console.log('stock', stock);
  console.log('stockAA', stockAA);
  return <>Home {loader && <h2 style={{ color: 'red' }}>loading....</h2>}</>;
};

export default Home;
