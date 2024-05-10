import React, { Suspense } from "react";
import Products from "./Products";

const page = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  return <Products />;
};

export default page;
