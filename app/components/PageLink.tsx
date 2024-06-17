"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
interface PageLinksInterface {
  [key: string]: Array<{ link: string, name: string }>
}

import { usePathname } from "next/navigation";
const PageLink = () => {
  const path = usePathname();
  const pageLinks: PageLinksInterface = { "/products": [{ link: "/", name: "Home Page" }, { link: "/Cart", name: "Shopping Cart" }], "/": [{ link: "/products", name: "Products Page" }], "/Cart": [{ link: "/products", name: "Products Page" }] }
  return (
    <div className="h-min mx-auto">
      {
        pageLinks[path]?.map(page => (
          <Button variant={"link"} key={page.link} >
            <Link className="text-2xl text-thirdColor dark:text-DarkThirdColor" href={page.link}  >
              {page.name}
            </Link>
          </Button>
        ))
      }
    </div>
  )
}
export default PageLink
