import React from 'react';
import { navLink } from '../data/data';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../context/Context';

const Sidebar = () => {
  const {closeSidebar,hideSideBar,closeSBwithNavLink} = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md dark:text-gray-200 hover:bg-gray-500 hover:text-white dark:hover:text-black hover:bg-light-gray m-2b capitalize';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-gray-500 hover:text-white dark:hover:text-black hover:bg-light-gray m-2b capitalize';

  return (
    <div className={`w-full bg-black/[0.6] fixed top-0 md:translate-x-0 z-10 md:relative md:w-3/12 h-full md:bg-white md:min-h-screen drop-shadow-2xl duration-150 ${hideSideBar}`} onClick={closeSBwithNavLink}>
    <div className='w-2/4 md:w-full h-full bg-white md:bg-transparent fixed top-0 drop-shadow-xl md:relative md:top-0' >
      <div className='flex justify-between items-center m-1 p-2'>

    <NavLink to='/'>
      <div className='flex justify-center items-center'>
       <img src="http://www.waaneiza.com/img/Waa-Logo-Fin-png-2.png" alt="" className='block w-16 h-16 object-contain drop-shadow-xl' />
   
      </div>
       </NavLink>
        <button 
        onClick={closeSidebar}
        className='md:hidden text-3xl bg-white hover:drop-shadow-xl rounded-full p-1 hover:text-red-600 font-bold'>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <div className='flex flex-col p-2 gap-2'>
        {navLink.map((link,ind)=>(
            <NavLink key={ind} to={`/${link.name}`} 
            onClick={closeSBwithNavLink}
            style={({isActive})=>({backgroundColor:isActive && '#003865'})}
            className={({isActive})=>isActive ? activeLink:normalLink}>{link.name}</NavLink>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Sidebar