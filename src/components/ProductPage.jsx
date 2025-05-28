import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { callAPI } from "../Utils/CallApi";
import ProductDetails from "./ProductDetails";
import { IN_CURRENCY } from "../Utils/constants";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("1");

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loding Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4  ">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} />
            </div>
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg at-3">
                {product.description}
              </div>
            </div>
            <div className="col-span-2 p-4 bg-white">
              <div className="text-xl xl:text-2xl text-right text-red-700 font-semibold">
                {IN_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg text-right text-gray-500  font-semibold">
                {" "}
                MRP:
                <span className="line-through">
                  {IN_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                Free Return
              </div>
              <div className="text-sm xl:text-base  text-blue-500 font-semibold mt-1">
                Free Delivery
              </div>
              <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1 ">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 bg-white border rounded-md focus:border-indigo-600 "
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="btn"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
