import React from 'react';
import { navLink } from '../data/data';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import {logo} from '../assets';
import { useStateContext } from '../context/Context';
import { socialContact } from '../data/data';

const Sidebar = () => {
  const {closeSidebar,hideSideBar,closeSBwithNavLink} = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md dark:text-gray-200 hover:bg-gray-500 hover:text-white dark:hover:text-black hover:bg-light-gray m-2b capitalize';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 hover:bg-gray-500 hover:text-white dark:hover:text-black hover:bg-light-gray m-2b capitalize';

  return (
    <div className={`w-full bg-black/[0.6] fixed top-0 md:translate-x-0 z-50 md:relative md:w-3/12 h-full md:bg-white md:min-h-screen drop-shadow-2xl duration-150 ${hideSideBar}`} onClick={closeSBwithNavLink}>
      
    <div className='w-2/4 md:w-full h-full bg-white md:bg-transparent fixed top-0 drop-shadow-xl md:relative md:top-0' >
      <div className='flex justify-between items-center m-1 p-2'>
    <NavLink to='/'>
      <div className='flex items-center gap-3'>
      <div className='w-16 h-16 rounded-full flex justify-center items-center overflow-hidden'>
       <img src={logo} alt="" className='block w-full h-full object-contain drop-shadow-xl' />
      </div>
      <span className='hidden md:inline-block uppercase tracking-wider font-semibold'>waaneiza f
      <span className='lowercase'>n</span>
      B
      </span>
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

<article className='w-full p-2 flex justify-around items-center gap-3'>
      {
        socialContact.map(contact=>(
          <div key={contact.id} className='w-10 h-10 rounded-full flex justify-center items-center bg-white  hover:drop-shadow-4xl p-1'>
          <a href={contact.link} className='text-black-400 drop-shadow-3xl'>
          <span className='text-3xl p-2'>
            {contact.icon}
          </span>
        </a>
        </div>
        ))
      }

    </article>
      </div>

    
    </div>
    </div>
  )
}

export default Sidebar