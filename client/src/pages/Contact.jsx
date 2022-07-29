import React from 'react';
import {contactData} from '../data/data';


const Contact = () => {
  return (
    <div className='w-full mt-16 md:mt-5 bg-white flex justify-center p-2 md:p-0'>

        <div className='w-11/12 md:w-5/6 border bg-white dark:bg-slate-800 rounded-lg drop-shadow-xl overflow-hidden p-2'>
                <h1 className='capitalize text-5xl text-center my-3'>get in touch</h1>

                <p className='w-10/12 m-auto italic p-3 text-gray-500 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, voluptatem molestias. Dolores aliquam minima repellendus?</p>

                <div className="flex flex-col  md:flex-row justify-around items-center mt-4 md:mt-0 pb-3 mb-3">
                    {contactData.map(data=>(
                    <div key={data.id} className='my-2 md:my-0'>
                    <div className='text-4xl p-2 flex justify-center items-center'>
                        {data.icon}
                    </div>
                    <h3 className='text-center text-slate-500 my-4 uppercase tracking-widest font-bold'>{data.name}</h3>

                    <p className='text-justify'>
                            {data.desc}
                            </p>
                    </div>
                    ))}
                    </div>        

        </div>
      </div>
  )
}

export default Contact