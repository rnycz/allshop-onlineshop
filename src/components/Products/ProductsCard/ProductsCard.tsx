import React from "react";
import { Product } from "../../../assets/types";
import {
  Card,
  Image,
  Title,
  Price,
  AddToCart,
  ProductInfo,
  MoreInfo,
} from "./ProductsCard.styled";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useStateContext } from "../../../contexts/ContextProvider";

type Props = {
  product: Product;
};

const ProductsCard: React.FC<Props> = ({ product }) => {
  const { shoppingCart, setShoppingCart } = useStateContext();
  return (
    <Card>
      <MoreInfo>
        <AiOutlineInfoCircle style={{ padding: "3px" }} />
      </MoreInfo>
      <Image src={product.thumbnail} />
      <Title>{product.title}</Title>
      <ProductInfo>
        <Price>${product.price}</Price>
        <AddToCart onClick={() => setShoppingCart([...shoppingCart, product])}>
          <MdAddShoppingCart />
        </AddToCart>
      </ProductInfo>
    </Card>
  );
};

export default ProductsCard;
