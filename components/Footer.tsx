import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ColumnProps = {
    title: string
    links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map((link) => <Link href="/" key={link} >{link}</Link> )}
        </ul>
    </div>
)

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
              <div className='flex flex-wrap gap-12'>
                  <FooterColumn title={footerLinks[0].title}
                   links={footerLinks[0].links} />
                  
              </div>
              
          </div>
          
    </footer>
  )
}

export default Footer