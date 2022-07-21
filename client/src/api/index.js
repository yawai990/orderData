import axios from 'axios';

const URL ='http://localhost:5000';

export const getData =()=>axios.get(URL);
export const addData =(newData)=>axios.post(URL,newData);