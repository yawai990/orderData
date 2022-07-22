import React,{useState,createContext,useContext} from 'react';

const stateContext = createContext();

export const ContextProvider =({children})=>{

    const [liquorType,setLiquorType] = useState('mass');

    const setMode =(type)=>{
        setLiquorType(type.target.value)
    }

    return <stateContext.Provider value={{
                liquorType,setMode
    }}>
        {children}
    </stateContext.Provider>
};

export const useStateContext =()=>useContext(stateContext);