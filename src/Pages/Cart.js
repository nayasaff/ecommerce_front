import { Close } from "@mui/icons-material";
import axios from "axios";
import React, {useState} from "react";

const Cart = () => {

  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")))


  
  return (
    <div>
      <div className="px-8 mt-8">
        <div className="flex items-end gap-8">
          <h2 className="font-extrabold text-4xl text-primary">Shopping Cart</h2>
          <p className="text-base font-normal text-gray-900">{cartItems.length} items</p>
        </div>
        {/* <div className="mt-10">
          <div className="flex justify-between ">
            <p>Image</p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Amount</p>
          </div>
          {
            !cartItems ? <div></div> : 
            cartItems.map(item => {
              return <CartItem item={item} key={item.productId}/>
            })
          }
        </div> */}
        <div className="flex py-2 bg-gray-300 mt-5 text-center grid-cols-6 justify-around">
        <p style={{visibility : "hidden", flex : 1.2}}>Image</p>
            <p className="text-lg font-medium" style={{flex :1}}>Product</p>
            <p className="text-lg font-medium" style={{flex :1}}>Price</p>
            <p className="text-lg font-medium" style={{flex :1}}>Quantity</p>
            <p className="text-lg font-medium" style={{flex :1}}>Total Amount</p>
            <p style={{visibility : "hidden", flex : 1}}>Image</p>
            </div>
            {!cartItems ? <div></div> :
              cartItems.map(item => {
              return <CartItem 
              setCartItems={setCartItems}
              item={item} key={item.productId}/>
            })

            }
       
      </div>
    </div>
  );
};

const CartItem = ({item, setCartItems}) => {

  const increaseQuantity =()=>{
    
    setCartItems(prevState => prevState.map(cartItem => {
      if(cartItem.productId === item.productId){
        return {...cartItem, quantity : cartItem.quantity += 1}
      }
      return cartItem
    }))

    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.map(prevItem => prevItem.productId === item.productId ? prevItem.quantity += 1 : prevItem)
    localStorage.setItem("cart", JSON.stringify(cart))
    
  }

  const removeItem =()=>{
    setCartItems(prevState => prevState.filter(cartItem => cartItem.productId !== item.productId))
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart = cart.filter(prevItem => prevItem.productId !== item.productId)
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const decreaseQuantity =()=>{

    if(item.quantity === 1){
      setCartItems(prevState => prevState.filter(cartItem => cartItem.productId !== item.productId))
      let cart = JSON.parse(localStorage.getItem("cart"))
      cart = cart.filter(prevItem => prevItem.productId !== item.productId)
      localStorage.setItem("cart", JSON.stringify(cart))
      return
    }

    setCartItems(prevState => prevState.map(cartItem => {
      if(cartItem.productId === item.productId){
        return {...cartItem, quantity : cartItem.quantity -= 1}
      }
      return cartItem
    }))
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.map(prevItem => prevItem.productId === item.productId ? prevItem.quantity -= 1 : prevItem)
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  return <div className="flex py-3 text-center border-b border-b-gray-300 border-opacity-60 border-solid grid-cols-6 justify-around items-center">
    <div className="mt-7" style={{flex : 1.2}}>
      <img className="mx-auto" src={require(`../Assets/${item.image}`)} style={{height: "120px", width: "120px"}}/>
    </div>
    <div  style={{flex : 1}}>
      <p>{item.name}</p>
    </div>
    <div style={{flex : 1}}>
      <p>{item.price}</p>
    </div>
    <div
        className="flex items-center justify-center"
        style={{ fontSize: "18px", flex :1}}
      >
        <div className="border rounded-md shadow-sm border-gray-400 font-normal">
        <span
          class="px-2 border-r cursor-pointer border-gray-400"
          type="button"
          onClick={()=> decreaseQuantity()}
          value="decrease"
        >
          –
        </span>
        <span
          class=" px-7"
          type="number"
        >
          {item.quantity}
        </span>
        <span
          class=" border-l px-2 cursor-pointer border-gray-400 text-center"
          type="button"
          onClick={()=> increaseQuantity()}
          value="increase"
        >
          +
        </span>
        </div>
      </div>
    <div style={{alignSelf : "center", flex : 1}}>
      <p className="">{(item.price * item.quantity).toFixed(1)}</p>
    </div>
    <div onClick={()=> removeItem()}  className="cursor-pointer" style={{flex :1}}>
      <Close style={{fontSize : "23px"}}/>
    </div>
    
  </div>
  ;
};

const Payment = () => {};

export default Cart;
