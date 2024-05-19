"use client";
import React, { useEffect, useState } from "react";
import CartProductElement from "./cartProduct";
import { useFetch } from "../hooks/useFetch";
import { ProductType } from "../lib/interfaces/ProductType";
const page = () => {
  const [products, setProducts] = useState<Array<string>>([])
  const parsedProducts = typeof window !== "undefined" && sessionStorage.Products ? JSON.parse(sessionStorage.Products) : {}
  const { response, isError } = useFetch("https://fakestoreapi.com/products")
  useEffect(() => {
    setProducts(Object.keys(parsedProducts))
  }, [])
  return (
    <div>
      <h1 className="text-3xl text-thirdColor text-center mb-5">Products
      </h1>
      {
        products.length > 0 && !isError ? products.map((productId) => {
          const product = response.find((element: ProductType) => element.id == productId)
          return <CartProductElement product={product} count={parsedProducts[productId]} />
        }) : <h1> Empty cart</h1>
      };
    </div>
  )
}
export default page;
