import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  ShoppingCartContainer,
  SingleProduct,
  ProductsContainer,
  ProductDetails,
  TotalSum,
  Quantity,
  Checkout,
} from "./ShoppingCartSidebar.styled";
import { FiTrash2 } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Product } from "../../assets/types";

const ShoppingCartSidebar: React.FC = () => {
  const {
    openShoppingCart,
    setOpenShoppingCart,
    shoppingCart,
    setShoppingCart,
  } = useStateContext();

  const stepDown = (id: number) => {
    setShoppingCart(
      shoppingCart.map((product) =>
        product.id === id
          ? product.quantity === 1
            ? product
            : { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  const stepUp = (id: number) => {
    setShoppingCart(
      shoppingCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setShoppingCart(shoppingCart.filter((product) => product.id !== id));
  };

  let totalSum = shoppingCart.reduce((prev, product) => {
    return prev + product.price * product.quantity;
  }, 0);
  return (
    <ShoppingCartContainer className={openShoppingCart ? "active" : ""}>
      <header>
        <GrFormClose
          onClick={() => {
            setOpenShoppingCart(false);
          }}
          style={{
            fontSize: "2em",
            cursor: "pointer",
          }}
        />
        <h2>Your shopping cart</h2>
      </header>
      <ProductsContainer>
        {shoppingCart.map((product: Product) => (
          <SingleProduct key={product.id}>
            <img src={product.thumbnail} alt={`product ${product.thumbnail}`} />
            <ProductDetails>
              <h3>{product.title}</h3>
              <p>
                ${product.price}
                <span>SUM: ${product.price * product.quantity}</span>
              </p>
              <div>
                <FiTrash2 onClick={() => removeProduct(product.id)} />
                <Quantity>
                  <button onClick={() => stepDown(product.id)}>
                    <AiOutlineMinus />
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => stepUp(product.id)}>
                    <AiOutlinePlus />
                  </button>
                </Quantity>
              </div>
            </ProductDetails>
          </SingleProduct>
        ))}
      </ProductsContainer>
      <TotalSum>{totalSum !== 0 ? `Total: $${totalSum}` : ""}</TotalSum>
      <Checkout>
        <BsBagCheck /> Checkout
      </Checkout>
    </ShoppingCartContainer>
  );
};

export default ShoppingCartSidebar;
