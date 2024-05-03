import React from "react";
import Image from "next/image";

const ImageComponent = ({ link }: { link: string }) => {
  return (
    <div className="relative bg-transparent/30    ">
      <Image
        src={link}
        fill
        className="h-full w-full  object-cover -z-10 lg:object-center"
        alt="/photo"
      />
    </div>
  );
};

const Hero = () => {
  const links = [
    "https://images.unsplash.com/photo-1714383625340-893175947b32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1714579329402-7afd9040eaac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1710182238804-582790112486?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="m-10 font-sans grid md:grid-cols-2  grid-cols-1  gap-1 h-[100vh]  max-w-[1680px] mx-auto">
      <h2 className="text-4xl sm:text-5xl  text-left lg:text-7xl text-primaryColor  p-1   font-bold tracking-wide max-w-fit">
        Next js eCommerce
      </h2>
      {links.map((link) => (
        <ImageComponent link={link} key={link} />
      ))}
    </div>
  );
};

export default Hero;
