import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useFetch } from "./hooks/useFetch";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ShoppingCartSidebar from "./components/ShoppingCart/ShoppingCartSidebar";
import ProductsInfoPage from "./pages/ProductsInfoPage/ProductsInfoPage";
import Footer from "./components/Footer/Footer";

function App() {
  const {
    loading: productsLoading,
    data: productsData,
    error: productsError,
    fetchData: productsFetchData,
  } = useFetch("https://dummyjson.com/products?limit=100");
  const {
    loading: categoriesLoading,
    data: categoriesData,
    error: categoriesError,
    fetchData: categoriesFetchData,
  } = useFetch("https://dummyjson.com/products/categories");
  useEffect(() => {
    categoriesFetchData();
    productsFetchData();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/product/:id" element={<ProductsInfoPage />} />
          <Route
            path="/"
            element={
              <HomePage
                data={categoriesData}
                loading={categoriesLoading}
                error={categoriesError}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                productsData={productsData}
                productsLoading={productsLoading}
                productsError={productsError}
                categoriesData={categoriesData}
                categoriesLoading={categoriesLoading}
                categoriesError={categoriesError}
              />
            }
          />
        </Routes>
        <ShoppingCartSidebar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
