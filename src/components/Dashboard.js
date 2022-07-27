import React from 'react';
import useCharts from '../hooks/useCharts';

const Dashboard = () => {
  const [charts] = useCharts();
  console.log(charts);
  return (
    <div>
      <h2>This is dashboard here.</h2>
    </div>
  );
};

export default Dashboard;
