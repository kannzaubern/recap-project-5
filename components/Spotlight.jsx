import useSWR from "swr";
import Head from "next/head";
import ArtPieces from "./ArtPieces";
import Image from "next/image";

export default function Spotlight({ randomArtPiece }) {
  return (
    <>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.title}
        width={400}
        height={300}
      />
      <h3>{randomArtPiece.artist}</h3>
    </>
  );
}
