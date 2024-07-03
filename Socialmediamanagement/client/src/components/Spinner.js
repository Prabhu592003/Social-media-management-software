import React from 'react'
import {ThreeDots} from "react-loader-spinner";
const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-centre items-centre w-full h-full'>
       <ThreeDots 
height="90" 
width="90" 
radius="9"
color="#1AA3E8" 
ariaLabel="three-dots-loading"
 />
        
        <p className="text-lg text-centre px-2">{message}</p>
    </div>
  )
}

export default Spinner