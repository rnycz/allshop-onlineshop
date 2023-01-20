import React, { useState } from "react";
import { FetchToProducts } from "../../assets/types";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  FiltersContainer,
  CurrentCategory,
  Categories,
  CategoryElement,
  ShowFilters,
  CloseFilters,
} from "./FiltersSidebar.styled";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { GrFormClose } from "react-icons/gr";

const FiltersSidebar: React.FC<FetchToProducts> = ({
  categoriesData,
  categoriesLoading,
  categoriesError,
}) => {
  const { category, setCategory } = useStateContext();
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  return (
    <>
      <ShowFilters>
        <TbLayoutSidebarLeftExpand onClick={() => setOpenFilters(true)} />
      </ShowFilters>
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
    </>
  );
};

export default FiltersSidebar;
