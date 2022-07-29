import axios from 'axios';

const URL ='https://bge2022.herokuapp.com';
// const URL ='http://localhost:5000'

export const massData =()=>axios.get(URL + '/mass');
export const addDataMass =(newData)=>axios.post(URL + '/mass',newData);
export const getnincheData =()=>axios.get(URL + '/ninche');
export const addDataNinche =(newData)=>axios.post(URL + '/ninche',newData);