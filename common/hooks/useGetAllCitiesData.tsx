import { CitiesDataType } from "@/constants/globalTypes";
import React, { useEffect, useState } from "react";

export function useGetAllCitiesData() {
  const [allCitiesData, setAllCitiesData] = useState<CitiesDataType>([]);

  const getCitiesData = async () => {
    const res = await fetch("/api/global/getAllCities");
    const json = await res.json();
    const data = await json.data;

    setAllCitiesData(data);
  };

  useEffect(() => {
    getCitiesData();
  }, []);

  return allCitiesData;
}
