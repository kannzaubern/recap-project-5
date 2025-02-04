import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceCard({ artPiece, isFavorite, toggleFavorite }) {
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
      <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
    </main>
  );
}
