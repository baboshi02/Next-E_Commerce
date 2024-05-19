import { ProductType } from "../lib/interfaces/ProductType";
interface CartProps {
  product: ProductType | undefined;
  count: string
}

const CartProductElement = ({ product, count }: CartProps) => {
  return <div key={product?.id}>Product Name:{product?.title}, Count:{count}</div>

}
export default CartProductElement
