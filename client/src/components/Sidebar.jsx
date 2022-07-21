import React from 'react';
import { navLink } from '../data/data';
import { Link,NavLink } from 'react-router-dom';

const Sidebar = () => {
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md dark:text-gray-200 hover:bg-gray-500 hover:text-white dark:hover:text-black hover:bg-light-gray m-2b capitalize';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-gray-500 hover:text-white dark:hover:text-black hover:bg-light-gray m-2b capitalize';

  return (
    <div className='w-60 h-screen bg-white drop-shadow-xl'>
      <div className='flex justify-between p-2'>
        <h1>Sidebar</h1>
        <button>Close</button>
      </div>

      <div className='flex flex-col p-2 gap-2'>
        {navLink.map((link,ind)=>(
            <NavLink key={ind} to={`/${link.name}`} 
            style={({isActive})=>({backgroundColor:isActive && '#003865'})}
            className={({isActive})=>isActive ? activeLink:normalLink}>{link.name}</NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar