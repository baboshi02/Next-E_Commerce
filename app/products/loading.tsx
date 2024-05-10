import React from "react";

import { AiOutlineLoading } from "react-icons/ai";
const Loading = () => {
  return (
    <div className="h-screen w-full grid place-items-center ">
      <AiOutlineLoading
        size={50}
        className="animate-spin mx-auto text-primaryColor"
      />
    </div>
  );
};

export default Loading;
