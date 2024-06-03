"use client"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { useToast } from "@/components/ui/use-toast"
import ToolTipComponent from "./toolTipComponent"
import { addProductStorage } from "../lib/utils"
import { Button } from "@/components/ui/button"
import { ProductType } from "../lib/interfaces/ProductType"

const AddToStorageButton = ({ product, count }: { product: ProductType, count: string }) => {
  const { toast } = useToast()
  return (
    <ToolTipComponent trigger={
      <Button variant="link" className="text-thirdColor hover:text-gray-600 text-lg"
        onClick={() => {
          toast({
            title: "Item added to cart",
            description: `${product.title} added to cart successfully`,
          })
          addProductStorage(product.id, product.price, count)
        }}
      >
        <MdOutlineProductionQuantityLimits
          size={25}
        />
      </Button>
    } content="Add to Cart" />
  )
}
export default AddToStorageButton
