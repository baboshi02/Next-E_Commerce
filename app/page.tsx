import Products from "./Products";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import Hero from "./components/hero";
export default async function Home() {
  // To create loading effect
  // await new Promise((res) => setTimeout(() => res("done"), 10000));
  return (
    <div className="text-center ">
      <Hero />
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}
