import Image from "next/image";

export default function Spotlight({ randomArtPiece }) {
  return (
    <>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.title}
        width={500}
        height={250}
        style={{
          borderRadius: "16px",
        }}
      />
      <h3>{randomArtPiece.artist}</h3>
    </>
  );
}
