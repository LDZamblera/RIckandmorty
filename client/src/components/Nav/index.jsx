import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  NavStyle,
  LinkContainer,
  SectionsContainer,
  P,
  ButtonLogOut,
} from "./styles";

const Nav = ({ children, setAccess }) => {
  const location = useLocation();
  return (
    <NavStyle>
      <LinkContainer>
        {location.pathname === "/home" && children}
        <SectionsContainer>
          <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
            <P>Home</P>
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
            <P>About</P>
          </Link>
          <Link
            to="/favourites"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <P>Favourites</P>
          </Link>
          <ButtonLogOut onClick={() => setAccess(false)}>Logout</ButtonLogOut>
        </SectionsContainer>
      </LinkContainer>
    </NavStyle>
  );
};

export default Nav;
