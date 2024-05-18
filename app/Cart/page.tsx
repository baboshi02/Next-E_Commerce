"use client";
import React, { useEffect, useState } from "react";
const page = () => {
  const [products, setProducts] = useState<Array<string>>([])
  const parsedProducts = typeof window !== "undefined" && sessionStorage.Products ? JSON.parse(sessionStorage.Products) : {}
  useEffect(() => {
    setProducts(Object.keys(parsedProducts))
  }, [])
  return (
    <div>
      <h1 className="text-3xl text-thirdColor text-center mb-5">Products
      </h1>
      {
        products.length > 0 ? products.map((product, index) => (
          <div key={index}>productId:{product}, Number:{parsedProducts[product]}</div>
        )) : <h1>Empty Cart</h1>
      }
    </div>
  )
};

export default page;
