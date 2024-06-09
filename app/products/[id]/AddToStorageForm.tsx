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
      <Input type="number" min={1} className=" bg-white  my-1" value={count} onChange={(e) => setCount(e.target.value)} />
      {/* TODO: change button to arrow */}
      <div className="w-full flex gap-1">
        <AddToStorageButton product={product} count={count} disabled={Number(count) < 1} />
        <DeleteFromStorageButton product={product} disabled={getProductCount(product.id) < 1} />
      </div>
    </div>
  )

}
export default AddtoStorageForm 
