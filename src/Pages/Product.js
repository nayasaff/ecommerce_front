import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "@mui/icons-material";

const Product = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState()

    useEffect(()=>{
        const fetchProduct = async () =>{
        
            try{
                const response = await axios.get(`http://localhost:3300/products/${productId}`)
                setProduct(response.data)
            }
            catch(error){
                console.log(error)
            }
        
        }
        fetchProduct()
    }, [])

    if(!product)
    return <div></div>
  return (
    <div>
      {/************image div**************/}
      <div className="reservation--container mx-auto p-4 flex justify-center items-center">
        <div style={{ marginTop: "1rem", width : '55%' }} className="left-column relative">
          <img
            src={require(`../Assets/${product.image}`)}
            alt="worldcupPic"
            width="450px"
            height="300px"
            className="absolte" 
            style={{left : "10%", top : "13%", transition : "all 0.3s ease"}}
          />
        </div>

        <div style={{width : '30%'}}>
          {/****************Match Details**************/}
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <div class="product-description border-b border-solid mt-1 mb-5">
            <div className="flex text-indigo">
                <Star style={{fontSize : '22px'}}/>
                <Star style={{fontSize : '22px'}}/>
                <Star style={{fontSize : '22px'}}/>
                <Star style={{fontSize : '22px'}}/>
                <Star style={{fontSize : '22px'}}/>
                <div className="ml-1 text-gray-700">(100+ Reviews) </div>
            </div>
            <p className='text-lg mt-6'>This is the description of the notebook</p>
            <p className="my-8 text-xl font-medium">${product.price}</p>
          </div>

            <div className="flex justify-between items-center">
                <p className="font-normal text-lg">Quantity</p>
                <div class="flex items-center justify-center border rounded-md shadow-sm border-gray-400 text-center overflow-hidden" style={{fontSize : "18px"}}>
	                <button class="px-2 border-r border-gray-400  font-bold"  type="button">–</button>
                    <p class=" font-bold px-7" type="number" style={{lineHeight : 1}}>1</p>
                    <button class=" border-l px-2 border-gray-400 text-center font-bold" type="button">+</button>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2 mt-5">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add to Cart
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Buy Now
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
