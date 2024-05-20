import { useEffect, useState } from "react";
import { ProductType } from "../lib/interfaces/ProductType";

export const useFetch = <t>(link: string) => {
  const [response, setResponse] = useState<t>();
  const [isError, setIsError] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await fetch(link);
      if (response.status !== 200) {
        setIsError(true);
      } else {
        setIsError(false);
        const data = await response.json();
        setResponse(data);
      }
    } catch (err) {
      setIsError(true)
      console.error(err)
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return { response, isError };
};
