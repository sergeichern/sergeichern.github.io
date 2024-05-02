import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-40 w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-7 items-center'>
           
        <h1 className='text-white text-[25px] font-semibold'>Sergei 
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>
            {" "}
        Chernitsyn
        </span>
        </h1>
        <h2 className='text-white text-[15px] font-semibold '>
        
        sergeiche01@gmail.com     
      </h2>
        <h2 className='text-white text-[15px] font-semibold '>
        
        (647)-241-1622
        
        </h2>
    </div>
    <div className='flex flex-row gap-5 mb-2'>
        {Socials.map((social) => (
            
            <Link key = {social.name} href="https://www.linkedin.com/in/sergei-chernitsyn-442665223/"target="_blank" rel="noopener noreferrer">
             
            <Image
                key = {social.name}
                src= {social.src}
                alt= {social.name}
               
                width={28}
                height={28}
                
            />
            
            </Link>
        ))}
    </div>
    </div>
  )
}

export default Navbar