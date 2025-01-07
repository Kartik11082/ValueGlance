import { useEffect, useState } from 'react';
import axios from 'axios';
import FinancialDataTable from './components/FinancialDataTable/FinancialDataTable';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const VITE_API_KEY = import.meta.env.VITE_API_KEY;
      console.log("VITE_API_KEY:", VITE_API_KEY);
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${VITE_API_KEY}`);
      console.log("Data:", response.data);
      setData(response.data);
    };
    fetchData();
  }, []);

  return <FinancialDataTable data={data} />;
};

export default App;
