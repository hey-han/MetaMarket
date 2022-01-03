import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
