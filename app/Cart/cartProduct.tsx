import Image from "next/image";
import { useRouter } from "next/navigation";
import CartInterface from "../lib/interfaces/CartInterface";
const CartProductElement = ({ product }: { product: CartInterface }) => {
  const router = useRouter()
  return (
    <>
      {
        product &&
        <div onClick={() => router.push(`/products/${product.id}`)} className="flex flex-col flex-nowrap hover:cursor-pointer  items-center p-2   group hover:text-thirdColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden">
          <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor  transition-all duration-500" />
          <p>{product.title}</p>
          {Number(product.price).toFixed(2)}$
          <p className="text-lg  text-thirdColor group-hover:text-secondaryColor transition duration-300">
          </p>
          <h1>Count: {product.count}</h1>
        </div>
      }

    </>
  )

}
export default CartProductElement
