import { useEffect, useState } from "react";
import { ProductType } from "../lib/interfaces/ProductType";

export const useFetch = (link: string) => {
  const [response, setResponse] = useState<Array<ProductType>>([]);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async () => {
    const response = await fetch(link);
    if (response.status !== 200) {
      setIsError(true);
    } else {
      setIsError(false);
      const data = await response.json();
      setResponse(data);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return { response, isError };
};
