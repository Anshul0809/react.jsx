import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const Routing = () => {
  return (
    <>
      <h1>Routers</h1>

      <Routes>
        
        <Route path='/' element={<Layout/>}> 
        <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
         
        </Route>


      </Routes>
      
    </>
  )
}

export default Routing
