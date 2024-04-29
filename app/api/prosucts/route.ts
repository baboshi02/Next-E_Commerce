import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  let products;
  try {
    products = await fetch("https://fakestoreapi.com/products?limit=20").then(
      (res) => res.json()
    );
  } catch (err: any) {
    console.log(err.message);
  }
  return NextResponse.json(products);
};
