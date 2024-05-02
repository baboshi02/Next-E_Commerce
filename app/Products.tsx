import React from "react";
import Image from "next/image";
import Link from "next/link";
export interface ProductType {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link
      className="flex flex-col flex-nowrap  items-center p-2  hover:cursor-pointer group hover:text-secondaryColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden"
      href={`/products/${product.id}`}
    >
      <Image
        src={product.image}
        alt={"item is" + product.title}
        width={150}
        height={150}
        className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor group-hover:w-[210px] group-hover:h-[210px] transition-all duration-500"
      />
      <p>{product.title}</p>
      <p className="text-lg  text-thirdColor group-hover:text-blue-700">
        {product.price}$
      </p>
    </Link>
  );
};

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
  // await new Promise((res) => setTimeout(res, 3000));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
      {products.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
export default Products;
