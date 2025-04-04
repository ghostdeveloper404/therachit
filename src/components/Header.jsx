import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation }  from "../constants";
import  Button  from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";



const Header = () => {
  const pathname = useLocation()
  const [openNavigation, setOpenNavigation] = useState(true)
  const  toggleNavigation = () => {
    
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
   
  }
  const handleClick = () => {
    if(!openNavigation) return
    enablePageScroll()
    setOpenNavigation(false)

  }



  return (
    <div className={`fixed top-0 w-full left-0 z-50 
      border-b border-gray-900 
     lg:bg-gray-950/90   lg:backdrop-blur-sm ${openNavigation ? 'bg-natural-800':'bg-neutral-800/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5
        xl:px-10 max-lg:py-4">
            <a className="block md:w-[12rem] w-[5rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40}
                alt="Brainwave"/>
            </a>
            <nav className={` ${openNavigation ? 'flex':'hidden'}  fixed top-0 h-[100vh] md:h-auto
            left-0  right-0 bg-neutral-800 lg:static 
             lg:bg-transparent lg:mx-auto lg:flex`}>
               <div className="relative z-2 flex flex-col items-center
               justify-center m-auto lg:flex-row">
                {navigation.map((item) => (
                   <a key={item.id} 
                   href={item.url}
                   onClick={handleClick}
                   className={`block relative font-code text-2xl uppercase
                     transition-colors hover:text-purple-400 text-neutral-100
                      ${item.onlyMobile ? 'lg:hidden':''}
                       px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-neutral-100':'lg:text-neutral-100/50' }
                       lg:leading-5 lg:hover:text-neutral-100 xl:px-12 `} >
                      {item.title}

                   </a>
                ))}

               </div>
                <HamburgerMenu />
            </nav>
            
            <Button onClick={toggleNavigation } className="ml-auto lg:hidden" px="px-3">
                <MenuSvg openNavigation={openNavigation} />
            </Button>
      </div>    
    </div>
  )
}

export default Header
