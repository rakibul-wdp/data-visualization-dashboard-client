import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-primary px-40'>
      <label for='dashboard-drawer' class='btn btn-primary drawer-button lg:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          class='inline-block w-5 h-5 stroke-current'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </label>
      <div className='flex-1'>
        <Link to={'/'} className='btn btn-ghost normal-case text-xl'>
          Dashboard
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <div className='form-control'>
          <input type='text' placeholder='Search' className='input input-bordered' />
        </div>
        <div className='dropdown dropdown-end'>
          <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://placeimg.com/80/80/people' alt='' />
            </div>
          </label>
          <ul tabIndex='0' className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;