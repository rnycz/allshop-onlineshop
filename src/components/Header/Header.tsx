import React, { useState } from "react";
import {
  HeaderStyle,
  Navbar,
  OpenResponsiveNavbar,
  ResponsiveNavbar,
  ShoppingCart,
  UserTab,
} from "./Header.styled";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useStateContext } from "../../contexts/ContextProvider";

const Header: React.FC = () => {
  const activeStyle = {
    textDecoration: "underline",
  };
  const { shoppingCart, setOpenShoppingCart, openShoppingCart } =
    useStateContext();
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState<boolean>(false);
  return (
    <div style={{ position: "relative" }}>
      <HeaderStyle>
        <Navbar>
          <Link to="">
            <h2>ALLSHOP</h2>
          </Link>
          <NavLink
            to="products"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Products
          </NavLink>
          <NavLink
            to="contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </Navbar>
        <UserTab>
          <ShoppingCart onClick={() => setOpenShoppingCart(!openShoppingCart)}>
            <AiOutlineShoppingCart />
            {shoppingCart.length > 0 && <span>{shoppingCart.length}</span>}
          </ShoppingCart>
          <AiOutlineUser />
        </UserTab>
        <OpenResponsiveNavbar
          onClick={() => setOpenResponsiveMenu(!openResponsiveMenu)}
        >
          <Hamburger
            label="Show responsive navbar"
            toggled={openResponsiveMenu}
          />
        </OpenResponsiveNavbar>
      </HeaderStyle>
      <ResponsiveNavbar className={openResponsiveMenu ? "active" : ""}>
        <NavLink
          to="products"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setOpenResponsiveMenu(!openResponsiveMenu)}
        >
          Products
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setOpenResponsiveMenu(!openResponsiveMenu)}
        >
          Contact
        </NavLink>
        <ShoppingCart
          onClick={() => {
            setOpenShoppingCart(!openShoppingCart);
            setOpenResponsiveMenu(false);
          }}
        >
          <AiOutlineShoppingCart />
          {shoppingCart.length > 0 && <span>{shoppingCart.length}</span>}
        </ShoppingCart>
        <AiOutlineUser />
      </ResponsiveNavbar>
    </div>
  );
};

export default Header;
