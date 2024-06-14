import React, { Suspense } from "react";
import Loading from "../loading";
import { Carts } from "./Carts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteAllProducts } from "../lib/utils";
// TODO: finalize product purchasing 
const Page = () => {
  return (
    <div>
      <h1 className="text-5xl text-thirdColor dark:text-DarkThirdColor text-center mb-5">Shopping Cart </h1>
      <Suspense fallback={<Loading />}>
        <Carts />
      </Suspense>
    </div>
  )
}
export default Page;
