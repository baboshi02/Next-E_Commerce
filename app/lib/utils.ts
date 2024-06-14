import CartInterface from "./interfaces/CartInterface"
import { ProductType } from "./interfaces/ProductType"
//Function to add a product to the sessionStorage
export const addProductStorage = (product: ProductType, count: string) => {
  const { id } = product
  const Products = sessionStorage.getItem("Products")
  if (!Products) {
    sessionStorage.setItem("Products", JSON.stringify([{ ...product, count }]))
  } else {
    const parsedProducts: CartInterface[] = JSON.parse(Products)
    const Product = parsedProducts.find(product => product.id === id)
    if (!Product) {
      parsedProducts.push({ ...product, "count": Number(count) })
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts))
    } else {
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts.map(product => product.id == Product.id ? { ...product, count } : product)))
    }
  }

}
export const getTotalPrice = () => {

  const Products = sessionStorage.getItem("Products")
  if (!Products) {
    return 0
  }
  const parsedProducts: Array<CartInterface> = JSON.parse(Products)
  let totalPrice = 0
  parsedProducts.map(product => totalPrice += product.count * Number(product.price))
  return totalPrice
}

export const getProductCount = (id: string) => {
  const parsedProducts: CartInterface[] = sessionStorage.Products ? JSON.parse(sessionStorage.Products) : []
  const sessionProduct = parsedProducts.find(product => product.id == id)
  return sessionProduct?.count || 0
}

export const deleteProduct = (id: string) => {
  const parsedProducts: CartInterface[] = sessionStorage.Products ? JSON.parse(sessionStorage.Products) : []
  const deletedProducts = parsedProducts.filter(product => product.id != id)
  sessionStorage.setItem('Products', JSON.stringify(deletedProducts))
}

export const deleteAllProducts = () => {
  sessionStorage.removeItem("Products")
}
