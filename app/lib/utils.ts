import KVInterface from "./interfaces/lsCartInterface"
export const addProductStorage = (Id: string) => {
  //Function to add a product to the sessionStorage
  const Products = sessionStorage.getItem("Products")
  if (!Products) {
    sessionStorage.setItem("Products", JSON.stringify({ [Id]: 1 }))
  } else {
    const parsedProducts: KVInterface = JSON.parse(Products)
    if (!parsedProducts[Id]) {
      parsedProducts[Id] = 1
      sessionStorage.setItem("Products", JSON.stringify(parsedProducts))
    } else {

      parsedProducts[Id]++

      sessionStorage.setItem("Products", JSON.stringify(parsedProducts))
    }
  }

}

