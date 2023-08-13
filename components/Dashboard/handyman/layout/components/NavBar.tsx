import Link from 'next/link';
import React,{useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {IoNotificationsOutline} from 'react-icons/io5';
import {useRouter} from 'next/router';
import {GiHamburgerMenu} from 'react-icons/gi';
import MessagePopUpNavBar from "../../../components/MessagePopUpNavBar";
import NotificationPopUPNavBar from "../../../components/NotificationPopUPNavBar";

const TestData = [
  {
    id: 1,
    name: "Jhon",
    message_short: "Lorem ipsum dolor sit amet consectetur adipisicing... ",
    href: "#",
  },
  {
    id: 2,
    name: "Akol",
    message_short: "Lorem ipsum dolor sit amet consectetur adipisicing... ",
    href: "#",
  },
];
export default function NavBar({setSlideNav}:{setSlideNav: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [messageToggle, setMessageToggle] = useState<Boolean>(false);
  const [notifcationToggle, setNotificationToggle] = useState<Boolean>(false);
  const router  = useRouter();
  return (
    <div className="bg-white shadow-lg px-5 md:px-20 py-6 w-full fixed z-50 left-0 right-0 top-0">
      <nav className='flex justify-between  md:justify-around items-center relative'>
        <div className='hidden md:block w-2/5'>
          <button onClick={()=>router.back()} className='cursor-pointer flex items-center justify-center gap-3'>
            <FaArrowLeft className='text-xl '/>
            <span className='text-xl font-bold inline-block mb-1'>Return</span>
          </button>
        </div>
        <GiHamburgerMenu className='block left-0 absolute  md:hidden text-3xl ml-3 cursor-pointer' onClick={()=>setSlideNav(e=>!e)}/>
        <div className='w-2/3'>
          <Link href={'/dashboard/handyman/'} title='dashboard' className='text-xl font-bold  hidden md:block'>Handyman Dashboard</Link>
        </div>
        <div className='flex gap-5  w-full  md:w-2/3  justify-end'>
            <div className='flex items-center justify-center gap-5'>
              <div className='relative'>
                <HiOutlineMail className='text-2xl cursor-pointer ' onClick={() =>{ setMessageToggle(!messageToggle); setNotificationToggle(false)}}/>
                <span className='absolute -top-4 -right-2 bg-orange text-white px-[8px] rounded-full'>{TestData.length}</span>
                {messageToggle && (
                <div className="absolute -right-10 top-8">
                  <div className="bg-white shadow-md  rounded border border-gray-200">
                    {TestData.map((message) => (
                      <MessagePopUpNavBar key={message.id} name={message.name} message_short={message.message_short} href={message.href}/>
                    ))}
                  </div>
                  </div>
                )}
              </div>
              <div className='relative'>
                <IoNotificationsOutline className='text-2xl cursor-pointer ' onClick={() => {setNotificationToggle(!notifcationToggle);setMessageToggle(false)}}/>
                <span className='absolute -top-4 -right-2 bg-orange text-white px-[8px] rounded-full'>{TestData.length}</span>
                {notifcationToggle && (
                <div className="absolute right-0 md:-right-8   top-8">
                  <div className="bg-white shadow-md  rounded border border-gray-200">
                    {TestData.map((message) => (
                      <NotificationPopUPNavBar key={message.id} name={message.name} message_short={message.message_short} href={message.href}/>
                    ))}
                  </div>
                </div>
              )}
              </div>
            </div>
        </div>
      </nav>
    </div>
  )
}
