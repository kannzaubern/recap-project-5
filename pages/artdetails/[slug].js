import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  artPieces,
  favorites,
  toggleFavorite,
}) {
  const router = useRouter(); // Initialize router object (which contains information about the current route), includes details like current pathname, query parameters, etc.
  const slug = router.query.slug; // "Get the slug property from router.query and assign it to the variable slug."

  // Find the specific art piece that matches the slug from the URL
  const singleArtPiece = artPieces.find((piece) => piece.slug === slug);

  if (!singleArtPiece) {
    return <p>Art Piece not found</p>;
  }

  return (
    <ArtPieceDetails
      artPiece={singleArtPiece}
      isFavorite={favorites.includes(singleArtPiece.slug)}
      toggleFavorite={toggleFavorite}
    />
  );
}
