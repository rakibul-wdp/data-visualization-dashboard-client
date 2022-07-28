import { useEffect, useState } from 'react';

const useCharts = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch('https://limitless-river-80013.herokuapp.com/chart')
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);
  return charts;
};

export default useCharts;
