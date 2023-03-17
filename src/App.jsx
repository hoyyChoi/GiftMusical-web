import { useState ,useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navigation from './component/Navigaition';
import Home from './component/Home';
import Signin from './component/Signin';
import Signup from './component/Signup';
import { getLoginUser } from './remotes';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  //let auth = useSelector(state=>state.auth)
  

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getLoginUser()
      .then(res=>{
        // 우저 정보를 네브바에 뿌랴줘야한다. 
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      
    }else{
      
    }
  },[])


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
