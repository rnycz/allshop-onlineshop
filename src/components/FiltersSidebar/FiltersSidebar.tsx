import React from "react";
import { FetchToProducts } from "../../assets/types";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  FiltersContainer,
  CurrentCategory,
  Categories,
  CategoryElement,
  CloseFilters,
} from "./FiltersSidebar.styled";
import { GrFormClose } from "react-icons/gr";

const FiltersSidebar: React.FC<FetchToProducts> = ({
  categoriesData,
  categoriesLoading,
  categoriesError,
}) => {
  const { category, setCategory, openFilters, setOpenFilters } =
    useStateContext();

  return (
    <FiltersContainer className={openFilters ? "active" : ""}>
      <CloseFilters>
        <GrFormClose onClick={() => setOpenFilters(false)} />
      </CloseFilters>
      <CurrentCategory>
        Current category: <p>{category}</p>
      </CurrentCategory>
      <Categories>
        <div style={{ direction: "ltr" }}>
          {categoriesLoading && <span>Loading categories...</span>}
          {categoriesError && <span>{categoriesError}</span>}
          <CategoryElement
            onClick={() => {
              setCategory("all");
              setOpenFilters(false);
            }}
            className={category === "all" ? "active" : ""}
          >
            ALL
          </CategoryElement>
          {categoriesData &&
            categoriesData.map((categoryData: string, index: number) => (
              <CategoryElement
                key={index}
                onClick={() => {
                  setCategory(categoryData.toLowerCase());
                  setOpenFilters(false);
                }}
                className={category === categoryData ? "active" : ""}
              >
                {categoryData}
              </CategoryElement>
            ))}
        </div>
      </Categories>
    </FiltersContainer>
  );
};

export default FiltersSidebar;
