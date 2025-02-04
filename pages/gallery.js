import Gallery from "@/components/Gallery";

export default function ArtGallery({ artPieces, favorites, toggleFavorite }) {
  console.log("ArtPieces from API:", artPieces);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Art Gallery</h1>
      <Gallery
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        artPieces={artPieces}
      />
    </>
  );
}
