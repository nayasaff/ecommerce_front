import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Star } from "@mui/icons-material";
import SuccessSnackbar from "../Components/SuccessSnackbar";
import ErrorSnackbar from "../Components/ErrorSnackbar";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3300/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const addToCart =  () => {
    if(localStorage.getItem("cart") === null){
      localStorage.setItem("cart", JSON.stringify([product]))
      setOpenSnackbar(true)
    }
    else{
      let cart = JSON.parse(localStorage.getItem("cart"))
      const existingItem = cart.find((item) => item.productId === product.productId);
      if(existingItem){
        cart = cart.map((item) => item.productId === product.productId ? {...item, quantity: item.quantity + quantity} : item)
      }
      else{
        cart = [...cart, {...product, quantity: quantity}]
      }
        localStorage.setItem("cart", JSON.stringify(cart))
        setOpenSnackbar(true)
      
    }
  }

  const changeQuantity = (e) => {
    if(e.target.value === 'increase'){
      if(quantity < 5)
      setQuantity(prev => prev+1)
    }
    else{
      if(quantity > 1)
      setQuantity(prev => prev-1)
    }
  }


  const buyNow = () => {
    if(localStorage.getItem("cart") === null){
      localStorage.setItem("cart", JSON.stringify([product]))
    }
    else{
      let cart = JSON.parse(localStorage.getItem("cart"))
      console.log(cart)
      const existingItem = cart.find((item) => item.productId === product.productId);
      if(existingItem){
        cart = cart.map((item) => item.productId === product.productId ? {...item, quantity: item.quantity + quantity} : item)
      }
      else{
        cart = [...cart, {...product, quantity: quantity}]
      }
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    navigate('/cart')
  }

  if (!product) return <div></div>;
  return (
    <div>
      {/************image div**************/}
      <div className=" mx-auto block sm:flex justify-start items-center" style={{height : "calc(100vh - 64px)"}}>
        <div
         
          className="sm:bg-whitesmoke mt-0 sm:mt-4 bg-gray-200 left-column sm:w-7/12 relative"
        >
          <img
            src={require(`../Assets/${product.image}`)}
            alt="worldcupPic"
            width="450px"
            height="300px"
            className="absolte sm:p-0 p-6"
            style={{ height: "400px", width: "100%", objectFit: "contain" , transition: "all 0.3s ease" }}
          />
        </div>

        <div className=' sm:w-4/12 p-6 mt-5'>
          {/****************Match Details**************/}
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <div class="product-description border-b border-solid mt-1 mb-5">
            <div className="flex text-yellow-500">
              <Star style={{ fontSize: "22px" }} />
              <Star style={{ fontSize: "22px" }} />
              <Star style={{ fontSize: "22px" }} />
              <Star style={{ fontSize: "22px" }} />
              <Star style={{ fontSize: "22px" }} />
              <div className="ml-1 text-gray-700">(100+ Reviews) </div>
            </div>
            <p className="text-lg mt-6">
              This is the description of the notebook
            </p>
            <p className="my-8 text-xl font-medium">${product.price}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-normal text-lg">Quantity</p>
            <div
              class="flex items-center justify-center border rounded-md shadow-sm border-gray-400 text-center overflow-hidden"
              style={{ fontSize: "18px" }}
            >
              <button
                class="px-2 border-r border-gray-400  font-bold"
                type="button"
                onClick={(e)=> changeQuantity(e)}
                value="decrease"
              >
                –
              </button>
              <p
                class=" font-bold px-7"
                type="number"
                style={{ lineHeight: 1 }}
              >
                {quantity}
              </p>
              <button
                class=" border-l px-2 border-gray-400 text-center font-bold"
                type="button"
                onClick={(e)=> changeQuantity(e)}
                value="increase"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 mt-5">
            <button 
            onClick={()=> addToCart()}
            class="bg-primary rounded-lg hover:bg-red-400 text-white font-bold py-2 px-4 border">
              Add to Cart
            </button>
            <button onClick={()=> buyNow() } class="text-primary rounded-lg hover:bg-gray-200  font-bold py-2 px-4 border border-primary">
              Buy Now
            </button>
          </div>
        </div>
        <SuccessSnackbar message="The item has been added to the cart" isOpen={openSnackbar} onClose={()=>setOpenSnackbar(false)}/>
        <ErrorSnackbar message={errorMessage} isOpen={errorMessage} onClose={()=> setErrorMessage(null)}/>
      </div>
    </div>
  );
};

export default Product;
