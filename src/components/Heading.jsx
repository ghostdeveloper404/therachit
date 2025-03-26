import React from 'react'
import Tagline from './Tagline'
const Heading = ({ className,tag,title,text }) => {
  return (
    <div className={`${className} md:text-center px-5 lg:px-0 max-w-[50rem] mx-auto
    mb-12 lg:mb-20`} >
      { tag && ( <Tagline className="mb-4 md:justify-center ">
           {tag}
        </Tagline>)}
      {title && <h2 className={`text-3xl lg:text-4xl font-bold `}>{title}</h2>}
      {text && <p className='text-base body-2 text-neutral-400 lg:text-lg mt-4 lg:mt-6'>{text}</p>}
    </div>
  )
}

export default Heading
