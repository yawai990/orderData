import React from 'react';
import {GridComponent,ColumnDirective,Filter,Edit,Inject,Page,ColumnsDirective,Search,Toolbar} from '@syncfusion/ej2-react-grids';

const Grid = ({title,data,grid}) => {
  return (

    <div className='w-10/12 h-auto bg-white drop-shadow-2xl mt-16 md:mt-5 rounded-2xl p-4'>
    <h1 className='mt-2 ml-4 font-bold text-2xl mb-3'>{title}</h1>

    <GridComponent 
    dataSource={data} 
    toolbar={['Search']} 
    allowPaging
    pageSettings={{pageSize:10}}
    searchSettings={{operator:'contains'}}>
      <ColumnsDirective>
      {grid.map((order,ind)=>(

            <ColumnDirective key={ind} {...order}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Search,Toolbar,Page,Filter,Edit]} />
    </GridComponent>
    </div>
  )
}

export default Grid;