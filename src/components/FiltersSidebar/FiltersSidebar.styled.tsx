import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 20%;
  background-color: white;
  transition: 0.3s;
  @media (max-width: 780px) {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    &.active {
      left: 0;
      transition: 0.3s;
      z-index: 2;
    }
  }
`;
export const CloseFilters = styled.div`
  position: absolute;
  top: 70px;
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
    margin-top: 90px;
  }
`;
export const Categories = styled.div`
  height: 500px;
  overflow: auto;
  direction: rtl;
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
  margin: 15px 0;
  padding: 5px 10px;
  &:hover {
    font-weight: bold;
  }
  &.active {
    font-weight: bold;
    background-color: #eec790;
  }
`;
