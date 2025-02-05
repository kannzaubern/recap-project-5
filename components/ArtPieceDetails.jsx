import Link from "next/link";
import ArtPieceCard from "./ArtPieceCard";

export default function ArtPieceDetails({
  artPiece,
  isFavorite,
  toggleFavorite,
}) {
  if (!artPiece) {
    return <p>Art Piece not found.</p>;
  }
  console.log("artPiece.slug", artPiece.slug);
  return (
    <>
      <Link
        href="/gallery"
        style={{
          color: "#154618",
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        ← Back to Gallery
      </Link>
      <ArtPieceCard
        artPiece={artPiece}
        isFavorite={isFavorite}
        toggleFavorite={() => toggleFavorite(artPiece.slug)}
      />
      <h3>Year: {artPiece.year}</h3>
      <h3>Genre: {artPiece.genre}</h3>
    </>
  );
}
