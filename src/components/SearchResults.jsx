import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callAPI } from "../Utils/CallApi";

import { IN_CURRENCY } from "../Utils/constants";
import { ProductDetails } from "./";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="w-full max-w-[1300px] mx-auto pt-4 px-2">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-auto sm:h-[250px] grid grid-cols-1 sm:grid-cols-12 rounded mt-1 mb-1">
                <div className="sm:col-span-2 p-4 bg-gray-200 flex justify-center items-center">
                  <img
                    className="m-auto max-h-[120px] sm:max-h-none"
                    src={product.image_small}
                  />
                </div>
                <div className="sm:col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-lg sm:text-xl xl:text-2xl pt-1">
                      {IN_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
