import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './home';
import { createGuestToken } from './api';
import { BrowserRouter } from "react-router-dom";
import Customers from './components/customers';
import IndexWaitList from './route';
function App() {

  useEffect(()=>{
    // check if token is created
    try{
      const token = localStorage.getItem("accessToken")
      if(token === null){
        // create token
        createGuestToken()
      }
    }catch(e){}
    
  }, [])
  return (
    <BrowserRouter>
          {/* <Home/> */}
          {/* <Customers/> */}
          <IndexWaitList />
    </BrowserRouter>
    
  );
}

export default App;
