import React, { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../assets/types";

type Props = {
  children?: ReactNode;
};
type ContextState = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  shoppingCart: Product[];
  setShoppingCart: React.Dispatch<React.SetStateAction<Product[]>>;
  openShoppingCart: boolean;
  setOpenShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const contextDefaultValues: ContextState = {
  category: "all",
  setCategory: () => {},
  shoppingCart: [],
  setShoppingCart: () => {},
  openShoppingCart: false,
  setOpenShoppingCart: () => {},
};

export const StateContext = createContext<ContextState>(contextDefaultValues);

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [category, setCategory] = useState<string>(
    contextDefaultValues.category
  );
  const [shoppingCart, setShoppingCart] = useState<Product[]>(
    contextDefaultValues.shoppingCart
  );
  const [openShoppingCart, setOpenShoppingCart] = useState<boolean>(
    contextDefaultValues.openShoppingCart
  );
  return (
    <StateContext.Provider
      value={{
        category,
        setCategory,
        shoppingCart,
        setShoppingCart,
        openShoppingCart,
        setOpenShoppingCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
