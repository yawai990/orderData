import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import {Form,Sidebar} from './components';
import {Ninche,Mass} from './pages';
import { useStateContext } from "./context/Context";

const App =()=>{
        const {openSideBar} = useStateContext();

    return <div className="">
    <BrowserRouter>
            <div className="w-screen flex">
                <Sidebar />
                <div className="w-full h-full relative">
                    <div className="w-8 h-8 fixed top-3 left-5 m-2 md:hidden">
                    <button 
                    onClick={openSideBar}
                    className="w-full h-full bg-gray-400 text-white hover:  drop-shadow-2xl flex justify-center items-center p-2 text-2xl rounded-full">
                    <FaBars />
                    </button>   
                    </div>
            <Routes>
                <Route path="/" element={<Mass />} />
                <Route path="/mass" element={<Mass />} />
                <Route path="/ninche" element={<Ninche />} />
                <Route path="/form" element={<Form />} />
            </Routes>
            </div>
            </div>
    </BrowserRouter>
    </div>

};

export default App;