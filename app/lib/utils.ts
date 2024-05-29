import KVInterface from "./interfaces/CartInterface"
//Function to add a product to the sessionStorage
export const addProductStorage = (Id: string, price: string) => {
  const Products = sessionStorage.getItem("Products")
  if (!Products) {
    sessionStorage.setItem("Products", JSON.stringify([{ "ID": Id, "Count": 1, "Price": price }]))
  } else {
    const parsedProducts: KVInterface[] = JSON.parse(Products)
    const Product = parsedProducts.find(product => product.ID === Id)
    if (!Product) {
      parsedProducts.push({ "ID": Id, "Count": 1, "Price": price })
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts))
    } else {
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts.map(product => product.ID == Product.ID ? { ...product, Count: product.Count + 1 } : product)))
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
