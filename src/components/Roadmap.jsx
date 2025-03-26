import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { roadmap } from '../constants'
import Tagline from './Tagline'
import { Gradient } from './design/Roadmap'
import { grid, loading1, check2 } from '../assets'

const Roadmap = () => {
  return (
     
    <Section className="overflow-hidden"
    id="roadmap">
        <div key={Math.random()} className='container md:pb-10'>
             <Heading
              tag="Ready to get started with me?" 
              title="What about me Who am I?"
              
             />
             <div  className='relative grid gap-6 m-[1rem] 
             md:grid-cols-2 
             md:gap-4 md:pb-[7rem] '>
                   {roadmap.map((item ,index) => {
                    const status = item.status === "done" ? "Done":"In progress";
                     return (
                      
                       <div
                       key={item.id}
                       className={`md:flex evenmd:translate-y-[7rem]
                        p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient": "bg-neutral-600"}` }
                       >
                          <div  className="relative p-8 bg-neutral-800
                           rounded-[2rem] overflow-hidden xl:p-15 ">
                             <div  className='absolute top-0 left-0 max-w-full'>
                              <img src={grid} 
                               className='w-full'
                               width={550}
                               height={550}
                              alt="Grid"/>
                             </div>
                             <div  className='relative z-1'>
                                <div  className='flex flex-wrap max-x-[27rem] mb-8 md:mb-20 items-center justify-between'>
                                  <Tagline  >{item.date}</Tagline>
                                 
                                   
                                <div  className='flex  items-center px-4 py-1 bg-neutral-100 text-neutral-800'>
                                <img  src={item.status === "done" ? check2 : loading1} className='mr-2.5' width={16} height={16} alt={status} />
                                 <div  className='tagline'>
                                   {status}
                                 </div>
                                 </div>
                                 
                             </div>

                              <div  className={`mb-10 -my-10 mx-auto 
                                    ${(index === 1 || index === 3) ? 'md:my-[1rem] ' : ''
                                  }`}>
                                 <img src={item.imageUrl}
                                 
                                   className='h-[20rem] mt-10  '
                                   width={630}
                                   height={420}
                                  alt={item.title}
                                   />
                              </div>
                               <h4  className='h4 text-4xl mb-4'> {item.title} </h4>
                               <p  className='body-2 text-2xl leading-[112%]  text-neutral-400 '> {item.text} </p>
                          </div>
                        </div>
                        </div>
 
                     );
                   })}
             </div>
        </div>
      
    </Section>
    
  )
}

export default Roadmap
