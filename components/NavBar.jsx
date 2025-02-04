import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <>
      <StyledNavBar>
        <Link href="/">Spotlight</Link>
        <Link href="/art-pieces">Gallery</Link>
        <Link href="/favorites">Favorites</Link>
      </StyledNavBar>
    </>
  );
}

const StyledNavBar = styled.nav`
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
    font-weight: lighter;
  }
`;
