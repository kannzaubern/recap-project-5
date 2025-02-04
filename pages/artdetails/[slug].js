import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  // Find art piece based on the slug
  const singleArtPiece = artPieces.find((piece) => piece.slug === slug);

  if (!singleArtPiece) {
    return <p>Art Piece not found</p>;
  }

  return <ArtPieceDetails artPiece={singleArtPiece} />;
}
