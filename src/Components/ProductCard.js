import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessSnackbar from "../Components/SuccessSnackbar";
import { Star, StarBorder } from "@mui/icons-material";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [addedToCart, setAddedToCart] = useState(false);
  const navigateToProduct = (productId) => {
    navigate(`/product/${productId}`);
  };



  return (
    <div className="flex bg-white px-5 pb-3 shadow-sm flex-col gap-2 cursor-pointer hover:border border-gray-400">
      <div >
        <img
          onClick={() => navigateToProduct(product.productId)}
          src={require(`../Assets/${product.image}`)}
          style={{ height: "200px", width: "100%", objectFit: "contain" }}
          alt="product-image"
          className=" border-gray-700"
        />
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h4 className="text-gray-900 text-lg font-medium">{product.name}</h4>
          <h3 className="text-gray-800 text-base font-normal">
            {product.price}$
          </h3>
          <div className="flex text-yellow-500">
          {[...Array(product.rating)].map((index, item) => <Star key={index} style={{ fontSize: "22px" }} />)}
              {[...Array(5 - product.rating)].map((index, item) => <StarBorder key={index} style={{ fontSize: "22px" }} />)}
          </div>
        </div>
        {/* {!addedToCart && (
          <div
            onClick={() => addToCart()}
            className="rounded-full p-2 text-white bg-indigo hover:bg-slate-600"
          >
            <Add />
          </div>
        )}
        {addedToCart && (
          <div className="rounded-full p-2 text-white bg-green-500 ">
            <Check />
          </div>
        )} */}
      </div>
      {addedToCart && (
        <SuccessSnackbar message="The item has been added to the cart"
        isOpen={addedToCart}
        onClose={() => setAddedToCart(false)}
        />
      )}
    </div>
  );
};

export default ProductCard;
