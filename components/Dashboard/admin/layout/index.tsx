import React,{useState,createContext,useEffect} from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}
interface ContexType  { 
  toggleSideBar:boolean,
  setToggleSideBar: React.Dispatch<React.SetStateAction<boolean>>
}
export const Context = createContext<ContexType>({toggleSideBar:true,setToggleSideBar:()=>{}})
export default function Layout({ children }:LayoutProps) {
  const [slideNav,setSlideNav] = useState<boolean>(false);
  const [toggleSideBar,setToggleSideBar] = useState<boolean>(false);
  useEffect(() => {
    if (window.innerWidth >= 767) {
      setToggleSideBar(true);
    } else setToggleSideBar(false);
  }, [setToggleSideBar]);
  return (
    <div>
      <NavBar setSlideNav={setSlideNav}/>
      <Context.Provider value={{toggleSideBar,setToggleSideBar}}>
        {children}
      </Context.Provider>
      <Sidebar slideNav={slideNav} toggleSideBar={toggleSideBar} setToggleSideBar={setToggleSideBar}/>
    </div>
  );
}
