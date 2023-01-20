import { useState } from "react";
import { Category, Product } from "../assets/types";
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData] = useState<Product | Category | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | any>();

  const fetchData = async () => {
    try {
      const response = await axios.get<Product | Category>(url);
      setError(null);
      if (response.status === 404) {
        setError("Page Not Found");
      } else {
        setData(response.data);
      }
    } catch (err: any) {
      setData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData };
};
