import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  list-style: none;
  background: teal;
  justify-content: center;
  margin: 0;
  align-items: center;
  padding-left: 0;
`;

export const ListItem = styled.li`
  padding: 20px;
`;
