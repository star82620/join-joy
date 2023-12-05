import React, { useEffect, useState } from "react";
import { GameCategoriesType } from "@/constants/types/apiTypes/game";

export function useGetAllGameCategories() {
  const [allGameCategories, setAllGameCategories] =
    useState<GameCategoriesType>([]);

  const getGameTypesData = async () => {
    const res = await fetch("/api/global/getAllGameCategories");
    const json = await res.json();
    const data = await json.data;

    setAllGameCategories(data);
  };

  useEffect(() => {
    getGameTypesData();
  }, []);

  return allGameCategories;
}
