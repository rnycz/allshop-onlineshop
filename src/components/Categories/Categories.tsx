import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchProps } from "../../assets/types";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  CategoriesStyle,
  CategoryElement,
  CategoriesWrapper,
  CategoriesToggle,
} from "./Categories.styled";
import { GrFormClose } from "react-icons/gr";

const Categories: React.FC<FetchProps> = ({ data, loading, error }) => {
  const navigate = useNavigate();
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const { setCategory } = useStateContext();

  return (
    <CategoriesStyle>
      <CategoriesToggle
        onClick={() => {
          setShowCategories(true);
        }}
        style={showCategories ? { opacity: 0 } : { opacity: 1 }}
      >
        CATEGORIES
      </CategoriesToggle>
      <CategoriesWrapper className={showCategories ? "active" : ""}>
        {loading && <span>Loading categories...</span>}
        {error && <span>{error}</span>}
        <GrFormClose
          onClick={() => {
            setShowCategories(false);
          }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: "2em",
            cursor: "pointer",
            background: "white",
            borderRadius: "50%",
          }}
        />
        <div style={{ direction: "ltr" }}>
          <CategoryElement
            onClick={() => {
              navigate("/products");
              setCategory("all");
            }}
          >
            ALL
          </CategoryElement>
          {data &&
            data.map((category: string, index: number) => (
              <CategoryElement
                key={index}
                onClick={() => {
                  navigate("/products");
                  setCategory(category.toLowerCase());
                }}
              >
                {category}
              </CategoryElement>
            ))}
        </div>
      </CategoriesWrapper>
    </CategoriesStyle>
  );
};

export default Categories;
