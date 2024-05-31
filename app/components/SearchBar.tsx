import React, { useState, useEffect } from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import { useFetch } from "../hooks/useFetch";
import SearchProductElement from "./searchProductElement";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Array<ProductType>>([]);
  const { response, isError } = useFetch<ProductType[]>("/api/products");
  const handleChange = () => {
    const _filteredData = response?.filter((r: ProductType) =>
      r.title.toLowerCase().includes(query.toLowerCase())
    ) || [];
    setFilteredData(_filteredData);
  };
  useEffect(handleChange, [query]);
  return (
    <div className="relative  ">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search... "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {isError ? (
        <>Error</>
      ) : (
        filteredData?.length > 0 &&
        query.length > 0 &&
        <div className="max-h-[25vh] overflow-scroll w-full absolute  border-2 border-primaryColor   flex-col    flex  transition duration-200 shadow-xl rounded-md">
          {
            filteredData?.map((r: ProductType) => (
              <SearchProductElement Product={r} />
            ))
          }
        </div>
      )}
    </div>
  );
};

export default SearchBar;
