import { useEffect, useState } from "react";
import { ProductType } from "../lib/interfaces/ProductType";
import { useFetch } from "./useFetch";

const useFilterResults = (query: string) => {
  const [filteredData, setFilteredData] = useState<Array<ProductType>>([]);
  const { response, isError } = useFetch<ProductType[]>("/api/products");
  const handleChange = () => {
    const _filteredData = response?.filter((r: ProductType) =>
      r.title.toLowerCase().includes(query.toLowerCase())
    ) || [];
    setFilteredData(_filteredData);
  };
  useEffect(handleChange, [query]);
  return { isError, filteredData }
}
export default useFilterResults
