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
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

type Props = {
  product: Product;
};

const ProductsCard: React.FC<Props> = ({ product }) => {
  const { shoppingCart, setShoppingCart } = useStateContext();
  const removeProduct = (id: number) => {
    setShoppingCart(shoppingCart.filter((product) => product.id !== id));
  };
  const navigate = useNavigate();
  return (
    <Card>
      <MoreInfo onClick={() => navigate(`/product/${product.id}`)}>
        <AiOutlineInfoCircle style={{ padding: "3px" }} />
      </MoreInfo>
      <Image src={product.thumbnail} />
      <Title>{product.title}</Title>
      <ProductInfo>
        <Price>${product.price}</Price>
        {shoppingCart.some((productCart) => productCart.id === product.id) ? (
          <AddToCart onClick={() => removeProduct(product.id)}>
            <MdOutlineRemoveShoppingCart />
          </AddToCart>
        ) : (
          <AddToCart
            onClick={() => setShoppingCart([...shoppingCart, product])}
          >
            <MdAddShoppingCart />
          </AddToCart>
        )}
      </ProductInfo>
    </Card>
  );
};

export default ProductsCard;
