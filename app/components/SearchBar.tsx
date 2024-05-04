import React, { SyntheticEvent } from "react";

const SearchBar = () => {
  return (
    <div className="relative group ">
      <form onSubmit={(e: SyntheticEvent) => e.preventDefault()}>
        <input type="text" placeholder="Search... " />
      </form>
      <div className="h-10 w-full absolute hidden  flex-col gap-1 top-8  group-hover:flex ">
        <div className="bg-pink-300"> Hellp</div>
        <div className="bg-pink-300"> Hellp</div>
        <div className="bg-pink-300"> Hellp</div>
      </div>
    </div>
  );
};

export default SearchBar;
