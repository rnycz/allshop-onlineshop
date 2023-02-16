import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 4;
  font-size: 1.1em;
  width: 100%;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  a {
    text-decoration: none;
    color: black;
    text-underline-offset: 5px;
    line-height: 1.5em;
    &:not(:nth-child(1)) {
      padding: 0 5px;
    }
    &:nth-child(1) {
      padding-left: 20px;
    }
  }
  @media (max-width: 520px) {
    a:not(:nth-child(1)) {
      display: none;
    }
  }
`;
export const UserTab = styled.div`
  display: flex;
  font-size: 1.5em;
  gap: 20px;
  padding-right: 20px;
  @media (max-width: 520px) {
    display: none;
  }
`;
export const ShoppingCart = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  span {
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 0.5em;
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 520px) {
    span {
      top: 19px;
      right: 3px;
      font-size: 0.8em;
      width: 20px;
      height: 20px;
    }
  }
`;
export const ShowFilters = styled.div`
  display: none;
  svg {
    cursor: pointer;
  }
  @media (max-width: 780px) {
    display: flex;
  }
`;
export const OpenResponsiveNavbar = styled.div`
  font-size: 1.5em;
  padding-right: 20px;
  @media (min-width: 521px) {
    display: none;
  }
`;
export const ResponsiveNavbar = styled.div`
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: -90px;
  transition: 0.3s;
  box-shadow: 0 4px 2px 0px #e5e5e5;
  z-index: 3;
  a,
  svg {
    margin: 7px 10px;
    padding: 3px 5px;
  }
  a {
    text-decoration: none;
    color: black;
    line-height: 1.5em;
    text-underline-offset: 5px;
  }
  svg {
    font-size: 1.4em;
  }
  &.active {
    background-color: white;
    padding-top: 70px;
    top: 0;
    transition: 0.3s;
  }
  @media (min-width: 521px) {
    display: none;
  }
`;
