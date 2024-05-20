"use client";
import React, { useEffect, useState } from "react";
import CartProductElement from "./cartProduct";
const page = () => {
  const [products, setProducts] = useState<Array<string>>([])
  const parsedProducts = typeof window !== "undefined" && sessionStorage.Products ? JSON.parse(sessionStorage.Products) : {}
  useEffect(() => {
    setProducts(Object.keys(parsedProducts))
  }, [])
  return (
    <div>
      <h1 className="text-3xl text-thirdColor text-center mb-5">Products </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
        {
          products ? products.map((productId) => (
            <CartProductElement key={productId} productId={productId} count={parsedProducts[productId]} />
          )) : <h1> Empty cart</h1>
        };
      </div>
    </div>
  )
}
export default page;
