import React, { useState } from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import SearchProductElement from "./searchProductElement";
import useFilterResults from "../hooks/useFilterResults";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { filteredData, isError } = useFilterResults(query)
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
