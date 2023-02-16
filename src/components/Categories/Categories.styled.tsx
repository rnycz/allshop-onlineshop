import styled from "styled-components";
import image from "../../assets/images/bg-img.jpg";

export const CategoriesStyle = styled.div`
  height: 100%;
  background: url(${image}) no-repeat center center fixed;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`;
export const CategoriesToggle = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-weight: bold;
  font-size: 2em;
  padding-left: 20px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.1);
  }
`;
export const CategoriesWrapper = styled.div`
  width: fit-content;
  position: absolute;
  left: -100%;
  height: 500px;
  overflow: auto;
  transition: 0.5s;
  direction: rtl;
  &.active {
    left: 0;
    transition: 0.3s;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eec790;
    border-radius: 0px;
    border: 0px solid #ffffff;
  }
`;
export const CategoryElement = styled.p`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.8em;
  transition: 0.3s;
  position: relative;
  width: fit-content;
  z-index: 1;
  text-transform: uppercase;
  margin: 35px 20px;
  &::before {
    content: "";
    background-color: #eec790;
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover::before {
    bottom: 0;
    height: 100%;
  }
  @media (max-width: 500px) {
    font-size: 1.4em;
  }
`;
