import React, {useState} from 'react'
import { Search, ShoppingCartTwoTone, Favorite } from '@mui/icons-material'
import { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Menu } from '@mui/material'

const Navbar = () => {
  console.log(process.env.REACT_LOCAL_HOST)
  const searchRef = useRef()
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)


  const handleSearch = () => {
    if(searchRef.current.value == null || searchRef.current.value.trim() === '')
    return
    navigate(`/home?search=${searchRef.current.value}`)
    
  }

  return (
    <nav class=" border-gray-200 bg-primary text-white dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <button
    onClick={()=> setShowMenu(!showMenu)}
  
    type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
       
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class={`hidden w-full md:block md:w-auto`} id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/home" class="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/orders" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0">Orders</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">About</a>
        </li>
      </ul>
    </div>
    <a class="inline-flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Shopping</span>
    </a>
    <div className='flex gap-2 items-center'>
        <input onKeyDown={(e)=> {if(e.key === 'Enter') handleSearch()}} onClick={()=> handleSearch()} ref={searchRef} type="text" id="small-input" class="hidden p-2 lg:block text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 focus:border"/>
        <ul className='flex gap-6'>
            <li className=' cursor-pointer'><Search/></li>
            <Link to='/cart'><li className=' cursor-pointer'><ShoppingCartTwoTone/></li></Link>
            <li className=" cursor-pointer"><Favorite/></li>
            <li className='cursor-pointer sm:hidden inline'><Menu/></li>
        </ul>
      </div>
      {showMenu && <div class={` w-full`} id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/home" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/orders" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Orders</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
        </li>
      </ul>
    </div>}
  </div>
</nav>
  )
}

export default Navbar
