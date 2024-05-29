"use client";
import React, { Suspense, useEffect, useState } from "react";
import CartProductElement from "./cartProduct";
import Loading from "../loading";
import { getTotalPrice } from "../lib/utils";
import CartInterface from "../lib/interfaces/CartInterface";
const page = () => {
  const [products, setProducts] = useState<Array<CartInterface>>([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    const parsedProducts = JSON.parse(sessionStorage.Products)
    const _totalPrice = getTotalPrice()
    setTotalPrice(_totalPrice)
    setProducts(parsedProducts)
  }, [])
  return (
    <div>
      <h1 className="text-5xl text-thirdColor text-center mb-5">Shopping Cart </h1>
      <h1 className="text-red-500 text-5xl"> TotalPrice: {totalPrice.toFixed(2)}$</h1>
      <Suspense fallback={<Loading />}>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
          {
            products ? products.map((product) => (
              <CartProductElement key={product.ID} productId={product.ID} count={product.Count} />
            )) : <h1> Empty cart</h1>
          };
        </div>
      </Suspense>
    </div>
  )
}
export default page;
