import Head from "next/head";
import Gallery from "@/components/Gallery";

export default function ArtGallery({ artPieces, favorites, toggleFavorite }) {
  console.log("ArtPieces from API:", artPieces);

  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Gallery
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        artPieces={artPieces}
      />
    </>
  );
}
