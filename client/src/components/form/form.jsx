  import React,{useState} from 'react';
  import Mass from './Mass';
  import Ninche from './Ninche';
  import { useStateContext } from '../../context/Context';



  const Form = () => {

    const {liquorType,setMode} = useStateContext();

    return (
      <div className='w-full bg-white flex justify-center items-center'>

        <div className='w-full md:w-5/6 border bg-white dark:bg-slate-800 rounded-lg drop-shadow-xl overflow-hidden'>

      <div className='w-full mb-4 p-2 bg-gray-300'>
          <h1 className='text-xl font-semibold tracking-wide text-center'>Add Customer Order Data</h1>

             <div className='flex gap-2'>
              <div className=''>
              <input type="radio" name='liquor' id='mass' 
              onChange={setMode}
              value='mass' />
              <label htmlFor="mass" className='ml-2'>Mass</label>
              </div>
              <div>
                <input type="radio" name='liquor' id='ninche' 
                onChange={setMode}
                value='ninche' />
                <label htmlFor="ninche" className='ml-2'>Ninche</label>
              </div>
             </div>
          </div>

          {liquorType === 'mass' ? <Mass/>:<Ninche/>}
        
        </div>
      </div>
    )
  }

  export default Form;