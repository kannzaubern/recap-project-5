import Spotlight from "@/components/Spotlight";

export default function HomePage({ artPieces }) {
  const displayRandomArtPiece =
    artPieces[Math.floor(Math.random() * artPieces.length)];

  // Math.random() returns random floating-point number between 0 and 1 (e.g. 0.712).

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Art Gallery</h1>
      <Spotlight randomArtPiece={displayRandomArtPiece} />
    </>
  );
}
