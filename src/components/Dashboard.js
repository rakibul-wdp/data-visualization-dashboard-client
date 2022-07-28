import React from 'react';
import BarChart from './BarChart';
import PolarAreaChart from './PolarAreaChart';
import Doughnut from './DoughnutChart';
import HorizontalBarChart from './HorizontalBarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import RadarChart from './RadarChart';
import VerticalLineChart from './VerticalLineChart';

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
      <PolarAreaChart />
      <RadarChart />
      <VerticalLineChart />
    </div>
  );
};

export default Dashboard;
