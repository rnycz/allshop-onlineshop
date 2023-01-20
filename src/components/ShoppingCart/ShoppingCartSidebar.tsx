import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  ShoppingCartContainer,
  Product,
  ProductsContainer,
  ProductDetails,
} from "./ShoppingCartSidebar.styled";
import { FiTrash2 } from "react-icons/fi";

const ShoppingCartSidebar: React.FC = () => {
  const { openShoppingCart, shoppingCart, setShoppingCart } = useStateContext();
  const removeProduct = (id: number) => {
    setShoppingCart(shoppingCart.filter((product) => product.id !== id));
  };
  return (
    <ShoppingCartContainer className={openShoppingCart ? "active" : ""}>
      <h3>Your shopping cart</h3>
      <ProductsContainer>
        {shoppingCart.map((product) => (
          <Product>
            <img
              src={product.thumbnail}
              alt={`product image ${product.thumbnail}`}
            />
            <ProductDetails>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <div>
                <FiTrash2 onClick={() => removeProduct(product.id)} />
              </div>
            </ProductDetails>
          </Product>
        ))}
      </ProductsContainer>
    </ShoppingCartContainer>
  );
};

export default ShoppingCartSidebar;
