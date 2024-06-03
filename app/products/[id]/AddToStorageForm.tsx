'use client'
import { Input } from "@/components/ui/input"
import AddToStorageButton from "@/app/components/addToStorageButton";
import { ProductType } from "@/app/lib/interfaces/ProductType";
import { useState } from "react";
const AddtoStorageForm = ({ product }: { product: ProductType }) => {
  const [count, setCount] = useState<string>("")
  console.log(count)
  return (
    <>
      <AddToStorageButton product={product} count={count} />
      {/* TODO: change button to arrow */}
      <Input type="number" className="w-[15%]" value={count} onChange={(e) => setCount(e.target.value)} />
    </>
  )

}
export default AddtoStorageForm
