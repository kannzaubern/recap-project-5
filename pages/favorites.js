import Head from "next/head";
import ArtPieces from "@/components/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton";

export default function FavoritePage({ favorites, artPieces, toggleFavorite }) {
  const favoritePieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );

  if (favoritePieces.length === 0) {
    return <p>No favorite art pieces yet.</p>;
  }

  return (
    <>
      <Head>
        <title>Favorite Art Pieces</title>
      </Head>
      <ul>
        {favoritePieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPieces artPiece={piece} />
            <FavoriteButton
              isFavorite={favorites.includes(piece.slug)}
              onClick={() => toggleFavorite(piece.slug)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
