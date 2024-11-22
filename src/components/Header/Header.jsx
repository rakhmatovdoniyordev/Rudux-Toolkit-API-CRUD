import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className='bg-[#141414]'>
        <div className="container__person">
            <nav className='w-full h-20 flex items-center justify-between'>
                <ul className='flex gap-14 text-[18px] font-bold'>
                    <li>
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add"}>
                            Add Twit
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <NavLink to={"/wishlist"}>
                        <FaRegHeart className='text-[20px]'/>
                    </NavLink>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header