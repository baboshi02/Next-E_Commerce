import Product from "./Products";

export interface ProductType {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: any;
}

export default async function Home() {
  let products;
  try {
    products = await fetch("https://fakestoreapi.com/products?limit=20").then(
      (res) => res.json()
    );
  } catch (err: any) {
    console.log(err?.message);
  }
  // To create loading effect
  // await new Promise((res) => setTimeout(() => res("done"), 10000));
  return (
    <div className="grid grid-cols-3 mt-2 gap-2">
      {products.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
