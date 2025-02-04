import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Gallery</Link>
      <Link href="/favorites">Favorites</Link>
    </>
  );
}
