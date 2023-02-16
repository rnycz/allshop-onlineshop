import styled from "styled-components";

export const Image = styled.img`
  height: 200px;
  object-fit: contain;
  transition: all 0.3s;
  padding: 10px 10px 0 10px;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.3s;
  height: max-content;
  justify-content: center;
`;
export const Title = styled.h4`
  text-align: center;
`;
export const Price = styled.p`
  text-align: center;
  flex: 1 70%;
  border-top: 3px solid #f2f2f2;
  margin: 0;
  padding: 16px;
`;
export const AddToCart = styled.button`
  transition: all 0.3s;
  width: 100%;
  border: none;
  background-color: #f2f2f2;
  font-weight: bold;
  cursor: pointer;
  flex: 1 30%;
  font-size: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 0;
`;
export const MoreInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #eec790;
  border-radius: 0 10px 0 50px;
  font-size: 1.5em;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 0.6s all;
  cursor: pointer;
  svg {
    transition: 0.6s all;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  max-height: 380px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px;
  position: relative;
  @media (max-width: 500px) {
    margin: 10px;
  }
  &:hover {
    ${MoreInfo} {
      width: 50px;
      height: 50px;
      transition: 0.6s all;
      svg {
        transition: 0.6s all;
        transform: translate(-5px, 5px) scale(1.3);
      }
    }
  }
`;
