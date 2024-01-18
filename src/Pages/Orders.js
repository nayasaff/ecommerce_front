import React, { useEffect, useState } from "react";

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
        <div className="flex border-t border-t-gray-300 justify-between px-6 py-6 items-center">
          {order.products.map(productOfOrder => <div className="mt-5 flex items-center gap-5">
            <div className="flex items-center">
              <div className="py-1 px-2 bg-slate-300 rounded-lg">{productOfOrder.quantity}</div>
              <img
                src={require(`../Assets/${productOfOrder.image}.png`)}
                style={{ height: "160px", width: "160px" }}
              />
            </div>
            <div className="">
              <p className="font-semibold text-xl">{productOfOrder.name}</p>
              <p>Total Price : {(productOfOrder.quantity * productOfOrder.price).toFixed(1)}$</p>
              <div className="flex gap-3 mt-4">
              <button class="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700">
              Buy it Again
            </button>
            <button class="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700">
              View Item
            </button>
            </div>
            </div>
          </div>)}
          <h3 className="text-2xl whitespace-break-spaces font-bold">
            {order.status}
          </h3>
        </div>
      </div>)}
    </div>
  );
};

export default Orders;
