import React from 'react'
import SideBar from '../../components/nav/SideBar';
import { Outlet } from "react-router-dom";
import Top from '../../components/nav/Top';
import { useSelector } from 'react-redux';
export default function Admin() {
  const sidebarOpen = useSelector((state:any) => state.commonSlice)
  return (
    <>
    <SideBar />
    <Top  />
    <div className={`${sidebarOpen ? 'pl-[3%] sm:pl-[3%]  md:pl-[25%] lg:pl-[20%] ' : ' pl-[3%] sm:pl-[3%] md:pl-[10%] lg:pl-[8%]' }  pt-[8vh] sm:pt-[8vh] md:pt-[12vh]  text-dark dark:text-white `}>
    <Outlet />
    </div>
    </>
  )
}
