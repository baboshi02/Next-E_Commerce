import ProductElement from "../components/productElement";
import { ProductType } from "../lib/interfaces/ProductType";


export const Products = async () => {
  await new Promise(res => setTimeout(res, 3000))
  let products;
  try {
    products = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
  } catch (err: any) {
    console.log(err?.message);
    return <h1>Error: {err.message}</h1>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
        {products.map((product: ProductType) => (
          <ProductElement product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
