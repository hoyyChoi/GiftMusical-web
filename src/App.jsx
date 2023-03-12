import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './component/Navigaition';
import Home from './component/Home';
import Signin from './component/Signin';
import Signup from './component/Signup';


function App() {
  

  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Home />}/>
           <Route path='/login' element={<Signin />}/>
          <Route path='/register' element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App
