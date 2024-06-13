import React from "react";

import { AiOutlineLoading } from "react-icons/ai";
const Loading = () => {
  return (
    <AiOutlineLoading
      size={50}
      className="animate-spin mx-auto text-primaryColor   dark:text-DarkPrimaryColor"
    />
  );
};

export default Loading;
