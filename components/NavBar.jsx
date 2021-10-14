import React, { useState } from "react";
import Link from "next/link";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="shadow fixed bg-white inset-x-0">
      <div className="flex justify-between items-center container m-auto px-5 ">
        <div className="logo py-5 font-bold text-xl">IDEAUX</div>
        <ul className="hidden gap-3 md:flex">
          <li className="p-5">
            <Link href="/">Home</Link>
          </li>
          <li className="p-5">
            <Link href="/about">About us</Link>
          </li>
          <li className="p-5">
            <Link href="#">Our works</Link>
          </li>
        </ul>
        {/* Ham menu */}
        <button className="md:hidden" onClick={()=>{
            setIsOpen(!isOpen)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile screen */}
      <ul onClick={()=>setIsOpen(false)} className={isOpen?"":"hidden"}>
          <li><Link href="/" className="px-5 py-2 hover:bg-gray-400 block">Home</Link></li>
          <li><Link href="/about" className="px-5 py-2 hover:bg-gray-400 block">About us</Link></li>
          <li><Link href="#" className="px-5 py-2 hover:bg-gray-400 block">Our works</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
