import React,{useState,useEffect} from 'react';
import { getData } from '../api';
import {GridComponent,ColumnDirective,Filter,Edit,Inject,Page,ColumnsDirective,Search,Toolbar} from '@syncfusion/ej2-react-grids';
import {ordersGrid} from '../data/data';

const Datatable = () => {
  
  const [getdata,setGetData] = useState([]);

  const da = getdata.reverse();

 async function data(){
  const data = await getData();

  setGetData(data.data)
 }

 useEffect(()=>{
  data()
 },[])
  return (
   <div className="w-full h-full flex justify-center items-center">

    <div className='w-10/12 h-auto bg-white drop-shadow-2xl mt-5 rounded-2xl p-4'>
        <h1 className='mt-2 ml-4 font-bold text-2xl mb-3'>Mass Customer Orders Data</h1>

        <GridComponent 
        dataSource={da} 
        toolbar={['Search']} 
        allowPaging
        pageSettings={{pageSize:10}}
        searchSettings={{operator:'contains'}}>
          <ColumnsDirective>
          {ordersGrid.map((order,ind)=>(

                <ColumnDirective key={ind} {...order}/>
          ))}
          </ColumnsDirective>
          <Inject services={[Search,Toolbar,Page,Filter,Edit]} />
        </GridComponent>
        </div>
   </div>
  )
}

export default Datatable;