import Product from "./Products";

export interface ProductType {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default async function Home() {
  let products;
  try {
    products = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
  } catch (err: any) {
    console.log(err?.message);
    return <h1>Error</h1>;
  }
  // To create loading effect
  // await new Promise((res) => setTimeout(() => res("done"), 10000));
  return (
    <>
      <h1>Products</h1>
      <div className="grid grid-cols-3 mt-2 gap-2">
        {products.map((product: ProductType) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
