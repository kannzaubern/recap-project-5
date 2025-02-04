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
      <h1 style={{ textAlign: "center" }}>Art Gallery</h1>
      <Gallery
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        artPieces={favoritePieces}
      />
    </>
  );
}
