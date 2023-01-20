import React from "react";
import styled from "styled-components";
import { FetchToProducts } from "../../assets/types";
import FiltersSidebar from "../../components/FiltersSidebar/FiltersSidebar";
import { ShoppingCart } from "../../components/Header/Header.styled";
import Products from "../../components/Products/Products";
import ShoppingCartSidebar from "../../components/ShoppingCart/ShoppingCartSidebar";

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
      <ShoppingCartSidebar />
    </ProductsContainer>
  );
};

export default ProductsPage;
