import { useEffect, useState } from 'react';

const useCharts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/chart')
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return charts;
};

export default useCharts;
