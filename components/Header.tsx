import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {NavLinks} from '@/constants/landingPage/index';
import Login from "./Login";
export default function Header() {
  const [toggle, setToggle] = useState<boolean>(true);
  const [toggleLogin,setToggleLogin] = useState<boolean>(false);
  React.useEffect(() => {
    if (toggleLogin) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [toggleLogin]);
  return (
  <div className="bg-white  fixed  left-0 right-0  top-0  z-50">
    <div className="w-[85%] py-4  mx-auto">
      <div className="lg:flex items-center justify-between">
        <span className="lg:pl-5 font-bold text-2xl lg:text-xl">
          <Link href={NavLinks[0].url} title={NavLinks[0].linkTitle}>
            {NavLinks[0].title}
          </Link>
        </span>
        <div className="lg:hidden absolute block sm:right-10 right-5 top-4">
          <GiHamburgerMenu className="text-3xl cursor-pointer" onClick={() => setToggle(!toggle)}/>
        </div>
          <nav className={`lg:flex lg:gap-x-40 space-y-1 lg:space-y-0 absolute bg-gray-50 lg:bg-white sm:px-9 px-2 left-0 right-0 top-16 lg:top-0 lg:relative pb-5 lg:pb-0 ${toggle && 'hidden'}`}>
            <ul className="flex list-none lg:space-x-12 space-y-3 lg:space-y-0 justify-between lg:items-center font-medium flex-col lg:flex-row p-3">
            <li>
                <Link href={NavLinks[6].url} className="hover:text-orange font-medium" title={NavLinks[6].linkTitle}>
                  {NavLinks[6].title}
                </Link>
              </li>
              <li>
                <Link href={NavLinks[1].url} className="hover:text-orange font-medium" title={NavLinks[1].linkTitle} >
                  {NavLinks[1].title}
                </Link>
              </li>
              <li>
                <Link href={NavLinks[2].url} className="hover:text-orange font-medium" title={NavLinks[2].linkTitle}>
                  {NavLinks[2].title}
                </Link>
              </li>
              <li>
                <Link href={NavLinks[3].url} className="hover:text-orange font-medium" title={NavLinks[3].linkTitle}>
                  {NavLinks[3].title}
                </Link>
              </li>
          
            </ul>
           <ul>
           <li className="space-x-9 flex justify-between items-center list-none">
              <button  className="hover:text-orange font-semibold ml-1.5 cursor-pointer" title={NavLinks[4].linkTitle} onClick={()=>setToggleLogin(true)}>
                {NavLinks[4].title}
              </button>
             <Link href={NavLinks[5].url} title={NavLinks[5].linkTitle}>
             <button className="bg-orange text-white lg:px-5 lg:py-2 px-3 py-1.5 rounded-xl font-medium focus:outline-none" type="button" aria-label="Click to register as craftman">
                {NavLinks[5].title}
              </button>
             </Link>
            </li>
           </ul>
          </nav>
      </div>
    </div>
    {toggleLogin && 
      <Login setToggleLogin={setToggleLogin}/>
    }
  </div>
  );
}
