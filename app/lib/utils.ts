import CartInterface from "./interfaces/CartInterface"
import KVInterface from "./interfaces/CartInterface"
//Function to add a product to the sessionStorage
export const addProductStorage = (Id: string, price: string, count: string) => {
  const Products = sessionStorage.getItem("Products")
  if (!Products) {
    sessionStorage.setItem("Products", JSON.stringify([{ "ID": Id, "Count": Number(count), "Price": price }]))
  } else {
    const parsedProducts: KVInterface[] = JSON.parse(Products)
    const Product = parsedProducts.find(product => product.ID === Id)
    if (!Product) {
      parsedProducts.push({ "ID": Id, "Count": Number(count), "Price": price })
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts))
    } else {
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts.map(product => product.ID == Product.ID ? { ...product, Count: count } : product)))
    }
  }

}
export const getTotalPrice = () => {

  const Products = sessionStorage.getItem("Products")
  if (!Products) {
    return 0
  }
  const parsedProducts: Array<KVInterface> = JSON.parse(Products)
  let totalPrice = 0
  parsedProducts.map(product => totalPrice += product.Count * Number(product.Price))
  return totalPrice
}

export const getProductCount = (id: string) => {
  const parsedProducts: CartInterface[] = sessionStorage.Products ? JSON.parse(sessionStorage.Products) : []
  const sessionProduct = parsedProducts.find(product => product.ID == id)
  return sessionProduct?.Count || 0
}

export const deleteProduct = (id: string) => {
  const parsedProducts: CartInterface[] = sessionStorage.Products ? JSON.parse(sessionStorage.Products) : []
  const deletedProducts = parsedProducts.filter(product => product.ID != id)
  sessionStorage.setItem('Products', JSON.stringify(deletedProducts))
}
