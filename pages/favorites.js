import Head from "next/head";
import Gallery from "@/components/Gallery";

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
      <Gallery
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        artPieces={favoritePieces}
      />
    </>
  );
}
