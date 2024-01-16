import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Categories from '../Components/Categories'
import { Add, Star } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
      const fetchProducts = async () =>{
        try{
          const {data} = await axios.get('http://localhost:3300/products')
          setProducts(data)
        }
        catch(error){
          console.log(error)
        }
      }
      fetchProducts()
  }, [])
  console.log(products)

  const navigateToProduct = (productId) =>{
    navigate(`/product/${productId}`)
  }

  if(!products)
  return <div></div>
 return <div className='mx-12 my-8 flex items-center justify-center' style={{flex : 3.5}}>
    <div className="grid gap-8 grid-cols-4">
      {products.map(product => <div key={product.productId} onClick={()=>navigateToProduct(product.productId)} className='flex bg-white px-5 pb-3 shadow-sm flex-col gap-2 cursor-pointer hover:border border-gray-400'>
           <div className="">
            <img src={require(`../Assets/${product.image}`)} style={{ height: '200px', width: '100%'}} alt="product-image" className=' border-gray-700'/>
          </div>
          <div className='flex justify-between items-end'>
            <div>
              <h4 className='text-gray-900 text-lg font-medium'>{product.name}</h4>
              <h3 className='text-gray-800 text-base font-normal'>{product.price}$</h3>          
                <div className='flex text-indigo'>
                <Star style={{fontSize : '20px'}}/>
                <Star style={{fontSize : '20px'}}/>
                </div>

            
            </div>
            <div className='rounded-full p-2 text-white bg-indigo'>
                  <Add/>
                </div>
          </div>
      </div>)}
    </div>
  </div>
}

const HomePage = () => {

  return (
    <>
      <img src={require("../Assets/Banner 2.jpg")} className="fit shadow-md mb-6" style={{width : "100%", height : "350px", objectFit: "cover"}}/>
      <div className='flex'>
        <Categories/>
        <Products/>
      </div>
    </>
  )
  
}

export default HomePage
