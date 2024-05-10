import React from "react";
import { ProductType } from "@/app/lib/interfaces/ProductType";
import ProductElement from "./productElement";
const Products = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  console.log("rendered baboshi");
  let products;
  try {
    products = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
  } catch (err: any) {
    console.log(err?.message);
    return <h1>Error: {err.message}</h1>;
  }
  // To Create Loading Effecr
  await new Promise((res) => setTimeout(res, 3000));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
      {products.map((product: ProductType) => (
        <ProductElement product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Products;
