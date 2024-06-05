"use client"
import { useToast } from "@/components/ui/use-toast"
import ToolTipComponent from "./toolTipComponent"
import { deleteProduct } from "../lib/utils"
import { Button } from "@/components/ui/button"
import { ProductType } from "../lib/interfaces/ProductType"
import { useRouter } from "next/navigation"
import { FaRegTrashAlt } from "react-icons/fa";
const DeleteFromStorageButton = ({ product, disabled }: { product: ProductType, disabled: boolean }) => {
  const { toast } = useToast()
  const router = useRouter()

  return (
    <ToolTipComponent trigger={
      <Button variant="destructive" disabled={disabled}
        onClick={() => {
          toast({
            title: "Item deleted from cart",
            description: `${product.title} deleted from cart successfully`,
          })
          deleteProduct(product.id)
          router.back()
        }}
      >
        <FaRegTrashAlt
          size={25}
        />
      </Button>
    } content="Delete product" />
  )
}
export default DeleteFromStorageButton
