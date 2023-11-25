import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "@/common/contexts/AuthProvider";
import { getCitiesApi } from "@/common/helpers/getApi/getCitiesApi";
import { createContext, useEffect, useState } from "react";
import { getGameTypesApi } from "@/common/helpers/getApi/getGameTypesApi";

const GlobalDataContext = createContext({});

export default function App({ Component, pageProps }: AppProps) {
  const [contextData, setContextData] = useState({});

  useEffect(() => {
    // 取得所有城市資料
    const allCitiesData = getCitiesApi();

    // 取得所有遊戲種類資料
    const allGameTypesData = getGameTypesApi();

    setContextData({ allCitiesData, allGameTypesData });
  }, []);

  return (
    <GlobalDataContext.Provider value={contextData}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </GlobalDataContext.Provider>
  );
}
