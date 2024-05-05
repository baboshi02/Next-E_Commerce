import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    return NextResponse.json(res, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({}, { status: 400, statusText: "Error fetching" });
  }
};
