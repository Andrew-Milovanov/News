import React from "react";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import styled from "styled-components";

const Head = styled.nav`
  display: flex;
  justify-content: space-between;
  line-height: 3.25rem;
  align-items: center;
  letter-spacing: 0.025rem;
  text-decoration: none;

  .url {
    text-decoration: none;
    color: black;
  }

  .logo {
    font-size: 2rem;
    padding: 0 0;
  }
`;

const Header = () => {
  return (
    <Head className={"header"}>
      <div className={"logo"}>
        <NavLink to="/home" className={"url"}>
          <strong>Black</strong>+ White
        </NavLink>
      </div>
      <BurgerMenu />
    </Head>
  );
};

export default Header;
