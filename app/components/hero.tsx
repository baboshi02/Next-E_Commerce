"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import ToolTipComponent from "./toolTipComponent";
const Hero = () => {
  const router = useRouter()
  return (
    <div className="max-h-[500px] relative">
      {/* Overlay */}
      <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex items-center justify-center">
        <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300">
          E <span className="text-thirdColor">Commerce</span><br /><span className="text-thirdColor">Web</span>site
        </h1>
        <ToolTipComponent content="Products Page" trigger={
          <Button className="border border-prima" onClick={() => router.push("/products")}>
            <FaArrowRight size={30} />
          </Button>
        } />
      </div>
      <img
        className="w-full max-h-[500px] object-cover"
        src="https://images.unsplash.com/photo-1714383625340-893175947b32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
      />
    </div>
  );
};
export default Hero;
