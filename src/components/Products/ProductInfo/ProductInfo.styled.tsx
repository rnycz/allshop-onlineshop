import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  background-color: #e5e5e5;
  margin: auto;
  width: 100%;
  flex-direction: column;
`;
export const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const PrevSite = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
  padding-left: 15px;
  cursor: pointer;
  width: fit-content;
  transition: transform 0.3s;
  &:hover {
    transform: translateX(-3px);
  }
`;
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 50px 20px 20px;
  flex: 1 10 70%;
  @media (max-width: 900px) {
    margin: 0px 15px 15px 15px;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  p {
    opacity: 0.7;
  }
`;
export const RateStock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      font-size: 1.8em;
    }
  }
`;
export const AddToCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    svg {
      font-size: 1.8em;
    }
  }
  button {
    display: flex;
    background-color: #f2f2f2;
    border: none;
    font-size: 2em;
    padding: 20px 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 5px 10px 0px #eec790;
    }
  }
`;
export const ImagePicker = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid black;
  margin: 5px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`;
export const CurrentImage = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 30%;
  margin: 10px;
  @media (max-width: 900px) {
    margin-top: 10px;
  }
  img {
    width: 100%;
    max-width: 400px;
  }
`;
