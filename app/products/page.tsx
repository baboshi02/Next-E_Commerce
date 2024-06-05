import React from "react";
import { ProductType } from "@/app/lib/interfaces/ProductType";
import ProductElement from "../components/productElement";
import { Suspense } from "react";
import Loading from "../loading";
const Products = async () => {

  //await new Promise((res) => setTimeout(res, 2000));
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
  // await new Promise((res) => setTimeout(res, 3000));
  return (
    <>
      <h1 className="text-5xl text-thirdColor text-center mb-5"> Products</h1>
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
          {products.map((product: ProductType) => (
            <ProductElement product={product} key={product.id} />
          ))}
        </div>
      </Suspense>
    </>
  );
};
export default Products;
