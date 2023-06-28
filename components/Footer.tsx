import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
      <footer className='flexStart footer'>
          <div className='flex flex-col gap-12 w-full'>
              <div className='flex items-start flex-col'>
                  <Image
                      src="/logo-purple.svg"
                      width={115}
                      height={38}
                      alt='afridevconnect'
                  />
                  <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                      Afri-Dev-Connect is a social media app where developers from Africa
                      can showcase their expertise in a form of project and also an app
                      where clients can hire skilled developers base on their project and level of experience.
                  </p>
              </div>
              
          </div>
          
    </footer>
  )
}

export default Footer