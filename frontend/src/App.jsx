import React from 'react'
import Home from './Home/Home'
import Locationn from './LOCATION/Locationn'
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './componenets/Signup'
import Contact from './Contact/Contact'
import Aboutt from './ABOUT/Aboutt'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider'



const App = () => {
  const [authUser,setAuthuser]=useAuth()
  return (
    <>
 <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/location" element={authUser?<Locationn/>:<Navigate to="/signup"/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path='about' element={<Aboutt/>}/>
 </Routes>
 <Toaster />
 </div>
    </>
  )
}

export default App
