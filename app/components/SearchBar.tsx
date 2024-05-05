import React, { SyntheticEvent, useEffect, useState } from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import { useFetch } from "../hooks/useFetch";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Array<ProductType>>([]);
  const { response, isError } = useFetch("/api/products");
  const handleChange = () => {
    const _filteredData = response.filter((r: ProductType) =>
      r.title.includes(query)
    );
    setFilteredData(_filteredData);
  };
  console.log(filteredData);
  return (
    <div className="relative group ">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search... "
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleChange();
          }}
        />
      </form>
      <div className="h-10 w-full absolute hidden  flex-col gap-1 top-8  group-hover:flex bg-gray-600">
        {isError ? (
          <>Error</>
        ) : (
          filteredData?.map((r: ProductType) => (
            <div className="bg-pink-400"> {r.title}</div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
