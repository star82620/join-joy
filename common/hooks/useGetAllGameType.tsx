import { GameItemType } from "@/modules/GroupProfile/data";
import React, { useEffect, useState } from "react";

export function useGetAllGameTypes() {
  const [allGameTypes, setAllGameTypes] = useState<GameItemType[]>([]);

  const getGameTypesData = async () => {
    const res = await fetch("/api/global/getAllGameTypes");
    const json = await res.json();
    const data = await json.data;

    setAllGameTypes(data);
  };

  useEffect(() => {
    getGameTypesData();
  }, []);

  return allGameTypes;
}
