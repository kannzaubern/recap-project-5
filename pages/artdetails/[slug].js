import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  artPieces,
  favorites,
  toggleFavorite,
}) {
  const router = useRouter(); // Initialize router object to access current route
  const { slug } = router.query; // Extract slug parameter from URL

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
