import Products from "./Products";
import { Suspense } from "react";
import Loading from "./loading";
export default async function Home() {
  // To create loading effect
  // await new Promise((res) => setTimeout(() => res("done"), 10000));
  return (
    <div className="m-10 font-sans">
      <div className="h-[50vh] text-left ">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl bg-clip-text p-0.5 bg-contain text-transparent bg-gradient-to-r from-primaryColor to-secondaryColor  font-bold tracking-wide">
          Next js eCommerce
        </h2>
      </div>
      <div className="text-center">
        <Suspense fallback={<Loading />}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
