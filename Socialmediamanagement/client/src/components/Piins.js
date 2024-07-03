import React from 'react'
import Feed from './Feed';
import { Route,Routes } from 'react-router-dom';
import PinDetail from './PinDetail';
import CreatePin from './CreatePin';
import Navbar from './Navbar';
 
const Pins = ({user}) => {
  return (
   <div className ="px-2 md:px-5">
    <div className ="bg-gray-50"><Navbar user ={user && user}/></div>
    <div className="h-full"></div>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/category/:categoryId" element={<Feed/>}/>
      <Route path ="/pin-details/:pinId" element ={<PinDetail user={user && user}/>}/>
     <Route path ="create-pin" element={<CreatePin user={user && user}/>}/>
    </Routes>
   </div>
  )
}

export default Pins;