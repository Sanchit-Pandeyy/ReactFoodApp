import React from 'react'
import Logo from '../../img/Logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-24 bg-yellow-500'>
       <img src={Logo} alt='' className='w-20 h-20'/>
       <div className='flex justify-around w-full font-semibold'>
         <Link className='cursor-pointer'>Home</Link>
         <Link className='cursor-pointer'>About</Link>
         <Link className='cursor-pointer'>Contact</Link>
         <Link className='cursor-pointer'>Cart</Link>
       </div>
    </div>
  )
}

export default Navbar