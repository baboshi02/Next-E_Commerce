import Link from "next/link"
import ToolTipComponent from "./toolTipComponent"
import { FaInfoCircle } from "react-icons/fa"
import { buttonVariants } from "@/components/ui/button"
const ItemInfoBtn = ({ productId }: { productId: string }) => {
  return (
    <ToolTipComponent trigger={
      <Link href={`/products/${productId}`} className={`${buttonVariants({ variant: "link" })}dark:text-DarkThirdColor  text-thirdColor hover:text-gray-600`}  >
        <FaInfoCircle size={25} />
      </Link>
    }
      content="Info Page"
    />
  )
}
export default ItemInfoBtn
