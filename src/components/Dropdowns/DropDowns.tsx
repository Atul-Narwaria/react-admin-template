import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaAngleDown,FaAngleUp  } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import {  useSelector } from 'react-redux';
function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

export default function DropDowns(props: {
    children?: any;
    border?:any;
    icon?:any;
  }) {
    const [open, setOpen] = useState(false);
    return (
        <Menu as="div" className="relative inline-block text-left" >
          <Menu.Button className={`hover:cursor-pointer grid place-content-center grid-cols-2 gap-1 `}  onClick={(()=>setOpen(!open))} >
          {props?.children[0]}
          {
            props.icon ? 
            open ? 
            <FaAngleUp onClick={(()=>setOpen(!open))}  className="text-md mt-[5px] text-gray-400 " aria-hidden="true" />
            :
            <FaAngleDown onClick={(()=>setOpen(!open))} className=" text-md mt-[5px] text-gray-400" aria-hidden="true" />
             : null
          }
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
              {props?.children[1]}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )
}
