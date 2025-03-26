import React from 'react'
import { loading } from '../assets'

const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6
    bg-neutral-800 rounded-[1.7rem]
    ${className || "" } text-base `}> 
      <img
       src={loading} 
       alt="loading" 
       className='w-5 h-5 mr-4 '
       />
       How to earn money online
    </div>
  )
}

export default Generating
