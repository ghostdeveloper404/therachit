import React from 'react'
import Section from './Section'
import Heading from './Heading'
import PricingList from './PricingList'
import { LeftLine, RightLine } from './design/Pricing'

const Pricing = () => {
  return (
    <Section className="overflow-hidden " 
    id="pricing">
       <div className='container   relative '>
           
            <Heading 
            tag="bost your career with Leadsguru"
            title="Pay once, Earn forever"/>
          <div className='relative m-[1rem]'>
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>

            <div className='flex justify-center mt-10'>
                  <a href="https://leadsguru.in/bundle/silver-package" 
                  className='text-xs font-code font-bold tracking-wider uppercase border-b '>See the full details</a>
            </div>

       </div>
    </Section>
  )
}

export default Pricing
