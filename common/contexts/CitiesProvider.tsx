import React, { useEffect, useState, createContext, Children } from "react";
import { getCitiesApi } from "../helpers/getApi/getCitiesApi";

export const CitiesDataContext = createContext([]);

export default function CitiesProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCitiesApi().then((citiesData) => {
      console.log("RRRR", citiesData);
      // setData(citiesData);
    });
  }, []);

  return (
    <CitiesDataContext.Provider value={data}>
      {children}
    </CitiesDataContext.Provider>
  );
}
