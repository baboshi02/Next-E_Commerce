import React, { SyntheticEvent, useState } from "react";
import { ProductType } from "../lib/interfaces/ProductType";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<any>([]);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("/api/products");
    if (response.status !== 200) {
      setIsError(true);
    } else {
      setIsError(false);
      const data = await response.json();
      const filteredData = data.filter((entry: ProductType) =>
        entry.title.includes(query)
      );
      setResponse(data);
    }
  };
  return (
    <div className="relative group ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="h-10 w-full absolute hidden  flex-col gap-1 top-8  group-hover:flex bg-gray-600">
        {isError ? (
          <>Error</>
        ) : (
          response.map((r: ProductType) => (
            <div className="bg-pink-400"> {r.title}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
