"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { deleteAllProducts } from "../lib/utils"

const PurchasePage = () => {
  const router = useRouter()
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("mama")
      deleteAllProducts()
      router.push("/")
    }, 5000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <div>
      Thank you for your purchasing
    </div>
  )
}
export default PurchasePage
