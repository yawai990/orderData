import React,{useState,useEffect} from 'react';
import {Grid} from '../components';
import { getnincheData } from '../api';
import { NincheGrid } from '../data/data';

const Ninche = () => {
  const [nincheData,setNincheData] = useState([])

  async function ninche(){
    const data = await getnincheData();

    setNincheData(data.data)
  }

  useEffect(()=>{
      ninche()
  },[])
  return (
    <div className='w-full h-full h-full bg-white flex justify-center items-center'>
    <Grid title='Ninche Customer Data' data={nincheData} grid={NincheGrid} />
   </div>
  )
}

export default Ninche;  