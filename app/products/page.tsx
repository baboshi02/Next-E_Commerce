import React from "react";
import Products from "./Products";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <Products />;
};

export default page;
