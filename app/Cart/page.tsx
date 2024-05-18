"use client";
import React, { useEffect, useState } from "react";
const page = () => {
  const [products, setProducts] = useState<Array<string>>([])
  const parsedProducts = typeof window !== "undefined" ? JSON.parse(localStorage.Products) : {}
  useEffect(() => {

    setProducts(Object.keys(parsedProducts))
  }, [])
  return (
    <div>
      {
        products.map((product, index) => (
          <div key={index}>Name:{product}, Number:{parsedProducts[product]}</div>
        ))
      }
    </div>
  )
};

export default page;
