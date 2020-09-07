import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: ${({ open }) => (open ? "10px" : "10px")};
  right: ${({ open }) => (open ? "10%" : "3%")};
  z-index: 102;
  display: none;
  transition: 1s;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "grey" : "#ccc")};
    border-radius: 4px;
    transform-origin: 1px;
    transition: all 0.3s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(0)" : "rotate(45deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      opacity: ${({ open }) => (open ? "1" : "0")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(0)" : "rotate(-45deg)")};
    }
  }
  @media (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    translate: 0;
  }
  @media only screen and (max-width: 845px) {
    right: 3%;
  }
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <Nav open={open} />
    </>
  );
};

export default BurgerMenu;
