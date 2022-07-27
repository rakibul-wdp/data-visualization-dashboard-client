import React from 'react';
import BarChart from './BarChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';

const Dashboard = () => {
  return (
    <div>
      <BarChart />
      <HorizontalBarChart />
      <LineChart />
    </div>
  );
};

export default Dashboard;
