import React,{useState,createContext,useContext} from 'react';

const stateContext = createContext();

export const ContextProvider =({children})=>{

    const [liquorType,setLiquorType] = useState('mass');
    const [hideSideBar,setHideSidebar] = useState('-translate-x-full')

    const closeSBwithNavLink = ()=>{
        setHideSidebar('-translate-x-full')
    }
    const openSideBar = ()=>{
        setHideSidebar('translate-x-0')
    }
    const closeSidebar = ()=>{
        setHideSidebar('-translate-x-full')
    }
    const setMode =(type)=>{
        setLiquorType(type.target.value)
    }

    return <stateContext.Provider value={{
                liquorType,setMode,openSideBar,hideSideBar,closeSidebar,closeSBwithNavLink
    }}>
        {children}
    </stateContext.Provider>
};

export const useStateContext =()=>useContext(stateContext);