import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  position: fixed;
  top: 70px;
  right: 0px;
  transform: translateX(102%);
  display: flex;
  flex-direction: column;
  background-color: white;
  transition: 0.3s;
  max-width: 85%;
  width: 500px;
  padding: 10px;
  height: 100vh;
  box-shadow: -7px 0px 5px 0px #e5e5e5;
  z-index: 2;
  &.active {
    transform: translateX(0);
  }
  header {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
export const ProductsContainer = styled.div`
  max-height: 60%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #e5e5e5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #eec790;
    border-radius: 0px;
    border: 0px solid #ffffff;
  }
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 80%;
  justify-content: center;
  p {
    margin: 0;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    span {
      font-weight: bold;
    }
  }
  div {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5em;
    gap: 10px;
    svg {
      cursor: pointer;
      transition: 0.3s all;
      &:hover {
        transform: scale(1.1);
      }
    }
    input[type="number"] {
      width: 40px;
    }
  }
`;
export const Quantity = styled.div`
  display: flex;
  gap: 5px !important;
  padding: 0 !important;
  border: 2px solid #e5e5e5;
  span {
    font-size: 0.7em;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 0.5em;
    display: flex;
    &:nth-child(1) {
      border-right: 2px solid #e5e5e5;
    }
    &:nth-child(3) {
      border-left: 2px solid #e5e5e5;
    }
  }
`;
export const SingleProduct = styled.div`
  display: flex;
  padding: 10px 5px 10px 0;
  justify-content: space-around;
  gap: 10px;
  img {
    width: 50%;
    flex: 1 20%;
    object-fit: contain;
  }
`;
export const TotalSum = styled.div`
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
`;
