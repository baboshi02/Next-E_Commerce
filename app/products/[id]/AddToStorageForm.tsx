'use client'
import { Input } from "@/components/ui/input"
import AddToStorageButton from "@/app/components/addToStorageButton";
import { ProductType } from "@/app/lib/interfaces/ProductType";
import { useEffect, useState } from "react";
import { getProductCount } from "@/app/lib/utils";
import DeleteFromStorageButton from "@/app/components/deleteFromStorageButton";
const AddtoStorageForm = ({ product }: { product: ProductType }) => {
  const [count, setCount] = useState("")
  useEffect(() => {
    const curCount = String(getProductCount(product?.id))
    setCount(curCount)
  }, [])
  console.log(count)
  return (
    <div className="w-min text-center">
      <AddToStorageButton product={product} count={count} disabled={Number(count) < 1} />
      {/* TODO: change button to arrow */}
      <Input type="number" min={1} className=" bg-white w-full my-1" value={count} onChange={(e) => setCount(e.target.value)} />
      <DeleteFromStorageButton product={product} disabled={getProductCount(product.id) < 1} />
    </div>
  )

}
export default AddtoStorageForm 
