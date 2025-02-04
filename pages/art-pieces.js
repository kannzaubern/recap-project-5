import Head from "next/head";
import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import FavoriteButton from "@/components/FavoriteButton";

export default function ArtGallery({ favorites, toggleFavorite }) {
  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <p>Failed to load Art Pieces</p>;
  if (!artPieces) return <p>Loading ...</p>;

  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <ul>
        {artPieces.map((piece) => (
          <li key={piece.slug}>
            <ArtPieces
              title={piece.name}
              image={piece.imageSource}
              artist={piece.artist}
            />
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
