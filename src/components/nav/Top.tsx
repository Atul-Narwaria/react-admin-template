import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { isMobileSideBar } from '../../redux/mobileSideBar';
import { MdSunny } from "react-icons/md";
import DropDowns from './../Dropdowns/DropDowns';
import { FaExpand } from "react-icons/fa";
import { FiMinimize } from "react-icons/fi";
import { GrPersonalComputer } from "react-icons/gr";
import { theme } from '../../redux/themeSlice';
import { BsMoonStarsFill } from 'react-icons/bs';
export default function Top() {
  const [ismobile, setIsMobile] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const breadcrumbs = useSelector((state:any) => state.breadcrumSlice)
  const sidebarOpen = useSelector((state:any) => state.commonSlice)
  const MobileSideBar = useSelector((state:any) => state.mobileSideBar)
  const themeSlice = useSelector((state:any) => state.themeSlice)
  if(themeSlice === 'dark'){
    document.body.style.backgroundColor = "#111827";
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add('dark')
  }else{
    document.body.style.backgroundColor = "#f8f9fa";
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add('light')
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem('theme'));
  useEffect(() => {
    const handleStorageChange = (event:any) => {
      console.log(event)
      if (event.key === 'yourKey') {
        setLocalStorageValue(event.newValue || '');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  const handleResize = () => {
    if(window.innerWidth <= 640){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if(window.innerWidth <= 640){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
   
  })
  useEffect(()=>{

   if(localStorage.getItem('themeType') === 'system'){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme','dark')
      dispatch(theme('dark'))
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = "#111827";
      }else{
        localStorage.setItem('theme','light')
        document.documentElement.removeAttribute("class");
        document.body.style.backgroundColor = "#f8f9fa";
        dispatch(theme('light'))
      document.documentElement.classList.add('light')
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? "dark" : "light";
      if(newColorScheme === "dark"){
        document.body.style.backgroundColor = "#111827";
      }else{
        document.body.style.backgroundColor = "#f8f9fa";
      }
      localStorage.setItem('theme',newColorScheme)
      dispatch(theme(newColorScheme))
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add(newColorScheme)
      });
   }
})

const handleTheme = (themes:string)=>{
  console.log(themes)
 
  if(themes === 'system'){
    localStorage.setItem('themeType','system')
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme','dark')
      dispatch(theme('dark'))
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = "#111827";
      }else{
        localStorage.setItem('theme','light')
        document.documentElement.removeAttribute("class");
        document.body.style.backgroundColor = "#f8f9fa";
        dispatch(theme('light'))
      document.documentElement.classList.add('light')
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? "dark" : "light";
      if(newColorScheme === "dark"){
        document.body.style.backgroundColor = "#111827";
      }else{
        document.documentElement.removeAttribute("class");
        document.body.style.backgroundColor = "#f8f9fa";
      }
      localStorage.setItem('theme',newColorScheme)
      dispatch(theme(newColorScheme))
      document.documentElement.removeAttribute("class");
      document.documentElement.classList.add(newColorScheme)
      });
  }else{
    localStorage.setItem('theme',themes);
    localStorage.setItem('themeType','null')
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(themes)
    dispatch(theme(themes))
  }
}
useEffect(() => {
  const handleFullscreenChange = () => {
    setFullScreen(!!document.fullscreenElement);
  };
  // const desiredTimezone = 'Asia/Kolkata';
  // const currentTimeInIST = moment.tz(desiredTimezone);
  // const currentHourInIST = currentTimeInIST.hour();
  // const greeting = getGreeting(currentHourInIST);
  // function getGreeting(hour:any) {
  //   if (hour >= 5 && hour < 12) {
  //     setGreeting( 'Good morning');
  //   } else if (hour >= 12 && hour < 17) {
  //     setGreeting( 'Good afternoon');
  //   } else if (hour >= 17 && hour < 20) {
  //     setGreeting('Good evening');
  //   } else {
  //     setGreeting( 'Good night');
  //   }
  // }
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  return () => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
  
  };
}, []);

const enterFullscreen = () => {
  const element = document.documentElement;

  if (element.requestFullscreen) {
    element.requestFullscreen();
    setFullScreen(true);
  } else {
    setFullScreen(false);
  }
};

const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    setFullScreen(false);
  } else {
    setFullScreen(true);
  }
};

const HandlefullScreen = () => {
  if (!fullScreen) {
    enterFullscreen();
  } else {
    exitFullscreen();
  }
};
  return (
    <div className={`${sidebarOpen ? 'pl-[3%] md:pl-[25%] lg:pl-[20%]  ' : ' pl-[3%] md:pl-[10%] lg:pl-[8%]' } fixed h-[7vh]  w-screen `}>
      <div className={`h-[7vh] md:h-[12vh] lg:h-[10vh]  grid   place-content-center ${ismobile ? 'grid-cols-12' : 'grid-cols-2'}`}>
        {
          ismobile ? 
          <div className=' col-span-1'>
            <FaBars onClick={(()=>dispatch(isMobileSideBar(!MobileSideBar)))} className=' text-3xl dark:text-white' />
          </div>
          : null
        }
        <div className={`${ismobile ? 'col-span-4' : 'flex justify-start'}  text-dark dark:text-white`}>
          {
            breadcrumbs.map((item:any,index:number)=>(
              breadcrumbs?.length-1 == index ? 
              <p key={index} className='hover:cursor-pointer font-bold text-2xl' onClick={(()=>navigate(item.path))}>{item.label}</p>
              :
              <p key={index} className='hover:cursor-pointer font-semibold text-xl' onClick={(()=>navigate(item.path))}>{item.label}</p>
            ))
          }
        </div>
        <div className={` ${ismobile ? 'col-span-7' : ''} flex flex-row justify-end sm:mr-0 mr-0 lg:mr-[5%] md:mr-5 lg:gap-8 md:gap-5 gap-4 sm:gap-2`}>
          <div>
          <DropDowns >
            <div className=''>
            {
                    themeSlice === 'dark' ? 
                    <BsMoonStarsFill  className='text-white text-2xl dark:text-white' />
                    :
                    themeSlice !== 'dark' ? 
                    <MdSunny  className='text-dark text-2xl dark:text-white' />
                    :
                    null
            }
            </div>
            <div>
            <div className='grid place-content-center grid-cols-12  gap-2  px-2 py-1  h-auto hover:cursor-pointer ' onClick={(()=>handleTheme('light'))}>
              <div className="col-span-2 mt-1">
              <MdSunny className='text-xl' /> 
              </div>
              <div className='ml-2'>
              Light
              </div>
            </div>
            <div className='grid  px-2 py-1  place-content-center grid-cols-12 gap-2  h-auto hover:cursor-pointer' onClick={(()=>handleTheme('dark'))}>
            <div className="col-span-2 mt-1">
              <BsMoonStarsFill className=' text-lg' /> 
              </div>
              <div className='ml-2'>
              Dark
              </div>
            </div>
            <div className='grid px-2 py-1  place-content-center grid-cols-12 gap-2  h-auto hover:cursor-pointer' onClick={(()=>handleTheme('system'))}>
            <div className="col-span-2 mt-1">
              <GrPersonalComputer className='text-dark  text-xl' /> 
              </div>
              <div className='ml-2'>
              System
              </div>
            </div>
            </div>
          </DropDowns>
          </div>
          <div className='hidden sm:hidden md:block'>
          {fullScreen ? (
                <FiMinimize
                  
                  className={` cursor-pointer text-2xl text-dark dark:text-white`}
                  onClick={HandlefullScreen}
                />
              ) : (
                <FaExpand
                  
                  className={` cursor-pointer text-2xl text-dark dark:text-white`}
                  onClick={HandlefullScreen}
                />
              )}
          </div>
          <div>
            <DropDowns icon={true}>
                <div className='dark:text-white'>
                  Hi, User
                </div>
                <div className=''>
                  <p className='grid px-2 py-1 place-content-center grid-cols-12 gap-2  h-auto hover:cursor-pointer'>Profile</p>
                  <p className='grid  px-2 py-1  place-content-center grid-cols-12 gap-2  h-auto hover:cursor-pointer'>Setting</p>
                  <hr />
                  <p className='grid px-2 py-1  place-content-center grid-cols-12 gap-2  h-auto hover:cursor-pointer'>Logout</p>
                </div>
            </DropDowns>
          </div>
          
        </div>
      </div>
    </div>
  )
}
