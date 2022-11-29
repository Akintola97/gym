import React from 'react'
import { Link } from 'react-router-dom'



const VerticalNav = ({handleChange, nav}) => {
  return (
    <div className='fixed h-screen w-1/4 bg-black top-20 text-white' onClick={handleChange}>
    <ul className= {!nav ? 'hidden' : 'fixed bg-black w-full h-full flex left-0 flex-col justify-center md:hidden'}>
        <li className='p-2 hover:text-red-500'><Link to = '/'>Home</Link></li>
        <li className='p-2 hover:text-red-500'><Link to = '/Team'>Team</Link></li>
        <li className='p-2 hover:text-red-500'><Link to = '/Facility'>Facility</Link></li>
        <li className='p-2 hover:text-red-500'><Link to = '/Memberships'>Memberships</Link></li>
        <li className='p-2 hover:text-red-500'><Link to = '/Coaching'>Coaching</Link></li>
        <li className='p-2 hover:text-red-500'><Link to = '/Rhino'>Rhino's Revenge</Link></li>
        <li className='p-2 hover:text-red-500'><Link to = '/Boxing'>Boxing</Link></li>
    </ul> 
</div>
  )
}

export default VerticalNav

