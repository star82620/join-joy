import React from "react";
import { gameTypeIndex } from "@/constants/wordIndexes";
import { GameItemProps } from "../data";

export default function GameItem({ game }: GameItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="border-[0.5px] rounded bg-white p-1 text-xs text-gray-800 font-semibold">
        {gameTypeIndex[game.gameType]}
      </span>
      <span className="font-medium md:text-sm">{game.gameName}</span>
    </li>
  );
}
