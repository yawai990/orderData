import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Form,Sidebar} from './components';
import {Ninche,Mass} from './pages';

const App =()=>{
    return <div className="">
    <BrowserRouter>
            <div className="w-screen flex">
                <Sidebar />
            <Routes>
                <Route path="/" element={<Mass />} />
                <Route path="/mass" element={<Mass />} />
                <Route path="/ninche" element={<Ninche />} />
                <Route path="/form" element={<Form />} />
            </Routes>
            </div>
    </BrowserRouter>
    </div>

};

export default App;