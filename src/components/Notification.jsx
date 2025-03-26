import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({ className, title 
  
  }
) => {
  return (
    <div className={ `${className || '' } flex items-center 
        p-4 pr-6 bg-neutral-900/40 backdrop-blur border border-neutral-100/10 rounded-2xl gap-5 `}>
         <img src={notification1} width={62} height={62} alt="notification
         " className='w-14 h-14 rounded-lg'
         
          />
        <div className='flex-1'>
        <h6 className='mb-1 font-semibold text-base'>
          {title}
        </h6>
          <div className='flex items-center justify-center'>
              <ul className='flex -m-0.5'>
                  {notificationImages.map((item) => (
                    <li key={Math.random()} className='flex w-6 h-6 border-2 border-neutral-900 rounded-full overflow-hidden '>
                      <img src={item} alt={item} width={20} height={20} className='w-full' />
                    </li>
                  )
                )}
              </ul>
              <div className='body-2 mx-2 text-neutral-400 '>
                    1m ago
              </div>
          </div>
      </div>
    </div>
  )
}

export default Notification
