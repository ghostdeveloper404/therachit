
import Section from './Section'
import { curve,   } from "../assets"
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
import Button from './Button'

import { ScrollParallax } from 'react-just-parallax'
import { useRef } from 'react'
import Generating from './Generating'
import Notification from './Notification'
import CompanyLogos from './CommpanyLogos'

const Hero = () => {
  const parallaxRef = useRef(null)
  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem] "
    customPaddings
    id="hero"
    >
     <div className="container contents items-center relative" 
     ref={parallaxRef}>
       <div className="relative z-1  text-center max-w-[62rem] 
       mx-auto mb-[4rem] md:mb-20 lg:mb:[6rem]">
        
        <h1 className=' h1 text-5xl mb-6'>
           Become financial free by joining our community with 
            {' '}
            <span className='inline-block md: relative '>
             Rochit
            <img src={curve} alt="curve"
            className='absolute lg:hidden md:block top-full left-0 
            w-full xl:-mt-2' 
            width={624}
            height={28}/>
            </span>
        </h1>
          <p className='body-1 max-w-3xl mx-auto mb-6 text-2xl
          text-neutral-200 lg:mb-8  '>
            Hello visitor, this is Rachit Gupta. I am dedicated to helping students achieve self-sufficiency. If you are interested in learning how to earn money online and become financially independent, join our community today!
          </p>
          <Button href="https://wa.me/+918429384431?text=Hello%20Rachit%20i%20want%20more" white>
              join now
          </Button>
       </div>
       <div className='relative max-w-[23rem] mx-auto 
       md:max-w-5xl xl:mb-24'>
         <div className='relative  z-1 p-0.5 rounded-2xl bg-conic-gradient '>
             <div className='relative bg-neutral-800 rounded-[1rem] '>
                <div className='h-[1.4rem] bg-neutral-600 rounded-t-[0.9rem]'/>
                <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                <iframe
                  src="https://www.youtube.com/embed/gCg26bOl7vo?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1"
                  className='w-full  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[9%]'
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  title="AI"
                >
                </iframe>
                <ScrollParallax isAbsolutelyPositioned>
                <Notification className="hidden absolute right-[50.5rem] bottom-[15rem] w-[18rem] xl:flex"
                title="Peoples are joining"/>
                </ScrollParallax>
                   
                   <Generating className="absolute left-4
                   right-4 bottom-5 md:left-1/2  
                   md:right-auto md:bottom-8 md:w-[31rem]
                   md:-translate-x-1/2"/> 
                
                     
                     <ScrollParallax isAbsolutelyPositioned>
                     <Notification className="hidden absolute -right-[5.5rem] bottom-[9rem] w-[18rem] xl:flex"
                     title="Peoples are joining"/>
                     </ScrollParallax>
                </div>
             </div>
             <Gradient/>
         </div >
         <div className='absolute left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%]
          md:w-[138%] lg:-top-[104%]  -top-[54%]'>
           </div> 
           <BackgroundCircles/>
       </div>
       <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
     </div>
      <BottomLine/>
    </Section>
  )
}

export default Hero
