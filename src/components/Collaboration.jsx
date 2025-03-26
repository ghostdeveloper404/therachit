import React from 'react'
import Section from './Section'
import Button from './Button'
import check from '../assets/check.svg'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol } from '../assets'
import { LeftCurve, RightCurve } from './design/Collaboration'
import  { useState } from 'react';



const Collaboration = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
 


  return (
    <Section crosses>
      <div className=' container mx-auto px-2.5 lg:flex'>
        <div className='max-w-[25rem]   '>
          <h2 className='h2 mb-4 text-4xl md:mb-8'>How LeadsGuru Works</h2>
          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item) => (
              <li className='mb-3 py-3 ' key={item.id}>
                <div className='flex items-center'>
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className='body-2 text-2xl ml-5'>{item.title}</h6>
                </div>
                {item.text && (
                  <p className='body-2  mt-3 text-neutral-400'>
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <Button href="https://wa.me/+918429384431?text=Hello%20Rachit%20i%20want%20">Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:[38rem] mx-30rem">
          <p className='body-2 mb-8 
             text-neutral-400 md:mb-16 
             lg:mb-32 lg:w-[22rem] text-xl lg:mx-auto '> {collabText} </p>
          <div className='relative mt-4 left-1/2 flex w-[22rem] aspect-square border border-neutral-600 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
            <div className='flex w-60 aspect-square m-auto border border-neutral-600 rounded-full'>
              <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                <div className='flex items-center justify-center w-full h-full bg-neutral-800 rounded-full'>
                  <img src={brainwaveSymbol} width={48} height={48} alt='brainwave' />
                </div>
              </div>
            </div>
            <ul >
              {collabApps.map((app, index) => (
                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 90}`} >
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] bg-neutral-700 border
                     border-neutral-100/15 rounded-xl -rotate-${index * 90}`}  onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}  >
                    <img className='m-auto' height={app.height} width={app.width} src={app.icon} alt={app.title} />
                    {hoverIndex === index && ( 
                        <h3>{app.HoverData}</h3>

                    )}
                  
                  </div>

                </li>
              ))}

            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration
