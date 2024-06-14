"use client";
import { useEffect, useState } from "react"
import CartInterface from "../lib/interfaces/CartInterface"
import { deleteAllProducts, getTotalPrice } from "../lib/utils"
import CartProductElement from "./cartProduct"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const Carts = () => {
  const router = useRouter()
  const [products, setProducts] = useState<Array<CartInterface>>([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const parsedProducts = sessionStorage.Products ? JSON.parse(sessionStorage.Products) : []
    setTotalPrice(getTotalPrice())
    setProducts(parsedProducts)
  }, [])
  return (
    <>
      <h1 className="text-red-500 text-5xl mb-2"> {products.length > 0 ? <>TotalPrice: {totalPrice.toFixed(2)}$</> : <>Empty Cart</>}</h1>
      {

        products.length > 0 && <div className="">
          <Button variant={"destructive"} onClick={() => { deleteAllProducts(); router.refresh() }}>
            delete
          </Button >
          <Button onClick={() => router.push("/purchase")}>
            Purchase
          </Button>
        </div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2 gap-2">
        {
          products ? products.map((product) => (
            <CartProductElement key={product.id} product={product}
            />
          )) : <h1> Empty cart</h1>
        }
      </div>
    </>
  )
}
