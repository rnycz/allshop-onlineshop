import React, { useEffect, useState } from "react";
import {
  HeaderStyle,
  Navbar,
  OpenResponsiveNavbar,
  ResponsiveNavbar,
  ShoppingCart,
  UserTab,
  ShowFilters,
} from "./Header.styled";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarLeftCollapse,
} from "react-icons/tb";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useStateContext } from "../../contexts/ContextProvider";

const Header: React.FC = () => {
  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#eec790",
  };

  const location = useLocation();

  const {
    shoppingCart,
    setOpenShoppingCart,
    openShoppingCart,
    setOpenFilters,
    openFilters,
  } = useStateContext();

  const [openResponsiveMenu, setOpenResponsiveMenu] = useState<boolean>(false);

  const listenToScroll = (): void => {
    const heightToHideMobileNav: number = 40;
    const winScroll: number =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideMobileNav) {
      openResponsiveMenu && setOpenResponsiveMenu(true);
    } else {
      setOpenResponsiveMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
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
          <ShowFilters>
            {location.pathname === "/products" ? (
              openFilters ? (
                <TbLayoutSidebarLeftCollapse
                  onClick={() => setOpenFilters(false)}
                />
              ) : (
                <TbLayoutSidebarLeftExpand
                  onClick={() => setOpenFilters(true)}
                />
              )
            ) : (
              ""
            )}
          </ShowFilters>
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
        <ShowFilters>
          {location.pathname === "/products" ? (
            openFilters ? (
              <TbLayoutSidebarLeftCollapse
                onClick={() => {
                  setOpenFilters(false);
                  setOpenResponsiveMenu(false);
                }}
              />
            ) : (
              <TbLayoutSidebarLeftExpand
                onClick={() => {
                  setOpenFilters(true);
                  setOpenResponsiveMenu(false);
                }}
              />
            )
          ) : (
            ""
          )}
        </ShowFilters>
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
    </>
  );
};

export default Header;
