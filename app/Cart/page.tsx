"use client";
import React, { Key, useEffect, useState } from "react";
interface KVInterface {
  key: string,
  value: string | null
}
const page = () => {
  const [products, setProduct] = useState<Array<KVInterface>>()
  useEffect(() => {
    const keys = Object.keys(window.localStorage)
    const kv: KVInterface[] = keys.map(key => {
      const value = window.localStorage.getItem(key)
      return { key, value }
    })
    setProduct(kv)
  }, [window.localStorage])
  return (
    <div>
      {
        products?.map((product: KVInterface, index: Key) => {
          return <div key={index} >Product Name:{product.key} ,Number :{product.value}</div>
        })
      }
    </div>
  );
};

export default page;
