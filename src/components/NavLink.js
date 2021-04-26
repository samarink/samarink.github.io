import React from "react"
import styled, { css } from "styled-components"
import Link from "./Link"

const LinkStyled = styled(Link)`
  font-size: 24px;
  color: black;
  text-decoration: none;
  padding-bottom: 3px;
  margin: 6px;

  position: relative;
  transition: all 0.25s linear;
  border-bottom: 3px solid #ff8cbc;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background-color: #61a3ff;
    position: absolute;
    left: 0;
    bottom: -3px;
    transform-origin: left;
    transform: scale(0);
    transition: 0.25s linear;
  }

  &:hover:before {
    transform: scale(1);
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      cursor: not-allowed;
      text-decoration: line-through;
      color: gray;
      border: none;
      &:hover:before {
        transform: scale(0);
      }
    `}
`

export default function NavLink({ to, children, ...rest }) {
  return (
    <LinkStyled isCurrent={window.location.pathname === to} to={to} {...rest}>
      {children}
    </LinkStyled>
  )
}
