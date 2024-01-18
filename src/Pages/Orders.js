import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

  const [orders, setOrders] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3300/orders')
    .then(res => res.json())
    .then(data => setOrders(data))
  }, [])

  return (
    <div className="px-8 mt-8 w-3/4 mx-auto ">
      <h2 className="font-extrabold text-4xl mb-6">Your Orders</h2>
      {orders.map( order => <div className="border border-gray-300 rounded-lg">
        <div className="flex justify-between px-6 py-6">
          <div className="flex gap-16 items-center">
            <div className="flex flex-col">
              <p className="opacity-70">Order Placed</p>
              <p>{order.dateTime}</p>
            </div>
            <div className="flex flex-col">
              <p className="opacity-70">Total Amount</p>
              <p>${order.totalAmount}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="">Order#{order.orderId}</p>
            <p className="underline text-blue-700">View Order Details</p>
          </div>
        </div>
        <div className="flex border-t border-t-gray-300 justify-between px-6 py-6 items-start">
          <div>
          {order.products.map(productOfOrder => <div className="mt-12 mb-12 flex items-center gap-5">
            <div className="flex items-center">
              <div className="py-1 px-2 bg-slate-300 rounded-lg">{productOfOrder.quantity}</div>
              <img
                src={require(`../Assets/${productOfOrder.image}`)}
                style={{ height: "150px", width: "150px" }}
              />
            </div>
            <div className="">
              <p className="font-semibold text-xl">{productOfOrder.name}</p>
              <p>Total Price : {(productOfOrder.quantity * productOfOrder.price).toFixed(1)}$</p>
              <div className="flex gap-3 mt-4">
              <button 
       
            class="bg-primary rounded-lg hover:bg-red-400 text-white font-bold py-2 px-4 border">
              Buy it Again
            </button>
            <Link to={`/prdoduct/${productOfOrder.productId}`}><button  class="text-primary rounded-lg hover:bg-gray-200  font-bold py-2 px-4 border border-primary">
              View Item
            </button></Link>
            </div>
            </div>
          </div>)}
          </div>
          <h3 className="text-2xl whitespace-break-spaces font-bold">
            {order.status}
          </h3>
        </div>
      </div>)}
    </div>
  );
};

export default Orders;
