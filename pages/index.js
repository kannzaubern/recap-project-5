import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>ART GALLERY</h1>
      <nav>
        <Link href="/art-pieces">Art Pieces</Link>
        <Link href="/favorites">Favorites</Link>
      </nav>
    </div>
  );
}
