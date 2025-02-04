import Spotlight from "@/components/Spotlight";

export default function HomePage({ artPieces }) {
  const displayRandomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  return <Spotlight randomArtPiece={displayRandomArtPiece} />;
}
