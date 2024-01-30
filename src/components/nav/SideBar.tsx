import React, { useState,useRef, useEffect } from 'react'
import logo from '../../logo.svg'
import { FaBars,FaUserFriends,FaUserTie,FaRegStar,FaSwatchbook,FaFacebookMessenger,FaBook,FaAngleLeft,FaAngleRight       } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBreadcrumbs, setBreadcrumbs } from '../../redux/breadcrumSlice';
import { isOpenSideBar } from '../../redux/commonSlice';
import { isMobileSideBar } from '../../redux/mobileSideBar';

export default function SideBar() {
    const dispatch = useDispatch();
    const sideOpen: any = useRef();
    const sidebarOpen = useSelector((state:any) => state.commonSlice)
    const mobileSideBar = useSelector((state:any) => state.mobileSideBar)
    const navItem = [
        {id:1, name:'Dashboard',href:"/admin/dashboard", icon:FaBars,isEnd: true},
        {id:2, name:'All Tasks',href:"/admin/students", icon:FaUserFriends,isEnd: true,},
        {id:3, name:'Important Tasks',href:"/admin/teachers", icon:FaUserTie,isEnd: true,},
        {id:4, name:'Pending Tasks',href:"/admin/classes", icon:FaRegStar,isEnd: true,},
        {id:5, name:'Complete Tasks',href:"/admin/subjects", icon:FaSwatchbook,isEnd: true,},
    ]
    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (sideOpen.current && !sideOpen.current.contains(event.target)) {
            dispatch(isMobileSideBar(false))
         
          }
        };
    
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      },[mobileSideBar]);
    const handleBreadcrum = (item:any)=>{
        dispatch(isMobileSideBar(false))
        const breadcrum = [{label:item.name,path:item.href}]
        dispatch(addToBreadcrumbs(breadcrum));
    }
    const handleSideBarStatus = ()=>{
        dispatch(isOpenSideBar(!sidebarOpen))
    }
  return (
    <>
    <aside className={` ${sidebarOpen ? 'w-[17%]  md:w-[22%] lg:w-[17%]' : 'w-auto'} fixed z-20 hidden sm:hidden  md:block lg:block dark:bg-dark-blue h-[100vh] overflow-auto`}>
        <div className='flex justify-center h-[10vh]'>
            <img src={logo} className=' h-[50px] my-2' alt="" />
        </div>
        <div id="sidebar" className='navItems mt-10 md:mt-5'>
                {
                    navItem.length > 0 ? 
                        navItem.map((e:any,i:any)=>(
                            <NavLink 
                            to={e?.href}
                            className={`  flex items-center mx-2 dark:text-gray-300   rounded-md text-gray-800 my-3`}
                            end={e?.isEnd ? true : false}
                            key={i}
                            >
                               <div onClick={()=>handleBreadcrum(e)} className='  hover:cursor-pointer'> 
                               <div className='  p-2 flex flex-row gap-3   rounded-lg justify-start align-middle'>
                                <div id="active-icon" className=' bg-white dark:text-dark shadow-md rounded-md p-2'>{React.createElement(e?.icon, { size: "20" })}</div>
                                <p className={` ${sidebarOpen ? 'block mt-[5%] font-medium' : 'hidden'} `}>{e.name}</p>
                               </div>
                               </div>
                            </NavLink>
                        ))
                    :null
                }
        </div>
        <div>
                {
                    sidebarOpen ?
                    <>
                    <FaAngleLeft onClick={(()=>handleSideBarStatus())}  className='fixed top-[3vh] left-[16%] lg:left-[16%] md:left-[20%] bg-white h-8 w-8 rounded-full p-1 shadow-lg hover:cursor-pointer hover:bg-purple-500 hover:text-white' />
                    </>
                    :
                    <FaAngleRight onClick={(()=>handleSideBarStatus())}  className='fixed top-[3vh] left-[4%] md:left-[6%] lg:left-[4%] bg-white h-8 w-8 rounded-full p-1 shadow-lg hover:cursor-pointer hover:bg-purple-500 hover:text-white' />
                }
        </div>
        </aside>
        <aside   ref={sideOpen} className={`${mobileSideBar ? 'block fixed z-20 w-[50%] bg-gray-100 h-[100vh] overflow-auto dark:bg-dark-blue' : 'hidden'}`}>
                <div className='  '>
                <div className='flex justify-center h-[10vh]'>
            <img src={logo} className=' h-[50px] my-2' alt="" />
        </div>
        <div id="sidebar" className='navItems mt-10 md:mt-5 '>
                {
                    navItem.length > 0 ? 
                        navItem.map((e:any,i:any)=>(
                            <NavLink 
                            to={e?.href}
                            className={`  flex items-center mx-2 align-middle dark:text-gray-300  rounded-md text-gray-800 my-3`}
                            end={e?.isEnd ? true : false}
                            key={i}
                            >
                               <div onClick={()=>handleBreadcrum(e)} className='  hover:cursor-pointer'> 
                               <div className='  p-2 flex flex-row gap-3   rounded-lg justify-start align-middle'>
                                <div id="active-icon" className=' bg-white text-dark shadow-md rounded-md p-2'>{React.createElement(e?.icon, { size: "20" })}</div>
                                <p className={` block mt-[5%]  font-medium `}>{e.name}</p>
                               </div>
                               </div>
                            </NavLink>
                        ))
                    :null
                }
        </div>
                </div>
        </aside>
    
    </>
  )
}
