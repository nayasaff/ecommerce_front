import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import ProductCard from "../Components/ProductCard";


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const location = useLocation().search;
  const search = new URLSearchParams(location).get("search");



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3300/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (search === null || search === undefined || search === "") {
      return;
    }
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const filterCategory = (categoryName) => {
    setCategory(categoryName);
    setFilteredProducts(
      products.filter((product) => product.category === categoryName)
    );
  };

  return (
    <>
      {/* <img
        src={require("../Assets/Banner 1.jpg")}
        className="fit shadow-md mb-6"
        style={{ width: "100%", height: "350px", objectFit: "fill" }}
      /> */}
      <div className="flex flex-col sm:flex-row">
        {/**CATEGORIES */}
        <div className="my-8 pl-6" style={{ flex: 1 }}>
         
          <h3 className="font-bold text-xl">CATEGORY</h3>
          <div className="py-4 overflow-y-auto flex gap-2 flex-wrap sm:block space-y-2 font-medium">
            <div
            onClick={() => filterCategory("All")}
              className={`cursor-pointer flex items-center p-2 text-gray-500 ${category === "All" && "text-gray-900 bg-gray-300"} hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}
            >
              <img
                src={require("../Assets/all.png")}
                style={{ height: "35px", width: "35px" }}
              />
              <span
                onClick={() => filterCategory("All")}
                className="ml-3 block text-gray-900"
              >
                All
              </span>
            </div>
            <div
            onClick={() => filterCategory("Accessories")}
              className={`cursor-pointer flex items-center p-2 text-gray-500 ${category === "Accesssories" && "text-gray-900 bg-gray-300"} hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}
            >
              <img
                src={require("../Assets/accessories icon.png")}
                style={{ height: "35px", width: "35px" }}
              />
              <span
                onClick={() => filterCategory("")}
                className="ml-3 block text-gray-900"
              >
                Accessories
              </span>
            </div>
            <div
            onClick={() => filterCategory("Beauty")}
              className={`cursor-pointer flex items-center p-2 text-gray-500 hover:text-gray-900 ${category === "Beauty" && "text-gray-900 bg-gray-300"} rounded-lg dark:text-white hover:bg-gray-300 group`}
            >
              <img
                src={require("../Assets/beauty icon.png")}
                style={{ height: "35px", width: "35px" }}
              />
              <span className="ml-3 block text-gray-900">Beauty</span>
            </div>
            <div
            onClick={() => filterCategory("Fashion")}
              className={`cursor-pointer flex items-center ${category === "Fashion" && "text-gray-900 bg-gray-300"} p-2 text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}
            >
              <img
                src={require("../Assets/dress icon.png")}
                style={{ height: "35px", width: "35px" }}
              />
              <span className="ml-3 block text-gray-900">Clothes</span>
            </div>
            <div
            onClick={() => filterCategory("Electronics")}
              className={`cursor-pointer flex items-center p-2 ${category === "Electronics" && "text-gray-900 bg-gray-300"} text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}
            >
              <img
                src={require("../Assets/mobile icon.png")}
                style={{ height: "35px", width: "35px" }}
              />
              <span className="ml-3 block text-gray-900">Electronics</span>
            </div>
            <div
            onClick={() => filterCategory("Home")}
              className={`cursor-pointer flex items-center p-2 ${category === "Home" && "text-gray-900 bg-gray-300"} text-gray-500 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 group`}
            >
              <img
                src={require("../Assets/home icon.png")}
                style={{ height: "35px", width: "35px" }}
              />
              <span className="flex-1 ml-3 block whitespace-nowrap text-gray-900">
                Home
              </span>
            </div>
            </div>
      
        </div>

        {!products ? <div></div> :
            <div
            className="mx-12 my-8 flex items-center justify-center"
            style={{ flex: 3.5 }}
          >
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
              {search || category !== "All"
                ? filteredProducts.map((product) => (
                 
                      <ProductCard product={product} key={product.productId}/>
                 
                  ))
                : products.map((product) => (
                    <ProductCard product={product} key={product.productId}/>          
                  ))}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default HomePage;
