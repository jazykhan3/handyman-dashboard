import React from 'react'
import Image from 'next/image';
export default function Logout({toggleSideBar}:{toggleSideBar:boolean}) {
  return (
    <ul className={`w-full ${toggleSideBar?'md:pr-[55px]':"pr-[55px]"} `}>
        <li className={`flex sm:justify-center ${toggleSideBar&&'ml-6 sm:ml-0'} items-center gap-3`}>
            <Image src='/Dashboard/client/logout.svg' width={20} height={20} alt='log out' className={`cursor-pointer ${toggleSideBar ?'mr-0':'ml-6 md:ml-9 w-7'}`}/>
            <button className={`font-bold cursor-pointer text-lg mb-1 hover:text-orange   ${toggleSideBar?'block':'hidden'}`}>Logout</button>
        </li>
    </ul>
  )
}
