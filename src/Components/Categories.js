import { Settings } from '@mui/icons-material'
import React from 'react'

const Categories = () => {
  return (
    <div className='my-8 pl-6' style={{flex : 1}}>
      <h3 className='font-bold text-xl'>CATEGORY</h3>
      <div className="py-4 overflow-y-auto space-y-2 font-medium">   
        <div
            className={`cursor-pointer flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}>
            <img src={require("../Assets/accessories icon.png")} style={{height : "35px", width : "35px"}}/>
            <span className="ml-3 block text-gray-900">Accessories</span>
        </div>
        <div
            className={`cursor-pointer flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}>
            <img src={require("../Assets/beauty icon.png")} style={{height : "35px", width : "35px"}}/>
            <span className="ml-3 block text-gray-900">Beauty</span>
        </div>
        <div
            className={`cursor-pointer flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}>
            <img src={require("../Assets/dress icon.png")} style={{height : "35px", width : "35px"}}/>
            <span className="ml-3 block text-gray-900">Clothes</span>
        </div>
        <div
            className={`cursor-pointer flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}>
           <img src={require("../Assets/mobile icon.png")} style={{height : "35px", width : "35px"}}/>
            <span className="ml-3 block text-gray-900">Electronics</span>
        </div>
        <div
            className={`cursor-pointer flex items-center p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}
        > 
            <img src={require("../Assets/home icon.png")} style={{height : "35px", width : "35px"}}/>
            <span className="flex-1 ml-3 block whitespace-nowrap text-gray-900">
            Home
            </span>
        </div>         
          </div>
    </div>
  )
}

export default Categories
