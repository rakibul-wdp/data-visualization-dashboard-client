import React from 'react';
import Dashboard from './Dashboard';

const Drawer = () => {
  return (
    <div className='drawer drawer-mobile'>
      <input id='dashboard-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/*  Page content here  */}
        <h2 className='text-center font-bold text-3xl text-accent mt-10'>Charts</h2>
        <Dashboard />
      </div>
      <div className='drawer-side'>
        <label htmlFor='dashboard-drawer' className='drawer-overlay'></label>
        <ul className='menu pt-4 pb-4 overflow-y-auto w-80 bg-primary text-base-content px-40'>
          {/* Sidebar content here  */}
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Sidebar</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
