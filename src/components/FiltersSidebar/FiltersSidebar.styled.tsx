import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 20%;
  background-color: white;
  transition: 0.3s;
  @media (max-width: 780px) {
    position: fixed;
    left: -100%;
    height: 100vh;
    &.active {
      left: 0;
      transition: 0.3s;
      z-index: 2;
    }
  }
`;
export const ShowFilters = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  display: none;
  z-index: 2;
  svg {
    font-size: 2em;
    cursor: pointer;
  }
  @media (max-width: 780px) {
    display: block;
  }
`;
export const CloseFilters = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
  svg {
    font-size: 2em;
    cursor: pointer;
  }
  @media (max-width: 780px) {
    display: block;
  }
`;
export const CurrentCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
  p {
    font-weight: bold;
    text-transform: uppercase;
  }
  @media (max-width: 780px) {
    margin-top: 20px;
  }
`;
export const Categories = styled.div`
  height: 500px;
  overflow: auto;
  direction: rtl;
  padding: 0 10px;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eec790;
    border-radius: 0px;
    border: 0px solid #ffffff;
  }
`;
export const CategoryElement = styled.p`
  text-transform: uppercase;
  cursor: pointer;
  margin: 25px 0;
  &:hover {
    font-weight: bold;
  }
`;
