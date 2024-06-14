import React from "react";
import { Suspense } from "react";
import Loading from "../loading";
import { Products } from "./Products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-thirdColor dark:text-DarkThirdColor text-center mb-5"> Products</h1>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </>
  );
};
export default Page;
