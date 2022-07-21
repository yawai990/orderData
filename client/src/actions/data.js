import * as api from '../api';

export const getData =()=>async(dispatch)=>{
        try {
            const {data} = await api.getData()
        } catch (error) {
            console.log(error)
        }
}