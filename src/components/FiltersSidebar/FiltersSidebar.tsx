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
            }}
          >
            ALL
          </CategoryElement>
          {categoriesData &&
            categoriesData.map((category: string, index: number) => (
              <CategoryElement
                key={index}
                onClick={() => {
                  setCategory(category.toLowerCase());
                  setOpenFilters(false);
                }}
              >
                {category}
              </CategoryElement>
            ))}
        </div>
      </Categories>
    </FiltersContainer>
  );
};

export default FiltersSidebar;
