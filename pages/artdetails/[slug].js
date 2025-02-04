import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArPieceDetails";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const { data: artPieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <p>Failed to load art pieces</p>;
  if (!artPieces) return <p>Loading...</p>;

  // Find art piece based on the slug
  const artPiece = artPieces.find((piece) => piece.slug === slug);

  if (!artPiece) {
    return <p>Art Piece not found</p>;
  }

  return <ArtPieceDetails artPiece={artPiece} />;
}
