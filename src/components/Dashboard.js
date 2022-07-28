import React from 'react';
import BarChart from './BarChart';
import Doughnut from './DoughnutChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Dashboard = () => {
  return (
    <div>
      <BarChart />
      <HorizontalBarChart />
      <LineChart />
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <Doughnut />
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
