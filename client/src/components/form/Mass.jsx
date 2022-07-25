import React,{useState} from 'react';
import {addDataMass} from '../../api';

const initData ={
    shopName:'',
    phoneNumber:'',
    lglf14:'',
    spk14:'',
    gtw24:'',
    sot:'cash',
    date:'',
    address:''
  };

const Mass = () => {
    const [customerData,setCustomerData] = useState(initData);

    const handleSubmit = async (e)=>{
        e.preventDefault()
  
      await addDataMass(customerData)
      clear() 
      };
  
      const clear=()=>{
        setCustomerData(initData)
      }
  return (
    <form action="" onSubmit={handleSubmit} className="p-2">

    {/* shopname & phoneNumber */}
    <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">
      <div className='flex items-center gap-2'>
        <label htmlFor="name" className='w-32 font-semibold tracking-wide'>ShopName :</label>
        <input type="text" name='name' id='name' 
        value={customerData.shopName}
        onChange={e=>setCustomerData({...customerData,shopName:e.target.value})}
        className='border border-gray-500 rounded-lg p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:border-b-2 focus:shadow-lg focus:shadow-gray-300' />
      </div>
    
      <div className='flex items-center gap-2'>
        <label htmlFor="number" className='w-32 font-semibold tracking-wide'>Phone :</label>
        <input type="number" name='number' id='number' min={0} minLength={11} maxLength={12}
        value={customerData.phoneNumber}
        onChange={e=>setCustomerData({...customerData,phoneNumber:e.target.value})}
        className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
      </div>
    
      {/* lglf & spk */}
    <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">
    
      <div className='flex items-center gap-2'>
        <label htmlFor="lglf" className='w-32 font-semibold tracking-wide uppercase'>lglf-14
        <span className='lowercase'>(pks) :</span>
        </label>
        <input type="number" name='lglf' id='lglf' min={0}
                  value={customerData.lglf14}
                  onChange={e=>setCustomerData({...customerData,lglf14:e.target.value})}
                  className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
    
      <div className='flex items-center gap-3'>
        <label htmlFor="spk" className='w-32 font-semibold tracking-wide uppercase'>spk-14
        <span className='lowercase'>(pks) :</span>
        </label>
        <input type="number" name='spk' id='spk' min={0}
        value={customerData.spk14}
        onChange={e=>setCustomerData({...customerData,spk14:e.target.value})}
        className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
    
      </div>
    
    {/* gtw & addresss */}
    <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">
      <div className='flex items-center gap-3'>
        <label htmlFor="gtw" className='w-32 font-semibold tracking-wide uppercase'>gtw-24
        <span className='lowercase'>(pks) :</span>
        </label>
        <input type="number" name='gtw' id='gtw'
        value={customerData.gtw24}
        onChange={e=>setCustomerData({...customerData,gtw24:e.target.value})}
        min={0}   className='border border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300'/>
      </div>
      
        <div className='flex items-center gap-3'>
        <label htmlFor="address" className='w-32 font-semibold tracking-wide'>Address :</label>
        <input type="text" name='address' id='address'
        value={customerData.address}
        onChange={e=>setCustomerData({...customerData,address:e.target.value})}
        className='border flex-1 border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300' />
        </div>
      </div>
    
      <div className="w-full flex flex-wrap justify-around gap-2 md:mb-3 p-2">
    
    <div className='flex items-center gap-3'>
      <label htmlFor="st" className='w-36 font-semibold uppercase'>Sale Types :</label>
      <select name="st" id="st"
            value={customerData.sot}
            onChange={e=>setCustomerData({...customerData,sot:e.target.value})}
      className='w-40 text-lg border inline-block border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 capitalize focus:shadow-lg focus:shadow-gray-300' >
        <option className='text-lg capitalize' disabled>type of sale</option>
      <option value="cash" className='text-lg capitalize'>cash</option>
      <option value="credit" className='text-lg capitalize'>credit</option>
      <option value="consign" className='text-lg capitalize'>consignment</option>
      <option value="advance" className='text-lg capitalize'>Advanced</option>
      </select>
    </div>
    
        <div className='flex items-center  gap-3'>
        <label htmlFor="date" className='w-32 capitalize font-semibold tracking-wide'>Date :</label>
        <input type="date" name='data' id='date'
        value={customerData.date}
        onChange={e=>setCustomerData({...customerData,date:e.target.value})} 
      pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
        className='w-40 text-lg border inline-block border-gray-500 rounded-lg  p-1 focus:outline-none focus:border-2 focus:border-cyan-900 focus:shadow-lg focus:shadow-gray-300' />
          </div>
        </div>
    
      <div className='w-full flex justify-center items-center gap-3'>
      <button className='w-40 py-1 bg-blue-600 rounded-lg text-white capitalize hover:drop-shadow-2xl hover:bg-blue-900 mt-3'>Back</button>
      <button className='w-40 py-1 bg-blue-600 rounded-lg text-white capitalize hover:drop-shadow-2xl hover:bg-blue-900 mt-3'>Add Data</button>
      </div>
    </form>
  )
}

export default Mass;