import React, { useState } from 'react';
import { FaSearch,FaEnvelope,FaBell } from 'react-icons/fa'; 
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MenuItem } from '../datas/menu-item';
import { NavLink } from 'react-router-dom';


const Header = () => {

const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

return (
<div>

    <nav className="bg-white">
    <div className="max-w-screen px-4 py-4 ">
        <div className="flex justify-between">
            <NavLink to={'/'}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xR1OIeBy7ANOV2biceJsrpBDNgJTh7BoyMC3xcgvfg&s" alt="Digitus" className="w-32 h-8" />
            </NavLink>
        <ul className="flex flex-row font-bold mt-0 space-x-10 text-xl mr-52">

            <BsFillPlusCircleFill   className="text-4xl text-red-400 hover:text-red-300 duration-150" />
        
            {MenuItem.map(item => (
               <li key={item.name}>
               <NavLink  to={item.route}>{item.name}</NavLink>
             </li>
            ))}
        </ul>

            <div className="flex space-x-4">
            <button className="flex items-center   hover:text-gray-500">
            <FaSearch className="text-2xl" />
            </button>
            <div className="min-w-0.5 h-6 mt-1.5 bg-gray-400"></div>
            <button className="flex items-center hover:text-gray-500 relative">
      <FaEnvelope className="text-2xl" />
      <span className="absolute -top-1 left-4 block w-5 h-5 bg-red-500 rounded-full text-white text-sm">4</span>
    </button>
    <button className="flex items-center hover:text-gray-500 relative">
    <span className="absolute -top-1 left-4 block w-5 h-5 bg-red-500 rounded-full text-white text-left text-sm">12</span>
            <FaBell  className="text-2xl" />
            </button>
            <div className="min-w-0.5 h-6 mt-1.5 bg-gray-400"></div>
            <div className="relative ml-3">
    <button
    onClick={toggleDropdown}
    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
    <span className="absolute -inset-1.5" />
    <span className="sr-only">Open user menu</span>
    <img
        className="h-8 w-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
    />
    </button>

    {isOpen && (
    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        >
        My Profile
        </a>
        <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        >
        Log out
        </a>
    </div>
    )}
                </div>
                
        </div>

        </div>
    </div>
    </nav>
</div>
);
}

export default Header;

