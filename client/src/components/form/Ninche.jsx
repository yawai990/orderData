import React,{useState} from 'react';
import { addDataNinche } from '../../api';

const initState={
    shopName:'',
    phoneNumber:'',
    dark:'',
    blue:'',
    grape:'',
    pome:'',
    moji:'',
    pina:'',
    sot:'cash',
    date:'',
    address:''
  };

const Ninche = () => {
    const [nincheData,SetNincheData] = useState(initState);

    const handleSubmit =async (e)=>{
        e.preventDefault();

       await addDataNinche(nincheData)

      await  clear()
    }

    const clear =()=>{
        SetNincheData(initState)
    }
  return (
    <form onSubmit={handleSubmit}>

          <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">
      <div className='flex items-center gap-2'>
        <label htmlFor="name" className='w-32 font-semibold tracking-wide'>ShopName :</label>
        <input type="text" name='name' id='name' 
        value={nincheData.shopName}
        onChange={e=>SetNincheData({...nincheData,shopName:e.target.value})}
        className='border border-gray-500 rounded-lg p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:border-b-2 focus:shadow-lg focus:shadow-gray-300' />
      </div>
    
      <div className='flex items-center gap-2'>
        <label htmlFor="number" className='w-32 font-semibold tracking-wide'>Phone :</label>
        <input type="number" name='number' id='number' min={0} minLength={11} maxLength={12}
        value={nincheData.phoneNumber}
        onChange={e=>SetNincheData({...nincheData,phoneNumber:e.target.value})}
        className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
      </div>
    
      <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">

      <div className='flex items-center gap-3'>
        <label htmlFor="blue" className='w-32 font-semibold tracking-wide capitalize'>Blue
        <span className='lowercase'>(bots) :</span>
        </label>
        <input type="number" name='blue' id='blue' min={0}
        value={nincheData.blue}
        onChange={e=>SetNincheData({...nincheData,blue:e.target.value})}
        className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>

      <div className='flex items-center gap-2'>
        <label htmlFor="dark" className='w-32 font-semibold tracking-wide capitalize'>Dark
        <span className='lowercase'>(bots) :</span>
        </label>
        <input type="number" name='dark' id='dark' min={0}
                  value={nincheData.dark}
                  onChange={e=>SetNincheData({...nincheData,dark:e.target.value})}
                  className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
    
      </div>

      <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">

      <div className='flex items-center gap-3'>
        <label htmlFor="grape" className='w-32 font-semibold tracking-wide capitalize'>Grape
        <span className='lowercase'>(bots) :</span>
        </label>
        <input type="number" name='grape' id='grape' min={0}
        value={nincheData.grape}
        onChange={e=>SetNincheData({...nincheData,grape:e.target.value})}
        className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>

      <div className='flex items-center gap-2'>
        <label htmlFor="pome" className='w-32 font-semibold tracking-wide capitalize'>Pome
        <span className='lowercase'>(bots) :</span>
        </label>
        <input type="number" name='pome' id='pome' min={0}
                  value={nincheData.pome}
                  onChange={e=>SetNincheData({...nincheData,pome:e.target.value})}
                  className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
    
      </div>

      <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">

        <div className='flex items-center gap-3'>
        <label htmlFor="moji" className='w-32 font-semibold tracking-wide capitalize'>Moji
        <span className='lowercase'>(bots) :</span>
        </label>
        <input type="number" name='moji' id='moji' min={0}
        value={nincheData.moji}
        onChange={e=>SetNincheData({...nincheData,moji:e.target.value})}
        className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
        </div>

        <div className='flex items-center gap-2'>
        <label htmlFor="pina" className='w-32 font-semibold tracking-wide capitalize'>Pina
        <span className='lowercase'>(bots) :</span>
        </label>
        <input type="number" name='pina' id='pina' min={0}
                    value={nincheData.pina}
                    onChange={e=>SetNincheData({...nincheData,pina:e.target.value})}
                    className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
        </div>

        </div>

        <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">

        <div className='flex items-center gap-3'>
      <label htmlFor="st" className='w-36 font-semibold capitalize'>Sale Types :</label>
      <select name="st" id="st"
            value={nincheData.sot}
            onChange={e=>SetNincheData({...nincheData,sot:e.target.value})}
      className='w-40 text-lg border inline-block border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 capitalize focus:shadow-lg focus:shadow-gray-300' >
        <option className='text-lg capitalize' disabled>type of sale</option>
      <option value="cash" className='text-lg capitalize'>cash</option>
      <option value="credit" className='text-lg capitalize'>credit</option>
      <option value="consign" className='text-lg capitalize'>consignment</option>
      <option value="advance" className='text-lg capitalize'>Advanced</option>
      </select>
    </div>

        <div className='flex items-center gap-3'>
        <label htmlFor="address" className='w-32 font-semibold tracking-wide'>Address :</label>
        <input type="text" name='address' id='address'
        value={nincheData.address}
        onChange={e=>SetNincheData({...nincheData,address:e.target.value})}
        className='border flex-1 border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300' />
        </div>

        </div>

        <div className='w-2/4 ml-20 flex items-center gap-3'>
        <label htmlFor="date" className='w-32 capitalize font-semibold tracking-wide'>Date :</label>
        <input type="date" name='date' id='date'
        value={nincheData.date}
        onChange={e=>SetNincheData({...nincheData,date:e.target.value})} 
      pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
        className='w-40 text-lg border inline-block border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300' />
          </div>

          <div className='w-full flex justify-center items-center gap-3 mb-4'>
      <button className='w-40 py-1 bg-blue-600 rounded-lg text-white capitalize hover:drop-shadow-2xl hover:bg-blue-900 mt-3'>Back</button>
      <button className='w-40 py-1 bg-blue-600 rounded-lg text-white capitalize hover:drop-shadow-2xl hover:bg-blue-900 mt-3'>Add Data</button>
      </div>

    </form>
  )
}

export default Ninche