import Image from "next/image";
import { redirect } from "next/navigation";

export interface Product {
  id: Number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: any;
}

export default async function Home() {
  const products = await fetch(
    "https://fakestoreapi.com/products?limit=20"
  ).then((res) => res.json());
  // To create loading effect
  // await new Promise((res) => setTimeout(() => res("done"), 10000));
  return (
    <div className="grid grid-cols-3 mt-2 gap-2">
      {products.map((product: Product) => (
        <div className="flex flex-col  items-center p-2 border-black border-2 hover:cursor-pointer hover:bg-thirdColor group hover ">
          <h1>{product.title}</h1>
          <Image
            src={product.image}
            alt={product.description}
            width={150}
            height={150}
            className="w-[200px] h-[200px] "
            // onClick={() => redirect(`/products/${product.id}`)}
          />
        </div>
      ))}
    </div>
  );
}
