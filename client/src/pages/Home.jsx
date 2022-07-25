import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-auto md:h-screen mt-16 md:mt-0 bg-white flex justify-center items-center md:p-1 md:p-0'>

        <div className='w-11/12 md:h-5/6 border bg-white dark:bg-slate-800 rounded-lg drop-shadow-xl overflow-hidden flex flex-col-reverse md:flex-row pb-5 mb-5 md:pb-0 md:mb-0'>

                <div className='w-full md:w-2/4 h-full flex justify-center items-center flex-col md:p-2'>
                  <h1 className='text-center font-bold text-3xl uppercase'>introducing the king of 
                    <br />champagne</h1>

                  <p className='my-3 text-center text-gray-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti aut maiores, officiis sit facilis quasi porro possimus impedit! Commodi, fugit.</p>

                  <button className='bg-red-400 py-2 px-3 rounded-lg'>meet your new spirit</button>
                </div>

            <div className='w-full h-96 md:h-full mb-3 md:mb-0 md:w-2/4 bg-blue-400'>
              <h2>I am photo side</h2>
              </div>        
        </div>
      </div>
  )
}

export default Home