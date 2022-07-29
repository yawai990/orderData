import React,{useState,useEffect} from 'react';
import {massData } from '../api';
import {Grid} from '../components';
import {ordersGrid} from '../data/data';

const Datatable = () => {
  
  const [getdata,setGetData] = useState([]);

 async function data(){
  const data = await massData();

  setGetData(data.data)
 }

 useEffect(()=>{
  data()
 },[])
  return (
   <div className="w-full h-full flex justify-center items-center">
    <Grid title='Mass Customer Data' grid={ordersGrid} data={getdata}  />
   </div>
  )
}

export default Datatable;