import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/indmoney-logo.png";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <div className='w-11/12 ml-5 mt-5 pt-10 mb-4 pb-3 border-b-[0.7px] border-gray-200'>
        <div className='flex justify-between'>
            {/* IND money logo */}
            <div>
              <Link to="/">
                <img src={logo} 
                      alt='logo' 
                      width={50} height={50} 
                      loading='lazy' 
                      className='rounded-lg'
                      />
              </Link>
            </div>
            <div className='flex items-center ml-auto space-x-3'>
                {/* Login button */}
                <div className='px-2.5 py-1 my-2 text-green-500 bg-white border border-green-500 rounded-full transition-all duration-100 shadow-one'>
                  Log In
                </div>
                {/* Icons */}
                <TfiHeadphoneAlt size={25} className='text-gray-500'/>
                <CiSearch size={25} className='text-gray-500' />
                {/* Sidebar */}
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default Navbar