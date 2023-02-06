import React from "react";
import styled from "styled-components";
import { FetchToProducts } from "../../assets/types";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import Products from "../../components/Products/Products";

const ProductsContainer = styled.div`
  display: flex;
  position: relative;
  margin-top: 70px;
`;

const ProductsPage: React.FC<FetchToProducts> = ({
  productsData,
  productsLoading,
  productsError,
  categoriesData,
  categoriesLoading,
  categoriesError,
}) => {
  return (
    <ProductsContainer>
      <FiltersSidebar
        categoriesData={categoriesData}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
      />
      <Products
        productsData={productsData}
        productsLoading={productsLoading}
        productsError={productsError}
      />
    </ProductsContainer>
  );
};

export default ProductsPage;
