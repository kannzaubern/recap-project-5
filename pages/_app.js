import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(slug) {
    if (favorites.includes(slug)) {
      setFavorites(favorites.filter((fav) => fav !== slug));
    } else {
      setFavorites([...favorites, slug]);
    }
  }

  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <p>Failed to load art pieces</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <NavBar />
      <Component
        {...pageProps}
        favorites={favorites}
        artPieces={artPieces}
        toggleFavorite={toggleFavorite}
      />
    </SWRConfig>
  );
}
