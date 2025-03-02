import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <StyledNavBar>
        <Link href="/">Spotlight</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/favorites">Favorites</Link>
      </StyledNavBar>
    </>
  );
}

const StyledNavBar = styled.nav`
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #154618;
  padding: 1rem 0;
  a {
    color: #b1ec6f;
    text-decoration: none;
  }

  a[aria-current="page"] {
    font-weight: bold;
    color: #ffffff;
  }
`;
