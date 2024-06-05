import { ProductType } from "../lib/interfaces/ProductType";
import Image from "next/image";
import { useFetch } from "../hooks/useFetch";
import { useRouter } from "next/navigation";
interface CartProps {
  productId: string;
  count: number
}
//TODO: add loading effect
const CartProductElement = ({ productId, count }: CartProps) => {
  const { response, isError } = useFetch<ProductType>(`https://fakestoreapi.com/products/${productId}`)
  const product = response
  const router = useRouter()
  return (
    <>
      {
        !isError ? product &&
          <div onClick={() => router.push(`/products/${product.id}`)} className="flex flex-col flex-nowrap hover:cursor-pointer  items-center p-2   group hover:text-thirdColor hover:bg-primaryColor text-primaryColor transition duration-300 min-h-60 max-h-full   overflow-hidden">
            <Image src={product.image} alt={"item is" + product.title} width={150} height={150} className="w-[200px] h-[200px]  border border-primaryColor group-hover:border-secondaryColor  transition-all duration-500" />
            <p>{product.title}</p>
            {product.price}$
            <p className="text-lg  text-thirdColor group-hover:text-secondaryColor transition duration-300">
            </p>
            <h1>Count: {count}</h1>
          </div> : <h1>Error</h1>
      }

    </>
  )

}
export default CartProductElement
