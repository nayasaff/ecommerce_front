import React from 'react'
import { Search, ShoppingCart, Favorite } from '@mui/icons-material'

const Navbar = () => {
  console.log(process.env.REACT_LOCAL_HOST)
  return (
    <div className=''>
      <div className='flex justify-around py-3'>
    <div>
        <ul className='flex gap-8'>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </div>

      <h3 className="font-extrabold text-2xl">Shopping</h3>
      <div>
        <ul className='flex gap-6'>
            <li><Search/></li>
            <li><ShoppingCart/></li>
            <li><Favorite/></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
