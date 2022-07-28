import React from 'react';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import PolarAreaChart from './PolarAreaChart';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='px-64 mt-12 mb-20'>
      <h1 className='text-center font-bold text-3xl text-primary'>
        Data Visualization{' '}
        <Link to='/dashboard' className='link text-accent'>
          See All
        </Link>
      </h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <DoughnutChart />
        <PieChart />
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
        <LineChart />
        <PolarAreaChart />
      </div>
      <h1 className='text-center mt-10'>
        <Link to='/dashboard' className='btn btn-primary font-bold text-3xl link'>
          See All in Dashboard -&gt;
        </Link>
      </h1>
    </div>
  );
};

export default Home;
