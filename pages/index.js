import NavBar from "@/components/NavBar";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

export default function HomePage() {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <p>Failed to load Art Pieces</p>;
  if (!artPieces) return <p>Loading ...</p>;

  const displayRandomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  return <Spotlight randomArtPiece={displayRandomArtPiece} />;
}
