import React from 'react'
import { Route, Routes } from "react-router-dom";
import Customers from '../components/customers';
import Home from '../home';

const IndexWaitList = ()=>{
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/view-waitlist' element={<Customers />} />
        </Routes>
    )
}

export default IndexWaitList;