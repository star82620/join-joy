import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/common/contexts/AuthProvider";
import CitiesProvider from "@/common/contexts/CitiesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Component {...pageProps} />
      </CitiesProvider>
    </AuthProvider>
  );
}
