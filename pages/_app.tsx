import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/common/components/Layout";
import AuthProvider from "@/common/contexts/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
