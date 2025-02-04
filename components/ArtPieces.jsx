import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ artPiece }) {
  return (
    <main>
      <h2>{artPiece.name}</h2>
      <Link href={`/artdetails/${artPiece.slug}`}>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name || "Artwork"}
          width={400}
          height={300}
        />
      </Link>
      <h3>{artPiece.artist}</h3>
    </main>
  );
}
