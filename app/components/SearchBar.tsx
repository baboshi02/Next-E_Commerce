import React, { useState, useEffect } from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import { useFetch } from "../hooks/useFetch";
import SearchProductElement from "./searchProductElement";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Array<ProductType>>([]);
  const { response, isError } = useFetch("/api/products");
  const handleChange = () => {
    const _filteredData = response.filter((r: ProductType) =>
      r.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(_filteredData);
  };
  useEffect(handleChange, [query]);
  return (
    <div className="relative group ">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="max-h-[25vh] overflow-scroll w-full absolute hidden border-2 border-primaryColor   flex-col    group-hover:flex  transition duration-200 shadow-xl rounded-md">
        {isError ? (
          <>Error</>
        ) : (
          filteredData?.length > 0 &&
          query.length > 0 &&
          filteredData?.map((r: ProductType) => (
            <SearchProductElement Product={r} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
