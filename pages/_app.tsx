import { SetStateAction, createContext, useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Loading from "@/common/components/Loading";
import "@/styles/globals.css";
import { Router } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {isLoading && <Loading />}
    </>
  );
}
