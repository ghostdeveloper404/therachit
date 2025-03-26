import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { service1,  service2, service3, check } from '../assets'
import { brainwaveServices } from '../constants'
import Generating from './Generating'
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from './design/Services'

const Services = () => {
  return (
    <Section id="how-to-use">
        <div className='container'>
             <Heading 
             title="Leadsguru made for Everyone."
             text="Leadsguru unlocks the potential to earn money online by providing the best courses for everyone"
             />
             <div className='relative m-[1rem] '>
                   <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border 
                    border-neutral-100/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                          <div className='absolute md:right-[15rem] top-0 opacity-20 md:opacity-120  left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
                            <img 
                            src={service1}
                            width={800}
                            alt="Smart AI"
                            height={730}
                            className='w-full h-full object-cover md:object-right'
                            />
                          </div>
                          <div className='relative z-1 max-w-[17rem] ml-auto md:max-w-[20rem]  '> 
                             <h4 className='h4 mb-4 text-5xl'>Earn while learning</h4>
                             <p className='body-2 mb-[1rem] md:mb-[3rem] text-neutral-300'> 
                             Leadsguru unlocks the potential of run any business by providing the best courses for everyone.
                             </p>
                             <ul className='body-2'>
                                 {brainwaveServices.map((item,index) => (
                                    <li key={index} className='flex items-start py-2 border-t border-neutral-100/10'> 
                                        <img src={check} width={24} height={24} alt="" />
                                        <p className='ml-4 text-2xl'>{item}</p>

                                    </li>
                                 ))}
                             </ul>
                          </div>
                          <Generating className="absolute left-4 
                          border border-neutral-100/10  lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 right-4 bottom-4"/>
                   </div>
                   <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                      <div className='relative  min-h-[39rem] border border-neutral-100/10 rounded-3xl overflow-hidden'>
                           <div className='absolute opacity-40 inset-0 '>
                               <img src={service2} 
                               className='h-full w-full object-fill'
                               width={630}
                               height={750}
                               alt='robot' />
                            </div> 
                            <div className=' absolute  inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-neutral-800/90 lg:p-15  '>
                                <h4 className='h4 text-5xl mb-4'>
                                  Earn Money Online
                                </h4>
                                <p className='body-2 text-2xl mb-[3rem] text-neutral-300 '>
                                  Start earning money online by promoting products and action taker is money maker
                                </p>
                            </div>
                            <PhotoChatMessage />
                      </div>
                        <div className='p-4 bg-neutral-700 rounded-3xl
                        overflow-hidden lg:min-h-[46rem] '>
                             <div className='py-12 px-4 xl:px-8'>
                               <h4 className='h4 text-4xl mb-4'>Get Certified</h4>  
                               <p className='body-2 text-xl mb-[2rem] text-neutral-300'>
                               Upon successful completion of the course and passing the test, proudly receive your Certificate of Completion.
                                Showcase your newfound expertise and use it to advance your career or professional pursuits
                               </p>
                              
                             </div>
                             <div className='relative  h-auto bg-neutral-800 rounded-xl overflow-hidden md:h-[25rem]  '>
                                <img src={service3}  className='w-full h-fit object-cover ' width={520} height={400} alt='robot' />
                                <VideoChatMessage />
                                
                             </div>
                        </div>
                   </div>
                   <Gradient />
             </div>
        </div>
    </Section>
  )
}

export default Services
