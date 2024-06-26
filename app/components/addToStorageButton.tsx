"use client"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { useToast } from "@/components/ui/use-toast"
import ToolTipComponent from "./toolTipComponent"
import { addProductStorage } from "../lib/utils"
import { Button } from "@/components/ui/button"
import { ProductType } from "../lib/interfaces/ProductType"
import { useRouter } from "next/navigation"

const AddToStorageButton = ({ product, count, disabled }: { product: ProductType, count: string, disabled: boolean }) => {
  const { toast } = useToast()
  const router = useRouter()
  return (
    <ToolTipComponent trigger={
      <Button disabled={disabled} variant="outline" className="dark:text-DarkThirdColor dark:bg-DarkSecondaryColor text-thirdColor bg-secondaryColor hover:text-gray-600 text-lg"
        onClick={() => {
          toast({
            title: "Item added to cart",
            description: `${product.title} added to cart successfully`,
          })
          addProductStorage(product, count);
          router.back()
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
