import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { IN_CURRENCY } from "../Utils/constants";
import {
  removeFromCart,
  decrementInCart,
  incrementInCart,
} from "../redux/cartSlice";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-amazonclone-background">
      <div className="w-full max-w-[1500px] mx-auto pt-4 sm:pt-8 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          <div className="lg:col-span-6 bg-white mr-0 lg:mr-3">
            <div className="text-xl sm:text-2xl xl:text-3xl m-4 ">
              Shopping Cart
            </div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-12 divide-y divide-gray-400 mr-0 sm:mr-4 ">
                    <div className="sm:col-span-10 grid grid-cols-1 sm:grid-cols-8 divide-y sm:divide-y-0 divide-gray-400">
                      <div className="sm:col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto max-h-[120px] sm:max-h-none"
                            src={product.image_small}
                          />
                        </Link>
                      </div>
                      <div className="sm:col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} ratings={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 onhover-bg-slate-400"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                        </div>
                        <div className="grid grid-cols-3 w-20 text-center">
                          <div
                            className="text-xl xl:text-2xl bg-slate-400 rounded cursor-pointer"
                            onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }
                          >
                            -
                          </div>
                          <div className="text-lg xl:text-xl bg-slate-200 ">
                            {product.quantity}
                          </div>
                          <div
                            className="text-xl xl:text-2xl bg-slate-400 rounded cursor-pointer"
                            onClick={() =>
                              dispatch(incrementInCart(product.id))
                            }
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                        {IN_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              Subtotal({itemsNumber}items):
              <span className="font-semibold">
                {IN_CURRENCY.format(subtotal)}
              </span>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded h-[200px] sm:h-[250px] p-4 sm:p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-xl text-left mb-4 mr-4">
              Subtotal({itemsNumber}items):
              <span className="font-semibold">
                {IN_CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
