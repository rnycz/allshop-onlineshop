import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../assets/types";
import ProductInfo from "../../components/Products/ProductInfo/ProductInfo";
import { useFetch } from "../../hooks/useFetch";

const ProductsInfoPage: React.FC = () => {
  const { id } = useParams();
  const { loading, data, error, fetchData } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  useEffect(() => {
    fetchData();
  }, [id]);

  return <ProductInfo data={data} error={error} loading={loading} />;
};

export default ProductsInfoPage;
