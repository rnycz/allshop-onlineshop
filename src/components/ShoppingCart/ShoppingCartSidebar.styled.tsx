import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 0px;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: 0.3s;
  max-width: 80%;
  width: 500px;
  padding: 10px;
  height: 100vh;
  &.active {
    transform: translateX(0);
  }
`;
export const ProductsContainer = styled.div`
  height: 60%;
  overflow: auto;
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 80%;
  justify-content: center;
  p {
    margin: 0;
  }
  div {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    svg {
      cursor: pointer;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
export const Product = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  gap: 10px;
  img {
    width: 50%;
    flex: 1 20%;
    object-fit: contain;
  }
`;
