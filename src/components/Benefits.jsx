import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath"


const Benefits = () => {
  return (
    <Section id="features">
        <div className='container relative z-2'>
           <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Use your phone Smater, Make it money making machine with me"
           />
           <div className='flex px-5  justify-center flex-wrap gap-10 mb-10'>
              { benefits.map((item) => (
                 <div key={item.id}
                  className='block relative p-0.5 
                  md:max-w-[24rem] bg-no-reapeat bg-[length:100%_1005]'
                  style={{backgroundImage: `url(${item.backgroundUrl})`}}>
                       <div className='relative z-2 flex flex-col min-h-[22rem] p-[1.95rem] pointer-events-none'>
                          <h5 className="h2 text-4xl mb-5">{item.title}</h5>
                         <p className='body-2 text-xl mb-6 text-[#ADA8C3]'>{item.text}</p> 
                         <div className='flex items-center mt-auto '>
                              <img src={item.iconUrl} alt={item.title} width={48} height={48}/>
                              <p className='ml-auto  font-code text-xs font-bold text-neutral-100
                               uppercase tracking-wider'>join now</p>
                              <Arrow  />
                         </div>
                       </div>
                       {item.light && <GradientLight/>}
                       <div
                        className='absolute insert-0.5 bg-neutral-800 '
                        style={{clipPath: "url(#benfits)"}}

                        >
                           <div className='absolute inset-0 
                            opacity-0 transition-opacity hover:opacity-10'>
                              {item.imageUrl &&(
                                 <img src={item.imageUrl} width={380}
                                  height={362} alt={item.title} 
                                  className='w-full h-full object-cover'/>
                              )}
                           </div>
                        </div> 
                        <ClipPath/>
                 </div>
              ))}
           </div>
        </div>
    </Section>
  )
}

export default Benefits
