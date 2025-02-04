import Spotlight from "@/components/Spotlight";

export default function HomePage({ artPieces }) {
  const displayRandomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Art Gallery</h1>
      <Spotlight randomArtPiece={displayRandomArtPiece} />
    </>
  );
}
