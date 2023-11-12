import React from "react";
import { GameItemProps } from "./data";

export default function GameItem({
  game,
  isReadOnly,
  handleSelected,
}: GameItemProps) {
  const { gameId, gametype, gameName, peopleNum, version, qtu } = game;
  return (
    <li>
      <label className="flex justify-between md:gap-3 py-2 bg-white text-center md:text-sm">
        {!isReadOnly && (
          <div className="w-[10%]">
            <input type="checkbox" value={gameId} onChange={handleSelected} />
          </div>
        )}
        <div className="w-[20%] min-w-[52px]">
          <span className="text-xs border-[0.5px] rounded p-1 whitespace-nowrap md:px-0.5 md:py-1">
            {gametype}
          </span>
        </div>
        <div className="w-[50%] min-w-[120px] text-left">{gameName}</div>
        {isReadOnly && (
          <>
            <div className="w-[30%] min-w-[84px]">{peopleNum}</div>
            <div className="w-[20%] min-w-[28px]">{version}</div>
          </>
        )}
        <div className="w-[20%] min-w-[28px]">{qtu}</div>
      </label>
    </li>
  );
}
