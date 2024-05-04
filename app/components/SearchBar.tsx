import React, { SyntheticEvent, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="relative group ">
      <form onSubmit={(e: SyntheticEvent) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="h-10 w-full absolute hidden  flex-col gap-1 top-8  group-hover:flex ">
        <div className="bg-pink-300"> {query}</div>
      </div>
    </div>
  );
};

export default SearchBar;
