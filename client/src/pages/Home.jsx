import React from 'react';
import {ImageSlider} from '../components';

const Home = () => {
  return (
    <div className='w-full h-auto md:h-screen mt-16 md:mt-0 bg-white flex justify-center items-center md:p-1 md:p-0'>

        <div className='w-11/12 md:h-5/6 border bg-white dark:bg-slate-800 rounded-lg drop-shadow-xl overflow-hidden flex flex-col-reverse md:flex-row pb-5 mb-5 md:pb-0 md:mb-0'>

                <div className='w-full md:w-1/4 h-full flex justify-center items-center flex-col md:p-2'>
                  <h1 className='text-center font-extrabold text-xl uppercase tracking-wide'>feel the nature 
                   <span className='text-2xl ml-1'>. . .</span>
                  </h1>

                  <p className='uppercase font-extrabold tracking-wider'>the jayeon <sup>🅡</sup> soju</p>
              
                  

                  <p className='text-gray-600 tracking-wide p-1 my-3 text-center text-gray-900'>The luck is gone, the brain is shot, but the soju we still got
                  </p>

                  <button className='bg-blue-600 text-white capitalize hover:drop-shadow-2xl py-2 px-3 rounded-lg'>meet your new spirit</button>
                </div>
            
              <ImageSlider />
              
           </div>
      </div>
  )
}

export default Home