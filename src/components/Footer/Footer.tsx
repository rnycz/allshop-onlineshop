import React from "react";
import { FooterStyle } from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      {new Date().getFullYear()}
      <a href="https://radeknycz.netlify.app/" target="_blank">
        Radosław Nycz
      </a>
    </FooterStyle>
  );
};

export default Footer;
