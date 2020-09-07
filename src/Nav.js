import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const RigthNav = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;

  li {
    padding: 1rem 0.5rem;
    font-weight: 800;
  }

  .activ {
    text-decoration: none;
    color: #c1c1c1;
  }

  a.active {
    color: black;
  }

  @media (max-width: 992px) {
    translate: 0;
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    font-size: 12pt;
    flex-flow: column nowrap;
    background: rgba(102, 102, 102, 0.9);
    box-shadow: none;
    color: #ffffff;
    height: 100%;
    max-width: 80%;
    overflow-y: auto;
    position: fixed;
    right: 0;
    top: 0;
    width: 18em;
    z-index: 101;
    padding: 3em 2em;
    transition: transform 0.3s ease-in-out;
    li {
      font-size: 16px;
      margin: 0;
      border-top: solid 1px rgba(255, 255, 255, 0.25);
      display: block;
      padding: 0;
      text-decoration: none;
      border-bottom: 0;
      font-weight: 600;
      padding-left: 4px;
    }
    li:first-child {
      border-top: 0;
    }
    li a {
      transition: 1s;
    }
    li:last-child {
      margin-right: 0rem;
    }
  }
`;

const Nav = ({ open }) => {
  return (
    <RigthNav open={open} className={"items"}>
      <li>
        <NavLink to="/home" className={"activ"}>
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={"activ"}>
          our services
        </NavLink>
      </li>
      <li>
        <NavLink to="/work" className={"activ"}>
          how we work
        </NavLink>
      </li>
      <li>
        <NavLink to="/testimonials" className={"activ"}>
          testimonials
        </NavLink>
      </li>
      <li>
        <NavLink to="/examples" className={"activ"}>
          work examples
        </NavLink>
      </li>
    </RigthNav>
  );
};

export default Nav;
