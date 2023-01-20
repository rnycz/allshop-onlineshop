import React from "react";
import { FetchProps } from "../../assets/types";
import Categories from "../../components/Categories/Categories";

const HomePage: React.FC<FetchProps> = ({ data, loading, error }) => {
  return <Categories data={data} loading={loading} error={error} />;
};

export default HomePage;
