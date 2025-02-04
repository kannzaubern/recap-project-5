import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import NavBar from "@/components/NavBar";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
