import React from "react";
import { FetchToProducts, Product } from "../../assets/types";
import ProductsCard from "./ProductsCard/ProductsCard";
import { ProductsWrapper } from "./Products.styled";
import { useStateContext } from "../../contexts/ContextProvider";

const Products: React.FC<FetchToProducts> = ({
  productsData,
  productsLoading,
  productsError,
}) => {
  const { category } = useStateContext();
  return (
    <ProductsWrapper>
      {productsLoading && <span>Loading products...</span>}
      {productsError && <span>{productsError}</span>}
      {category === "all"
        ? productsData?.products.map((product: Product) => (
            <ProductsCard key={product.id} product={product} />
          ))
        : productsData?.products.map(
            (product: Product) =>
              product.category === category && (
                <ProductsCard key={product.id} product={product} />
              )
          )}
    </ProductsWrapper>
  );
};

export default Products;
