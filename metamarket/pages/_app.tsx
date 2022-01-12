import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "../components/Navigation";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export interface User {
  // actually this interface shouldnt be in this file but lets do it next time
  id: number;
  username: string;
  email: string;
  jwt: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="bg-gray-100 min-h-screen">
        <Head>
          <title>MetaMarket</title>
          <link rel="icon" href="/MetaMarket.ico" />
          <link rel="shortcut icon" href="/MetaMark.icog" />
        </Head>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </AuthContext.Provider>
  );
}

export default MyApp;
