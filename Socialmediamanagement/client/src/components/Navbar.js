import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import{Link} from 'react-router-dom';

const Navbar = ({user}) => {
    if(user){
  return (
  
   
    <div className='flex gap-2 md:gap-0 w-full mb-0 pb-0'>
         <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
       <p className="p-2 w-full bg-white outline-none">Start posting</p>
     </div>
    <div classname='fexgap-3'>
       
        <Link to="/create-pin"
        className='bg-black text-white rounded-lg w-12 h-18 md:w-14 md:h-12 flex justify-center items-center'
        >
         <IoMdAdd/>
        </Link>
    </div>
    </div>
  )
    }
};

export default Navbar;