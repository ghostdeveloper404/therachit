import React from 'react'
import Section from './Section'
import { socials } from '../constants'
import {  BottomLine } from './design/Hero'

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <Section crosses className="!px-0 !py-10 ">
         <div className=" absolute top-[55.25rem] lg:top-0 left-10 right-10 h-0.25 bg-[#0d1323;] pointer-events-none xl:block" />
          <div className='container flex sm:justify-between
          justify-center  items-center gap-10 max-sm:flex-col '>
             <p className='caption lg:px-20 pb-2 text-neutral-400 lg:block '>  &copy; {currentYear} Rachit. All rights reserved. </p>
          </div>
          <ul className='flex gap-3 justify-center flex-wrap'>
              {socials.map((item) => (
                 <a href={item.url}
                 className='flex items-center justify-center w-15 h-15
                 bg-neutral-700 rounded-full transition-colors hover:bg-neutral-600'
                 target='_blank'  
                 key={item.id}>
                     <img src={item.iconUrl} width={30} height={30} alt={item.title} />
                 </a>
              ))}
          </ul>
              
    </Section>
  )
}

export default Footer
